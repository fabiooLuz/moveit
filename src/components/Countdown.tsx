import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    seconds,
    minutes,
    isActive,
    hasFinish,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinish ? (
        <button disabled className={styles.countdonwButton}>
          Ciclo encerrado
          <img src="icons/check-circle.svg" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdonwButton} ${styles.countdonwButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img src="icons/close-button.svg" />
              <img src="icons/close-button-black.svg" />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdonwButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/play.svg" />
            </button>
          )}
        </>
      )}
    </div>
  );
}


/*
import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
const { startNewChallenge } = useContext( ChallengesContext );

  const [time, setTime] = useState(1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}

*/