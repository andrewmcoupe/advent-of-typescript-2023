type Toys = ["🛹", "🚲", "🛴", "🏄"];

type Rebuild<T extends number[], $acc extends any[] = []> = T extends [
  infer First extends number,
  ...infer Rest extends number[],
]
  ? Toys[$acc["length"]] extends undefined
    ? Rebuild<T, []>
    : [...Clone<Toys[$acc["length"]], First>, ...Rebuild<Rest, [...$acc, 0]>]
  : [];

type Clone<
  TItem,
  TQuantity extends number,
  $acc extends any[] = [],
> = $acc["length"] extends TQuantity
  ? $acc
  : Clone<TItem, TQuantity, [TItem, ...$acc]>;

type Test = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
// ["🛹", "🛹", "🚲", "🛴", "🛴", "🛴", "🏄", "🏄", "🏄", "🛹", "🚲", "🛴", "🛴"]
