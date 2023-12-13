type IncrementBy<
  TNumber extends number,
  Acc extends number[] = [],
> = TNumber extends Acc["length"]
  ? [...Acc, number]["length"]
  : IncrementBy<TNumber, [...Acc, number]>;

type DayCounter<
  Start extends number,
  End extends number,
  Acc extends any[] = [],
> = Acc["length"] extends End
  ? Acc[number]
  : DayCounter<Start, End, [...Acc, IncrementBy<Acc["length"]>]>;
