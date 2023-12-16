/*
 * @link https://typehero.dev/challenge/day-15
 * */

type BoxToys<
  ToyName extends string,
  NumberOfBoxes extends number,
  $Acc extends ToyName[] = [],
> = NumberOfBoxes extends $Acc["length"] // Using a conditional distributes over every union member
  ? $Acc
  : BoxToys<ToyName, NumberOfBoxes, [...$Acc, ToyName]>;

type Test = BoxToys<"Andy", 3 | 4>;
//    ^?    type Test = [ 'Andy', 'Andy', 'Andy' ] | ["Andy", "Andy", "Andy", "Andy"]


