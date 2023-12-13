type IncrementByOne<
  TNumber extends number,
  Acc extends number[] = [],
> = TNumber extends Acc["length"]
  ? [...Acc, number]["length"]
  : IncrementByOne<TNumber, [...Acc, number]>;

type DayCounter<
  Start extends number,
  End extends number,
  Acc extends any[] = [],
> = Acc["length"] extends End
  ? Acc[number]
  : DayCounter<Start, End, [...Acc, IncrementByOne<Acc["length"]>]>;
