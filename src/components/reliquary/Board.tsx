import { useState } from "react";
import { cellOf, COLS, SQUARES, type Square } from "@/lib/reliquary/road";
import { nextGate, roadOpen, type Gate, type Mode } from "@/lib/reliquary/sitting";
import { Table } from "@/components/reliquary/Table";

const AGES = [
  {
    at: 0,
    key: "hall",
    name: "The Hall",
    src: "/hall.jpg",
    alt: "A quiet solitaire table under a single lamp",
    line: "The lamp is still lit. The cards have not moved.",
  },
  {
    at: 0,
    key: "hole",
    name: "The Hole",
    src: "/country.jpg",
    alt: "The dark road under the broken table",
    line: "The table gave way. You are standing on the map.",
  },
  {
    at: 10,
    key: "chapel",
    name: "The Chapel",
    src: "/chapel.jpg",
    alt: "A ruined chapel held by one hearth fire",
    line: "Someone kept five dice, and the fire.",
  },
  {
    at: 14,
    key: "bridge",
    name: "The Bridge",
    src: "/river.jpg",
    alt: "A black river under a broken bridge",
    line: "The far bank is one bid away.",
  },
  {
    at: 20,
    key: "yard",
    name: "The Yard",
    src: "/yard.jpg",
    alt: "Stone tiles standing in the mire",
    line: "Three letters would be enough.",
  },
  {
    at: 27,
    key: "maw",
    name: "The Maw",
    src: "/maw.jpg",
    alt: "A faceless thing of cards and bone blocking the mountain road",
    line: "It is in the road. It does not want marks.",
  },
  {
    at: 28,
    key: "queen",
    name: "The Queen",
    src: "/queen.jpg",
    alt: "The queen, face in shadow, coat a broken window",
    line: "Her face has not come back.",
  },
  {
    at: 29,
    key: "reliquary",
    name: "The Reliquary",
    src: "/hall.jpg",
    alt: "The hall again, waiting",
    line: "The same room. The deck is the one you carried.",
  },
] as const;

const GAP_X = 118;
const GAP_Y = 132;
const ORIGIN_X = 78;
const ORIGIN_Y = 36;

function xy(id: number) {
  const { col, rowFromTop } = cellOf(id);
  return { x: ORIGIN_X + col * GAP_X, y: ORIGIN_Y + rowFromTop * GAP_Y };
}

function ageIndexFor(id: number): number | null {
  const index = AGES.findIndex((age) => age.key !== "hall" && age.at === id);
  return index >= 0 ? index : null;
}

