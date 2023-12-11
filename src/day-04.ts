/*
 * @link https://typehero.dev/challenge/day-4
 * */

type Address = { address: string; city: string };
type PresentDeliveryList<T> = Record<keyof T, Address>;
