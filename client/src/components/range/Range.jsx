import React from "react";
import styles from "./Range.module.css";

function Range({ handleOnChange, input_score, input_health }) {
  return (
    <div className={styles.contenedor}>
      <h3>Score:</h3>
      <div className={styles.conten_range}>
        <div className={styles.ranges}>
          <input
            onChange={(e) => handleOnChange(e)}
            name="score"
            type="range"
            min="0"
            max="100"
            value={input_score}
            steps="1"
          />
        </div>
        <span>{input_score}</span>
      </div>

      <div>
        <h3>Health Score:</h3>
        <div className={styles.conten_range}>
          <div className={styles.ranges}>
            <input
              onChange={(e) => handleOnChange(e)}
              name="healthScore"
              type="range"
              min="0"
              max="100"
              value={input_health}
              steps="1"
            />
          </div>

          <div>
            <span>{input_health}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Range;
