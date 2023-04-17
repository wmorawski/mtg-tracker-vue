import type { WithMeta } from "@/types/store.types";

type ResourceReturnType<T, B> = B extends true ? WithMeta<T> : T;

export function getInitialResourceState<T, B extends boolean>(
  initialData: T | null,
  withMeta: B
): ResourceReturnType<T, B> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return {
    ...(initialData ? initialData : ({} as T)),
    ...(withMeta
      ? { meta: { loaded: false, loading: false, failed: false } }
      : {}),
  };
}
