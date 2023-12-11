/*
 * @link https://typehero.dev/challenge/day-10
 * */

type StreetSuffixTester<
  TStreet extends string,
  TSuffix extends string,
> = TStreet extends `${string} ${TSuffix}` ? true : false;
