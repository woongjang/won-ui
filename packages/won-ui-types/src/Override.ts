export type Override<T, K> = K & Omit<T, keyof K>;
