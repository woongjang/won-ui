import { useRef } from 'react';

export const useUniqueId = (id?: string) => {
  const uniqueId = useRef(`won-ui-${Math.random().toString(36).slice(2)}`);
  return id || uniqueId.current;
}