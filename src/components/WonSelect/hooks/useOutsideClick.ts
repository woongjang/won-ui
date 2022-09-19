import React, { RefObject } from 'react';

function useOutsideClick(
  ref: RefObject<HTMLElement>,
  cb: (event: CustomEvent<MouseEvent>) => void,
) {
  React.useEffect(() => {
    const handleClickOutSide = (event: CustomEvent<MouseEvent>) => {
      if (ref.current && !ref.current.contains((event.target as Node))) {
        cb(event);
      }
    };
    document.addEventListener('mousedown', handleClickOutSide as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide as EventListener);
    };
  }, [ref, cb]);
}

export default useOutsideClick;
