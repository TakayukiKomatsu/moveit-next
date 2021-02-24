import styles from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.ChallengeBoxContainer}>
      {hasActiveChallenge ? (
        <div></div>
      ) : (
        <div className={styles.ChallengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