export function Board() {
  const [ageIndex, setAgeIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [table, setTable] = useState(false);
  const [picked, setPicked] = useState(0);
  const [marks, setMarks] = useState(0);
  const [owned, setOwned] = useState<string[]>([]);
  const [mawBeaten, setMawBeaten] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const age = AGES[ageIndex] ?? AGES[0];
  const here = age.key === "hall" ? -1 : age.at;
  const square: Square | undefined = SQUARES[picked];
  const vista = ageIndexFor(picked);

  function go(next: number) {
    const index = Math.min(AGES.length - 1, Math.max(0, next));
    const nextAge = AGES[index];
    if (!nextAge) return;
    if (index > ageIndex && !roadOpen(nextAge.key, owned, mawBeaten)) {
      if (nextAge.key === "queen" && !mawBeaten) {
        setNote("It is still in the road. Marks will not move it.");
        return;
      }
      const gate = nextGate(owned, mawBeaten);
      setNote(gate ? `${gate.opens} is shut. The ${gate.name} costs ${gate.cost}.` : "The road is shut.");
      return;
    }
    setNote(null);
    setAgeIndex(index);
    if (nextAge.key !== "hall") setPicked(nextAge.at);
  }

  function buy(gate: Gate) {
    const upcoming = nextGate(owned, mawBeaten);
    if (!upcoming || upcoming.key !== gate.key || marks < gate.cost) return;
    setMarks((value) => value - gate.cost);
    setOwned((value) => [...value, gate.key]);
    setNote(`${gate.opens} is open.`);
  }

  function face(won: boolean) {
    if (won) {
      setMawBeaten(true);
      setNote("It moves. The coat can be bought.");
    } else {
      setMarks((value) => Math.max(0, value - 1));
      setNote("It does not move. It takes a mark.");
    }
  }

  const mode: Mode | null =
    age.key === "hall"
      ? "lamp"
      : age.key === "chapel" && owned.includes("chapel")
        ? "cut"
        : age.key === "bridge" && owned.includes("bridge")
          ? "bid"
          : age.key === "maw"
            ? "maw"
            : null;
  const rows = Math.ceil(SQUARES.length / COLS);
  const width = ORIGIN_X * 2 + (COLS - 1) * GAP_X;
  const height = ORIGIN_Y + (rows - 1) * GAP_Y + 78;
  const d = SQUARES.map((s) => {
    const p = xy(s.id);
    return `${s.id === 0 ? "M" : "L"} ${p.x} ${p.y}`;
  }).join(" ");
  const stairA = xy(4);
  const stairB = xy(9);
  const ledgeA = xy(18);
  const ledgeB = xy(22);

  return (
    <section className="scene" aria-label={age.name}>
      <img key={age.key} className="scene-img" src={age.src} alt={age.alt} />
      <div className="scene-vignette" />

      {ageIndex > 0 && (
        <button className="step back" type="button" onClick={() => go(ageIndex - 1)}>
          <span>Back</span>
        </button>
      )}
      {ageIndex < AGES.length - 1 && (
        <button className="step on" type="button" onClick={() => go(ageIndex + 1)}>
          <span>Onward</span>
        </button>
      )}

      <div className="scene-caption">
        <strong>{age.name}</strong>
        <span>{age.line}</span>
        {age.key !== "hall" && SQUARES[age.at]?.game && <em>{SQUARES[age.at].game}</em>}
        {note && <em>{note}</em>}
      </div>

      <div className="dock">
        {mode && (
          <button className="book-btn" type="button" onClick={() => setTable(true)}>
            {mode === "maw" ? "Face it" : mode === "bid" ? "The bid" : "Sit down"}
          </button>
        )}
        {age.key !== "hall" && (
          <button className="book-btn" type="button" onClick={() => go(0)}>
            The hall
          </button>
        )}
        <button className="book-btn" type="button" onClick={() => setOpen(true)}>
          Map
        </button>
      </div>

      {open && (
        <div className="journal-back" onClick={() => setOpen(false)}>
          <div
            className="journal"
            role="dialog"
            aria-label="The map"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="page-leaf map-leaf">
              <p className="leaf-kicker">Your map</p>
              <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="The road of games">
                <path d={d} fill="none" stroke="#8d6b45" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
                <path d={d} fill="none" stroke="#5c2a26" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                <path
                  d={`M ${stairA.x} ${stairA.y} Q ${(stairA.x + stairB.x) / 2} ${Math.min(stairA.y, stairB.y) - 48} ${stairB.x} ${stairB.y}`}
                  fill="none"
                  stroke="#6b3a32"
                  strokeDasharray="5 5"
                />
                <path
                  d={`M ${ledgeA.x} ${ledgeA.y} Q ${(ledgeA.x + ledgeB.x) / 2 + 36} ${(ledgeA.y + ledgeB.y) / 2} ${ledgeB.x} ${ledgeB.y}`}
                  fill="none"
                  stroke="#6b3a32"
                  strokeDasharray="5 5"
                />
                {SQUARES.map((s) => {
                  const p = xy(s.id);
                  const r = s.labeled ? 16 : 4;
                  const reached = here >= s.id;
                  const active = picked === s.id;
                  return (
                    <g key={s.id} className="sq" onClick={() => setPicked(s.id)}>
                      <circle cx={p.x} cy={p.y} r="22" fill="transparent" />
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={r}
                        fill={reached && s.labeled ? "#6b3a32" : "#efe2c8"}
                        stroke={active ? "#2c241c" : "#6b5340"}
                        strokeWidth={active ? 2.4 : 1}
                      />
                      {s.labeled && (
                        <text
                          x={p.x}
                          y={p.y + r + 14}
                          textAnchor="middle"
                          className="map-name"
                        >
                          {s.short}
                        </text>
                      )}
                    </g>
                  );
                })}
                {here >= 0 && (
                  <rect
                    x={xy(here).x - 6}
                    y={xy(here).y - 28}
                    width="12"
                    height="18"
                    rx="1"
                    fill="#f7f1e4"
                    stroke="#6b3a32"
                    pointerEvents="none"
                  />
                )}
              </svg>
            </div>
            <div className="page-leaf leaf-right">
              <p className="leaf-kicker">{square ? square.kind : "A square"}</p>
              <h2>{square?.name}</h2>
              {square?.game && <p className="leaf-game">{square.game}</p>}
              {square?.relic && <p className="leaf-relic">{square.relic}</p>}
              <p className="leaf-body">{square?.blurb}</p>
              {vista !== null && roadOpen(AGES[vista]?.key ?? "", owned, mawBeaten) && (
                <button
                  className="close-book go"
                  type="button"
                  onClick={() => {
                    go(vista);
                    setOpen(false);
                  }}
                >
                  Step into it
                </button>
              )}
              {vista !== null && !roadOpen(AGES[vista]?.key ?? "", owned, mawBeaten) && (
                <p className="leaf-body">This stretch is still shut. Sit at the hall and buy the way.</p>
              )}
              <button className="close-book" type="button" onClick={() => setOpen(false)}>
                Close the map
              </button>
            </div>
          </div>
        </div>
      )}

      {table && (
        <Table
          mode={mode ?? "lamp"}
          marks={marks}
          owned={owned}
          mawBeaten={mawBeaten}
          onEarn={(amount) => setMarks((value) => value + amount)}
          onBuy={buy}
          onMaw={face}
          onClose={() => setTable(false)}
        />
      )}
    </section>
  );
}
