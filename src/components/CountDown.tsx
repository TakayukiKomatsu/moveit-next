import { useEffect, useState } from "react";
import styles from "../styles/components/CountDown.module.css";

let countDownTimeOut: NodeJS.Timeout;

const DebugTime = 0.05;

export default function CountDown() {
  const [time, setTime] = useState(DebugTime * 60); //Segundos
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeOut);
    setIsActive(false);

    setTime(DebugTime * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.CountDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>

        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countDownButton}>
          Ciclo Encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={startCountDown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
