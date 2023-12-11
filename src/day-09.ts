/*
 * @link https://typehero.dev/challenge/day-9
 * */

// String optimisation to allow long strings
type Reverse<
  Str,
  Acc extends string = "",
> = Str extends `${infer Head}${infer Tail}`
  ? Reverse<Tail, `${Head}${Acc}`>
  : Acc;

type Reverse2<Str> = Str extends `${infer FirstChar}${infer TailString}`
  ? `${Reverse<TailString>}${FirstChar}`
  : Str;
