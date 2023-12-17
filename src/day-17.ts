/*
 * @link https://typehero.dev/challenge/day-17
 * */

type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌️";
type Win = [["👊🏻", "🖐🏾"], ["✌️", "👊🏻"], ["🖐🏾", "✌️"]];

type WhoWins<T extends RockPaperScissors, U extends RockPaperScissors> = [
  T,
  U,
] extends Win[number]
  ? "win"
  : T extends U
    ? "draw"
    : "lose";
