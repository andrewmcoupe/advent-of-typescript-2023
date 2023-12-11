/*
 * @link https://typehero.dev/challenge/day-7
 * */

type AppendGood<T> = {
  [Key in keyof T & string as `good_${Key}`]: T[Key];
};
