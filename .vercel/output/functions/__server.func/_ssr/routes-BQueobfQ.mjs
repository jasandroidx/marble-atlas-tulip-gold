import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQueobfQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SQUARES = [
	{
		id: 0,
		name: "The Hole",
		short: "Hole",
		kind: "start",
		house: "breach",
		game: "Arrival",
		blurb: "You are set down here. The Keeper, an iron lectern with one card, tells you the realm split, the four houses walked off, and the reliquary is sealed.",
		labeled: true
	},
	{
		id: 1,
		name: "Ash",
		short: "",
		kind: "road",
		house: "breach",
		game: "Walk",
		blurb: "Empty road. Roll and keep climbing.",
		labeled: false
	},
	{
		id: 2,
		name: "Ash",
		short: "",
		kind: "road",
		house: "breach",
		game: "Walk",
		blurb: "Empty road. The fog has not lifted.",
		labeled: false
	},
	{
		id: 3,
		name: "Pip",
		short: "Pip",
		kind: "gate",
		house: "breach",
		game: "Cut",
		blurb: "A page with no face, holding a lantern that does not reach his feet. He calls a rank. You slap the rifling deck. Win, or you do not pass. His light is the first on the road.",
		labeled: true
	},
	{
		id: 4,
		name: "The Low Stair",
		short: "Stair",
		kind: "shortcut",
		house: "breach",
		game: "Shortcut to the stair's end",
		blurb: "Land here exactly and the stair skips the cracked cup. It does not skip Mabel. Pip is the one who told you it was here.",
		labeled: true
	},
	{
		id: 5,
		name: "Ash",
		short: "",
		kind: "road",
		house: "breach",
		game: "Walk",
		blurb: "Empty road, if you did not take the stair.",
		labeled: false
	},
	{
		id: 6,
		name: "The Cracked Cup",
		short: "Cup",
		kind: "trap",
		house: "breach",
		game: "Lose a roll",
		blurb: "A split dice cup in the ash. Land here and you lose your next roll. The stair exists so you can refuse this.",
		labeled: true
	},
	{
		id: 7,
		name: "Ash",
		short: "",
		kind: "road",
		house: "breach",
		game: "Walk",
		blurb: "Empty road.",
		labeled: false
	},
	{
		id: 8,
		name: "Ash",
		short: "",
		kind: "road",
		house: "breach",
		game: "Walk",
		blurb: "Empty road. The chapel is close, and still dark.",
		labeled: false
	},
	{
		id: 9,
		name: "Stair's End",
		short: "",
		kind: "road",
		house: "breach",
		game: "Walk",
		blurb: "Where the Low Stair comes out. Mabel is the next square, and she cannot be skipped.",
		labeled: false
	},
	{
		id: 10,
		name: "Mabel",
		short: "Mabel",
		kind: "gate",
		house: "hearts",
		game: "Yacht",
		blurb: "Five bone dice, three throws, hold what you like. She keeps the Heart banner. Beat her and the chapel goes from black stone to firelight. That light stays.",
		labeled: true
	},
	{
		id: 11,
		name: "Ash",
		short: "",
		kind: "road",
		house: "hearts",
		game: "Walk",
		blurb: "Empty road. Warm only after the Heart house is lit.",
		labeled: false
	},
	{
		id: 12,
		name: "The River",
		short: "River",
		kind: "way",
		house: "hearts",
		game: "River",
		blurb: "Not a gate. Cards race the current. Throw a match, same suit or the next rank, before they hit the center. The reward is a Heart boon: at the reliquary you draw one, not three.",
		labeled: true
	},
	{
		id: 13,
		name: "Ash",
		short: "",
		kind: "road",
		house: "hearts",
		game: "Walk",
		blurb: "Empty road down to the bridge.",
		labeled: false
	},
	{
		id: 14,
		name: "The Bridge",
		short: "Bridge",
		kind: "gate",
		house: "spades",
		game: "Spades",
		blurb: "The Dealer and two empty chairs. One hand of spades, you and him against the dead seats. Make the bid and the bridge drops. The water turns silver. The Spade house lights.",
		labeled: true
	},
	{
		id: 15,
		name: "Far Bank",
		short: "",
		kind: "road",
		house: "spades",
		game: "Walk",
		blurb: "The far side of the river. Silver only if the bridge is down.",
		labeled: false
	},
	{
		id: 16,
		name: "Ash",
		short: "",
		kind: "road",
		house: "spades",
		game: "Walk",
		blurb: "Empty road toward the well.",
		labeled: false
	},
	{
		id: 17,
		name: "The Well",
		short: "Well",
		kind: "way",
		house: "mire",
		game: "The fall",
		blurb: "You are one card, kicking off ledges as you drop. Miss and you fall faster. The reward is the Black Ace. Nix will take it in place of a harder game.",
		labeled: true
	},
	{
		id: 18,
		name: "The High Ledge",
		short: "Ledge",
		kind: "shortcut",
		house: "mire",
		game: "Shortcut to the graves' end",
		blurb: "Land here exactly and you skip the gravestones. You do not skip Nix. The mire still has to be answered.",
		labeled: true
	},
	{
		id: 19,
		name: "Gravestone",
		short: "",
		kind: "road",
		house: "mire",
		game: "Walk",
		blurb: "Face-down cards standing in the ground like stones.",
		labeled: false
	},
	{
		id: 20,
		name: "Gravestone",
		short: "",
		kind: "road",
		house: "mire",
		game: "Walk",
		blurb: "More of the standing cards. The road is narrow here.",
		labeled: false
	},
	{
		id: 21,
		name: "Gravestone",
		short: "",
		kind: "road",
		house: "mire",
		game: "Walk",
		blurb: "The last of the stones before Nix.",
		labeled: false
	},
	{
		id: 22,
		name: "Ledge's End",
		short: "",
		kind: "road",
		house: "mire",
		game: "Walk",
		blurb: "Where the High Ledge comes out. Nix is next.",
		labeled: false
	},
	{
		id: 23,
		name: "Nix",
		short: "Nix",
		kind: "gate",
		house: "mire",
		game: "The Ace, or the lamp",
		blurb: "A saint who sank. Give up the Black Ace and the mire drops. No Ace, and you play in a shrinking circle of lamplight while loose cards creep in. This clears the road. It does not light a house.",
		labeled: true
	},
	{
		id: 24,
		name: "The False Queen",
		short: "Shade",
		kind: "way",
		house: "diamonds",
		game: "Monte",
		blurb: "Three cards. Follow the queen. The hands cheat once, so you watch the hands. The reward is a Diamond boon: one undo in the final hand.",
		labeled: true
	},
	{
		id: 25,
		name: "The Scaffold",
		short: "Scaffold",
		kind: "way",
		house: "clubs",
		game: "House of cards",
		blurb: "Build a house on the felt. The table bumps. It has to be standing when the lamp steadies. The reward is a Club boon: a queen may open an empty column at the end.",
		labeled: true
	},
	{
		id: 26,
		name: "Ash Wood",
		short: "",
		kind: "road",
		house: "clubs",
		game: "Walk",
		blurb: "Burnt trees. They are not alive yet.",
		labeled: false
	},
	{
		id: 27,
		name: "Ash Wood",
		short: "",
		kind: "road",
		house: "clubs",
		game: "Walk",
		blurb: "The wood thickens toward the Queen.",
		labeled: false
	},
	{
		id: 28,
		name: "The Queen",
		short: "Queen",
		kind: "gate",
		house: "nave",
		game: "Court",
		blurb: "Faceless, too large for her square, coat like a broken window. You play on her while she tries to cast you off. Win, and her face returns. Clubs and Diamonds light together.",
		labeled: true
	},
	{
		id: 29,
		name: "The Reliquary",
		short: "Reliquary",
		kind: "end",
		house: "nave",
		game: "Solitaire",
		blurb: "Sealed until all four houses burn. It opens onto the hall you started in. Same lamp. Same quiet game. The deck is full, and the boons you carried are the only mercy in it.",
		labeled: true
	}
];
var OMENS = [
	{
		name: "Chapel",
		text: "Sends you to Mabel."
	},
	{
		name: "Bridge",
		text: "Sends you to the Dealer."
	},
	{
		name: "Mire",
		text: "Sends you to Nix. Often backward."
	},
	{
		name: "Well",
		text: "Sends you to the Well."
	},
	{
		name: "Queen",
		text: "Sends you to the Queen."
	},
	{
		name: "Low Stair",
		text: "Sends you to the stair."
	},
	{
		name: "Blank",
		text: "The die only glows."
	},
	{
		name: "The Hole",
		text: "All the way back to the start."
	}
];
function cellOf(id) {
	const rowIndex = Math.floor(id / 5);
	const i = id % 5;
	return {
		col: rowIndex % 2 === 0 ? i : 4 - i,
		rowFromTop: Math.floor((SQUARES.length - 1) / 5) - rowIndex
	};
}
function lightCopy(progress) {
	if (progress <= 0) return "Just fallen. The road is still black.";
	if (progress < 3) return "Ash underfoot. Pip has not shown you his face.";
	if (progress < 10) return "A lantern. The chapel is still dark above you.";
	if (progress < 14) return "The Heart house is burning. The bridge is not down.";
	if (progress < 23) return "Silver on the water. The mire is still ahead.";
	if (progress < 28) return "The mire has dropped. The Queen has no face yet.";
	if (progress < 29) return "Her face is back. The reliquary is the last door.";
	return "The hall opens. The deck you carried is the last game.";
}
var GAP_X = 128;
var GAP_Y = 150;
var ORIGIN_X = 86;
var ORIGIN_Y = 36;
function xy(id) {
	const { col, rowFromTop } = cellOf(id);
	return {
		x: ORIGIN_X + col * GAP_X,
		y: ORIGIN_Y + rowFromTop * GAP_Y
	};
}
function houseColor(sq, progress) {
	if (sq.id > progress) return "#1a1612";
	if (progress >= 28 && (sq.house === "nave" || sq.house === "diamonds" || sq.house === "clubs")) {
		if (sq.house === "diamonds") return "#d4c095";
		if (sq.house === "clubs") return "#3d6b52";
		return "#f0e2c4";
	}
	if (progress >= 23 && sq.house === "mire") return "#8a7d70";
	if (progress >= 14 && sq.house === "spades") return "#c5d0dc";
	if (progress >= 10 && sq.house === "hearts") return "#9c3b32";
	if (progress >= 3 && sq.house === "breach") return "#d9c7a4";
	return "#5c5146";
}
function ring(kind) {
	if (kind === "gate") return "#c6a15a";
	if (kind === "way") return "#c5d0dc";
	if (kind === "trap") return "#8c2f2a";
	if (kind === "shortcut") return "#c6a15a";
	if (kind === "end" || kind === "start") return "#e6d7bc";
	return "#3a3228";
}
function Board() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)(0);
	const sq = SQUARES[selected] ?? SQUARES[0];
	function focus(id) {
		setProgress(id);
		setSelected(id);
	}
	const last = SQUARES.length - 1;
	const rows = Math.ceil(SQUARES.length / 5);
	const width = 172 + 4 * GAP_X;
	const height = ORIGIN_Y + (rows - 1) * GAP_Y + 78;
	const d = SQUARES.map((s) => {
		const p = xy(s.id);
		return `${s.id === 0 ? "M" : "L"} ${p.x} ${p.y}`;
	}).join(" ");
	const stairA = xy(4);
	const stairB = xy(9);
	const ledgeA = xy(18);
	const ledgeB = xy(22);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hall",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "frame",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/hall.jpg",
					alt: "The bright solitaire hall, lamp lit, cards quiet on green felt"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "caption",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The hall. You start here." })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "frame",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/country.jpg",
					alt: "The dark pilgrimage road, fog and a cold light at the top"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "caption",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The country under it." })
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fall",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				"the table breaks",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "board-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${width} ${height}`,
					role: "img",
					"aria-label": "The pilgrimage road, thirty squares",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d,
							fill: "none",
							stroke: "#c6a15a",
							strokeWidth: "3",
							strokeLinejoin: "round",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M ${stairA.x} ${stairA.y} Q ${(stairA.x + stairB.x) / 2} ${Math.min(stairA.y, stairB.y) - 54} ${stairB.x} ${stairB.y}`,
							fill: "none",
							stroke: "#c6a15a",
							strokeWidth: "1.4",
							strokeDasharray: "4 4",
							opacity: progress >= 4 ? .9 : .35
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M ${ledgeA.x} ${ledgeA.y} Q ${(ledgeA.x + ledgeB.x) / 2 + 36} ${(ledgeA.y + ledgeB.y) / 2} ${ledgeB.x} ${ledgeB.y}`,
							fill: "none",
							stroke: "#c6a15a",
							strokeWidth: "1.4",
							strokeDasharray: "4 4",
							opacity: progress >= 18 ? .9 : .35
						}),
						SQUARES.map((s) => {
							const p = xy(s.id);
							const lit = s.id <= progress;
							const active = s.id === selected;
							const r = s.labeled ? 22 : 5;
							const pawn = s.id === progress;
							const ink = lit ? "#1a1410" : "#e6d7bc";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: "sq",
								onClick: () => focus(s.id),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: p.x,
										cy: p.y,
										r: "28",
										fill: "transparent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: p.x,
										cy: p.y,
										r: r + (active ? 4 : 0),
										fill: houseColor(s, progress),
										stroke: active ? "#f0e2c4" : ring(s.kind),
										strokeWidth: s.kind === "gate" || s.kind === "end" ? 2.6 : 1.5,
										strokeDasharray: s.kind === "way" ? "3 3" : void 0
									}),
									s.labeled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: p.x,
										y: p.y + 4,
										textAnchor: "middle",
										fill: ink,
										fontSize: "12",
										fontFamily: "Outfit, sans-serif",
										children: s.id
									}),
									s.labeled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: p.x,
										y: p.y + r + 18,
										textAnchor: "middle",
										className: "sq-name",
										opacity: lit ? 1 : .7,
										children: s.short
									}),
									pawn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: p.x - 7,
										y: p.y - 34,
										width: "14",
										height: "20",
										rx: "1.5",
										fill: "#f3ead8",
										stroke: "#c6a15a"
									})
								]
							}, s.id);
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "kind",
						children: sq.kind === "way" ? "A game, not a gate" : sq.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: sq.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "game",
						children: sq.game
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sq.blurb }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "scrub",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "How far the light has come" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								progress,
								" / ",
								last
							] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: last,
								value: progress,
								"aria-label": "How far the light has come",
								onChange: (e) => focus(Number(e.target.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "status",
								children: lightCopy(progress)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "legend",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Ring" }), " gate"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Dash" }), " a game you can fail"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Red" }), " trap"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Dashed gold" }), " shortcut"] })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "omens",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Omens" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "A six, after you move, draws one. Most of them relocate you. A gate already beaten is just road."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "omen-row",
					children: OMENS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "omen",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: o.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.text })]
					}, o.name))
				})
			]
		})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "A dark fantasy pilgrimage"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Reliquary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede",
				children: "A bright game of solitaire, then a road. Thirty squares, five people you cannot skip, and a door that only opens when the four houses are lit. Drag the light up the mountain."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, {})
		]
	});
}
//#endregion
export { Home as component };
