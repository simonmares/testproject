import { keyInterface, responseInterface } from "swr";

export type FetchResourceKey = keyInterface;

export type FetchResource<TModel, TError = unknown> = responseInterface<
  TModel,
  TError
>;

type LazyResourceState = "initial" | "loading" | "loaded";

export type LazyResource<TModel, TError = unknown> = {
  lazyLoad: () => void;
  lazyState: LazyResourceState;
  resource: FetchResource<TModel, TError>;
};
