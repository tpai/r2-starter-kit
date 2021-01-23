import React from "react";

import styles from "./styles.module.scss";

export default function NotFound() {
  return (
    <div className={styles["default"]}>
      <div className="ts container very narrow segment">
        <img
          src="https://placekitten.com/500/300"
          className="ts fluid rounded image"
          alt="kitty"
        />
      </div>
      <div className="ts big header">Nya Found</div>
    </div>
  );
}
