import { useState } from "react";
import smile from "../assets/smile-icon.svg";
import styles from "./BottomSheet.module.css";
import writing from "../assets/writing.png";
import rice from "../assets/rice.png";

export const BottomSheet = ({diet}) => {
  const [isOpen, setIsOpen] = useState(false);
  const text = diet.feedback.split("오늘의 식단 리포트");
  const finalText = text[1].split("대체식 추천:");

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
            <div className={styles["content-title"]}>
              오늘의 식단 리포트
              <img src={writing} />
            </div>
            <div className={styles["content-text"]}>
              {finalText[0]}
            </div>
            <div className={styles["content-title"]}>
              대체식 추천
              <img src={rice} />
            </div>
            <div className={styles["content-text"]}>
              {finalText[1]}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
