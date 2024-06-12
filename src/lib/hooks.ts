import { useState, useEffect, useCallback } from "react";

type UseTimerHook = {
  secondsLeft: number;
  startTimer: () => void;
  resetTimer: () => void;
};

const useTimer = (initialDuration: number): UseTimerHook => {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialDuration);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive && secondsLeft > 0) {
      intervalId = setInterval(() => {
        setSecondsLeft((seconds) => seconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(intervalId);
  }, [isActive, secondsLeft]);

  const startTimer = useCallback(() => {
    if (!isActive) {
      setIsActive(true);
    }
  }, [isActive]);

  const resetTimer = useCallback(() => {
    setSecondsLeft(initialDuration);
    setIsActive(true);
  }, [initialDuration]);

  return { secondsLeft, startTimer, resetTimer };
};

export default useTimer;
