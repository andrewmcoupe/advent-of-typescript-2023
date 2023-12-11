/*
 * @link https://typehero.dev/challenge/day-11
 * */

type SantaListProtector<T> = {
  readonly [Key in keyof T]: T[Key] extends Record<string, unknown> | unknown[]
    ? SantaListProtector<T[Key]>
    : T[Key];
};

// Using the utility Readonly type
type SantaListProtector2<T> = Readonly<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> | unknown[]
    ? SantaListProtector<T[Key]>
    : T[Key];
}>;
