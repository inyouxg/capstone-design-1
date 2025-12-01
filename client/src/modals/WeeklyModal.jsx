import { WeeklyLineChart } from '../components/WeeklyLineChart'
import { useEffect } from 'react'
import bubble from '../assets/bubble-icon.svg'
import styles from './WeeklyModal.module.css'
import mock from '../mock/weeklyData.json'

export const WeeklyModal = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles['modal-container']}>
      <img className={styles['bubble-icon']} src={bubble}/>
      <h2 className={styles['modal-container__title']}>최근 7일 영양 리포트</h2>
      <p className={styles['modal-container__text']}>최근 7일간의 평균 영양 데이터를 기록했어요.</p>

      <div className={styles['scroll-container']}>

        <WeeklyLineChart weeklyData={mock.weekly_data} />

        <h3 className={styles['summary-title']}>평균 섭취량 카드</h3>
        <div className={styles['summary-container']}>
          <div className={styles.card}>
            <p className={styles.cardLabel}>칼로리</p>
            <p className={styles.cardValue}>{mock.summary.calories} kcal</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardLabel}>탄수화물</p>
            <p className={styles.cardValue}>{mock.summary.carbs} g</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardLabel}>단백질</p>
            <p className={styles.cardValue}>{mock.summary.protein} g</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardLabel}>지방</p>
            <p className={styles.cardValue}>{mock.summary.fat} g</p>
          </div>
        </div>

        <h3>이번 주 불균형 영양소</h3>
        <div className={styles["highlight-container"]}>
          {mock.highlight.high.length > 0 && (
            <div className={styles["highlight-section"]}>
              {mock.highlight.high.map((item, idx) => (
                <div key={idx} className={styles["highlight-item-high"]}>
                  <span className={styles["high-label"]}>{item.label}</span>
                  <span className={styles["high-value"]}>+{item.pct}%</span>
                </div>
              ))}
            </div>
          )}
          {mock.highlight.low.length > 0 && (
            <div className={styles["highlight-section"]}>
              {mock.highlight.low.map((item, idx) => (
                <div key={idx} className={styles["highlight-item-low"]}>
                  <span className={styles["low-label"]}>{item.label}</span>
                  <span className={styles["low-value"]}>{item.pct}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


    </div>
  )
}
