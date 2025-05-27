import { useState, useEffect, useRef, useCallback } from "react";

export const useTimer = (initialTime: number = 10, onTimeUp?: () => void) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setIsRunning(true);
    setIsFinished(false);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(
    (newTime = initialTime) => {
      setTimeLeft(newTime);
      setIsRunning(false);
      setIsFinished(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    },
    [initialTime]
  );

  const stop = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(0);
    setIsFinished(true);
  }, []);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      if (timeLeft <= 0 && !isFinished) {
        setIsFinished(true);
        setIsRunning(false);
        if (onTimeUp) {
          onTimeUp();
        }
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, timeLeft, onTimeUp, isFinished]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return {
    timeLeft,
    isRunning,
    isFinished,
    start,
    pause,
    reset,
    stop,
  };
};
