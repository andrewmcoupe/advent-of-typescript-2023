/*
 * @link https://typehero.dev/challenge/day-17
 * */

type Win = ["👊🏻", "🖐🏾"] | ["✌🏽", "👊🏻"] | ["🖐🏾", "✌🏽"];

type WhoWins<T, U> = T extends U ? "draw" : [T, U] extends Win ? "win" : "lose";
