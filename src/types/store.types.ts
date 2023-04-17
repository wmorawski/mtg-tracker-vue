export type Meta = {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
};
export type WithMeta<T> = T & { meta: Meta };
