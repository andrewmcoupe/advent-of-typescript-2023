/*
 * @link https://typehero.dev/challenge/day-6
 * */

type FilterChildrenBy<TStatus, TFilter> = TStatus extends TFilter
  ? never
  : TStatus;
