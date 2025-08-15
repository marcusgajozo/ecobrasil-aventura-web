// hooks/useCountdownTimer.ts
import { useState, useEffect, useCallback, useRef } from "react";

interface UseCountdownTimerProps {
  initialTime: number; // Tempo inicial em segundos
  onTimerEnd?: () => void; // Callback quando o timer termina
  autoStart?: boolean; // Iniciar automaticamente?
}

interface UseCountdownTimerReturn {
  remainingTime: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: (newTime?: number) => void;
}

const useCountdownTimer = ({
  initialTime,
  onTimerEnd,
  autoStart = true,
}: UseCountdownTimerProps): UseCountdownTimerReturn => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);

  // Usamos useRef para o ID do timer para que ele persista entre renders
  // e para a callback onTimerEnd para evitar que o useEffect seja re-executado desnecessariamente
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const onTimerEndRef = useRef(onTimerEnd);

  // Mantém a referência da callback onTimerEnd atualizada
  useEffect(() => {
    onTimerEndRef.current = onTimerEnd;
  }, [onTimerEnd]);

  // Efeito principal para a lógica do timer
  useEffect(() => {
    // Se o timer deve rodar e ainda há tempo
    if (isRunning && remainingTime > 0) {
      timerIdRef.current = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime <= 0) {
      // Se o tempo acabou, limpa o intervalo e chama a callback
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
      }
      setIsRunning(false);
      if (onTimerEndRef.current) {
        onTimerEndRef.current();
      }
    }

    // Função de limpeza: será chamada quando o componente desmontar
    // ou antes que o efeito seja re-executado.
    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
      }
    };
  }, [isRunning, remainingTime]); // Re-executa se isRunning ou remainingTime mudar

  // Efeito para lidar com mudanças no initialTime ou autoStart
  // Isso é útil se o mesmo hook for usado para diferentes timers que mudam o tempo inicial
  useEffect(() => {
    setRemainingTime(initialTime);
    setIsRunning(autoStart);
    // Limpa qualquer intervalo existente de uma execução anterior antes de (possivelmente) iniciar um novo
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null; // Garante que não tentaremos limpar de novo um timer já limpo
    }
  }, [initialTime, autoStart]);

  const start = useCallback(() => {
    if (!isRunning) {
      // Se o timer já terminou, reseta para o tempo inicial antes de começar
      if (remainingTime <= 0) {
        setRemainingTime(initialTime);
      }
      setIsRunning(true);
    }
  }, [isRunning, remainingTime, initialTime]);

  const pause = useCallback(() => {
    setIsRunning(false);
    // A limpeza do interval já acontece no useEffect principal quando isRunning muda para false
  }, []);

  const reset = useCallback(
    (newTime?: number) => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
      const timeToReset = newTime !== undefined ? newTime : initialTime;
      setRemainingTime(timeToReset);
      setIsRunning(autoStart); // Decide se deve começar automaticamente após o reset
    },
    [initialTime, autoStart]
  );

  return { remainingTime, isRunning, start, pause, reset };
};

export default useCountdownTimer;
