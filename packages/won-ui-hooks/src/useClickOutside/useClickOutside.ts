import { RefObject, useEffect } from 'react';

const EVENT_KEYS = ['touchstart', 'mousedown'];

export default function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  eventHandler: (e: Event) => void,
  eventKeys = EVENT_KEYS
) {
  useEffect(() => {
    const eventListner = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        eventHandler(event);
      }
    };
    eventKeys.forEach(key => document.addEventListener(key, eventListner));

    return () => {
      eventKeys.forEach(key => document.removeEventListener(key, eventListner));
    };
  }, [ref, eventHandler]);
}
