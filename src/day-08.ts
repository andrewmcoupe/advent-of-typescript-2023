/*
 * @link https://typehero.dev/challenge/day-8
 * */

type RemoveNaughtyChildren<T> = Omit<T, `naughty_${string}`>;
