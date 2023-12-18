/*
 * @link https://typehero.dev/challenge/day-16
 * */

type Santa = "🎅🏼";

type FindSanta<
  Forest extends Array<unknown[]>,
  $acc extends number[] = [],
> = FindIndex<Forest[$acc["length"]], Santa> extends number
  ? [$acc["length"], FindIndex<Forest[$acc["length"]], Santa>]
  : FindSanta<Forest, [...$acc, 0]>;

type FindIndex<
  T extends Array<unknown>,
  Key,
  $count extends unknown[] = [],
> = T extends [infer Head, ...infer Tail]
  ? Head extends Key
    ? $count["length"]
    : FindIndex<Tail, Key, [...$count, 0]>
  : undefined;

type Test = FindSanta<
  // ^?   type Test = [ 3, 1 ]
  [
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎅🏼", "🎄", "🎄"],
  ]
>;
