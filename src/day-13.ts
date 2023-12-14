/*
 * @link https://typehero.dev/challenge/day-13
 * */

type IncrementByOne<
  TNumber extends number,
  $Acc extends number[] = [],
> = TNumber extends $Acc["length"]
  ? [...$Acc, number]["length"] // If the number is equal to the length of the accumulator, return the length of the accumulator + 1.
  : IncrementByOne<TNumber, [...$Acc, number]>; // Otherwise, recursively call IncrementByOne with the number and the accumulator, adding a number to the accumulator each time.

type DayCounter<
  Start extends number,
  End extends number,
  $Acc extends any[] = [],
> = $Acc["length"] extends End // If the length of the accumulator is equal to the end number, return the accumulator.
  ? $Acc[number] // This transforms a tuple into a union of its values
  : DayCounter<Start, End, [...$Acc, IncrementByOne<$Acc["length"]>]>;
// Otherwise, recursively call DayCounter with the start, end, and accumulator,
// incrementing the length of the accumulator with a value that is one more than the length of the accumulator.

type Test = DayCounter<1, 12>;
