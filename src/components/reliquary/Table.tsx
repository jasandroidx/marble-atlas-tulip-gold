import { useState } from "react";
import {
  beats,
  canCut,
  canPlay,
  cutMarks,
  marksFor,
  nextGate,
  rankLabel,
  shuffleDeck,
  type Card,
  type Gate,
  type Mode,
} from "@/lib/reliquary/sitting";

const COPY: Record<Mode, { kicker: string; title: string; rule: string }> = {
  lamp: {
    kicker: "The hall",
    title: "The lamp",
    rule: "Same suit, same rank, or the next rank up. It pays poorly. Sit long enough and it will still get you there.",
  },
  cut: {
    kicker: "The chapel",
    title: "The cut",
    rule: "Only the next rank up, or a higher card of the same suit. Harder than the lamp. It pays better.",
  },
  bid: {
    kicker: "The bridge",
    title: "The bid",
    rule: "Name how many you will make. Then play them by the cut. Miss the bid and the river pays nothing.",
  },
  maw: {
    kicker: "In the road",
    title: "The Maw",
    rule: "Five tricks. Beat its card with a higher one. An ace is high. Win three, and it moves. Lose, and it takes a mark.",
  },
};

export function Table({
  mode,
  marks,
  owned,
  mawBeaten,
  onEarn,
  onBuy,
  onMaw,
  onClose,
}: {
  mode: Mode;
  marks: number;
  owned: string[];
  mawBeaten: boolean;
  onEarn: (amount: number) => void;
  onBuy: (gate: Gate) => void;
  onMaw: (won: boolean) => void;
  onClose: () => void;
}) {
  const copy = COPY[mode];
  const gate = nextGate(owned, mawBeaten);
  const afford = gate ? marks >= gate.cost : false;

  return (
    <div className="journal-back" onClick={onClose}>
      <div className="table" role="dialog" aria-label={copy.title} onClick={(event) => event.stopPropagation()}>
        <div className="table-top">
          <p className="leaf-kicker">{copy.kicker}</p>
          <h2>{copy.title}</h2>
          <p className="table-rule">{copy.rule}</p>
          {mode === "bid" ? (
            <Bid onEarn={onEarn} />
          ) : mode === "maw" ? (
            <Maw onEarn={onEarn} onMaw={onMaw} />
          ) : (
            <Sequence mode={mode} onEarn={onEarn} />
          )}
          <div className="table-row">
            <strong>{marks} marks</strong>
            <button type="button" className="close-book" onClick={onClose}>
              Stand up
            </button>
          </div>
        </div>
        <div className="table-shop">
          <p className="leaf-kicker">The road</p>
          {gate ? (
            <>
              <h3>{gate.name}</h3>
              <p>
                {gate.cost} {gate.cost === 1 ? "mark" : "marks"}. Opens {gate.opens}.
              </p>
              <button type="button" className="close-book go" disabled={!afford} onClick={() => onBuy(gate)}>
                {afford ? "Buy it" : "Not enough"}
              </button>
            </>
          ) : mawBeaten ? (
            <p>The road is open. The reliquary will take you.</p>
          ) : (
            <p>Past the yard, something is in the road. Marks will not move it.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Sequence({ mode, onEarn }: { mode: "lamp" | "cut"; onEarn: (n: number) => void }) {
  const legal = mode === "cut" ? canCut : canPlay;
  const pay = mode === "cut" ? cutMarks : marksFor;
  const [sitting, setSitting] = useState(() => {
    const deck = shuffleDeck();
    return { deck: deck.slice(3), hand: deck.slice(0, 3), top: null as Card | null, played: 0, done: false, payout: 0 };
  });

  function play(card: Card) {
    if (sitting.done || !legal(card, sitting.top)) return;
    const hand = sitting.hand.filter((item) => item.id !== card.id);
    const deck = sitting.deck.slice();
    if (deck.length > 0 && hand.length < 3) hand.push(deck.shift()!);
    const played = sitting.played + 1;
    const done = hand.length === 0 || hand.every((item) => !legal(item, card));
    const payout = done ? pay(played) : 0;
    if (done) onEarn(payout);
    setSitting({ deck, hand, top: card, played, done, payout });
  }

  return (
    <>
      <div className="felt">
        <div className="lamp">
          {sitting.top ? <CardFace card={sitting.top} /> : <div className="card empty">Lamp</div>}
          <span>
            {sitting.played} played · {sitting.deck.length} left
          </span>
        </div>
        <Hand cards={sitting.hand} legal={(card) => !sitting.done && legal(card, sitting.top)} onPlay={play} />
      </div>
      {sitting.done && <End payout={sitting.payout} again={() => {
        const deck = shuffleDeck();
        setSitting({ deck: deck.slice(3), hand: deck.slice(0, 3), top: null, played: 0, done: false, payout: 0 });
      }} />}
    </>
  );
}

function Bid({ onEarn }: { onEarn: (n: number) => void }) {
  const [cards, setCards] = useState<Card[]>(() => shuffleDeck().slice(0, 5));
  const [bid, setBid] = useState<number | null>(null);
  const [top, setTop] = useState<Card | null>(null);
  const [played, setPlayed] = useState(0);
  const [left, setLeft] = useState<Card[]>([]);
  const [done, setDone] = useState(false);
  const [payout, setPayout] = useState(0);

  function choose(n: number) {
    setBid(n);
    setLeft(cards);
  }

  function play(card: Card) {
    if (done || bid === null || !canCut(card, top)) return;
    const hand = left.filter((item) => item.id !== card.id);
    const count = played + 1;
    const finished = hand.length === 0 || hand.every((item) => !canCut(item, card));
    const earned = finished ? (count >= bid ? bid * 2 : 0) : 0;
    if (finished) onEarn(earned);
    setLeft(hand);
    setTop(card);
    setPlayed(count);
    setDone(finished);
    setPayout(earned);
  }

  if (bid === null) {
    return (
      <div className="felt">
        <Hand cards={cards} legal={() => false} onPlay={() => {}} />
        <div className="table-row">
          {[2, 3, 4].map((n) => (
            <button key={n} type="button" className="close-book go" onClick={() => choose(n)}>
              Bid {n}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="felt">
        <div className="lamp">
          {top ? <CardFace card={top} /> : <div className="card empty">Bid {bid}</div>}
          <span>
            {played} of {bid}
          </span>
        </div>
        <Hand cards={left} legal={(card) => !done && canCut(card, top)} onPlay={play} />
      </div>
      {done && (
        <End
          payout={payout}
          again={() => {
            setCards(shuffleDeck().slice(0, 5));
            setBid(null);
            setTop(null);
            setPlayed(0);
            setLeft([]);
            setDone(false);
            setPayout(0);
          }}
        />
      )}
    </>
  );
}

function Maw({ onEarn, onMaw }: { onEarn: (n: number) => void; onMaw: (won: boolean) => void }) {
  const [state, setState] = useState(() => openTrick(shuffleDeck(), 1, 0));

  function play(card: Card) {
    if (state.done || !state.threat || !beats(card, state.threat)) return;
    advance(true, card);
  }

  function give() {
    if (state.done) return;
    advance(false, state.threat);
  }

  function advance(took: boolean, shown: Card | null) {
    const won = state.won + (took ? 1 : 0);
    if (state.trick >= 5) {
      const passed = won >= 3;
      onEarn(passed ? 6 : 0);
      onMaw(passed);
      setState({ ...state, hand: state.hand.filter((c) => c.id !== (took ? shown?.id : "")), threat: state.threat, won, done: true, passed });
      return;
    }
    const deck = state.deck.slice();
    const next = openTrick(deck, state.trick + 1, won);
    setState(next);
  }

  return (
    <>
      <div className="felt">
        <div className="lamp">
          {state.threat ? <CardFace card={state.threat} /> : <div className="card empty">Still</div>}
          <span>
            Trick {Math.min(state.trick, 5)} of 5 · {state.won} won
          </span>
        </div>
        <Hand cards={state.hand} legal={(card) => !state.done && !!state.threat && beats(card, state.threat)} onPlay={play} />
        {!state.done && state.hand.every((card) => !state.threat || !beats(card, state.threat)) && (
          <button type="button" className="close-book" onClick={give}>
            It takes the trick
          </button>
        )}
      </div>
      {state.done && (
        <p className="table-end">
          {state.passed ? "It moves. Six marks, and the road past it can be bought." : "It does not move."}
        </p>
      )}
    </>
  );
}

function openTrick(deck: Card[], trick: number, won: number) {
  const rest = deck.slice();
  const threat = rest.shift() ?? null;
  const hand: Card[] = [];
  while (hand.length < 3 && rest.length > 0) hand.push(rest.shift()!);
  return { deck: rest, hand, threat, trick, won, done: false, passed: false };
}

function End({ payout, again }: { payout: number; again: () => void }) {
  return (
    <div className="table-row">
      <p className="table-end">
        {payout === 0 ? "Nothing for the purse." : `${payout} mark${payout === 1 ? "" : "s"}.`}
      </p>
      <button type="button" className="close-book go" onClick={again}>
        Deal again
      </button>
    </div>
  );
}

function Hand({ cards, legal, onPlay }: { cards: Card[]; legal: (card: Card) => boolean; onPlay: (card: Card) => void }) {
  return (
    <div className="hand">
      {cards.map((card) => {
        const ok = legal(card);
        return (
          <button key={card.id} type="button" className="card-btn" disabled={!ok} onClick={() => onPlay(card)}>
            <CardFace card={card} />
          </button>
        );
      })}
    </div>
  );
}

function CardFace({ card }: { card: Card }) {
  const red = card.suit === "hearts";
  return (
    <span className={red ? "card red" : "card"}>
      <b>{rankLabel(card.rank)}</b>
      <i>{red ? "♥" : "♠"}</i>
    </span>
  );
}
