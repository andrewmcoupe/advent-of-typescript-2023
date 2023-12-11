/*
 * @link https://typehero.dev/challenge/day-5
 * */

type SantasList<
  TBadList extends readonly unknown[],
  TGoodList extends readonly unknown[],
> = [...TBadList, ...TGoodList];
