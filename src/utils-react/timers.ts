import { useEffect, useRef } from "react";

// from https://github.com/siddharthkp/use-timeout/blob/master/index.js
export function useTimeout<T extends Function = Function>(
  callback: T,
  delay: number
) {
  const savedCallback = useRef<T | undefined>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}
