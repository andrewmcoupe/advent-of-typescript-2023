/*
 * Increments a given number by one
 * */
type IncrementByOne<
  TNumber extends number,
  $Acc extends number[] = [],
> = TNumber extends $Acc["length"]
  ? [...$Acc, number]["length"] // If the number is equal to the length of the accumulator, return the length of the accumulator + 1
  : IncrementByOne<TNumber, [...$Acc, number]>; // Otherwise, recursively call IncrementByOne with the number and the accumulator, adding a number to the accumulator each time

type DayCounter<
  Start extends number,
  End extends number,
  $Acc extends any[] = [],
> = $Acc["length"] extends End
  ? $Acc[number]
  : DayCounter<Start, End, [...$Acc, IncrementByOne<$Acc["length"]>]>;
