/*
 * @link https://typehero.dev/challenge/day-15
 * */

type BoxToys<
  ToyName extends string,
  NumberOfBoxes extends number,
  $Acc extends ToyName[] = [],
> = NumberOfBoxes extends unknown // Use a conditional to distribute over the union of numbers
  ? $Acc["length"] extends NumberOfBoxes
    ? $Acc
    : BoxToys<ToyName, NumberOfBoxes, [...$Acc, ToyName]>
  : never;

type Test = BoxToys<"Andy", 3>;
//    ^?    type Test = [ 'Andy', 'Andy', 'Andy' ] | ["Andy", "Andy", "Andy", "Andy"]
