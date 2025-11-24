import { useState } from "react";
import smile from "../assets/smile-icon.svg";
import styles from "./BottomSheet.module.css";

export const BottomSheet = ({diet}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles["peek-container"]} onClick={() => setIsOpen(true)}>
        <img src={smile} alt="smile" />
        <span>AI 건강 비서</span>
      </div>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className={`${styles["sheet-container"]} ${isOpen ? styles.open : ""}`}>
        <div className={styles["content-container"]}>
          <div className={styles.header}>
            <img src={smile} alt="smile" />
            <span>AI 건강 비서</span>
          </div>
          <div className={styles.content}>
            {diet.feedback}
          </div>
        </div>

      </div>
    </>
  );
};
