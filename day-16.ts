/*
 * @link https://typehero.dev/challenge/day-16
 * */

type FindSanta<Forest extends Array<string[]>, $acc extends number[] = []> = [
  $acc["length"],
  FindIndex<Forest[$acc["length"]], "🎅🏼">,
] extends [number, number]
  ? [$acc["length"], FindIndex<Forest[$acc["length"]], "🎅🏼">]
  : FindSanta<Forest, [...$acc, 0]>;

type FindIndex<
  T extends unknown[],
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
