import { useState } from "react"
import styles from './UploadingModal.module.css'

export const UploadingModal = () => {
  const [time, setTime] = useState();
  const [serving, setServing] = useState(1.0);

  const SERVING_VALUES = ["0.5", "1.0", "1.5"];

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-container-border']}>
        <div className={styles['modal-container-border__inner']}>
          <button className={styles['modal-container__button']}>
            식단 분석하기
          </button>
          <div className={styles['modal-container__form']}>
            <label className={styles['modal-container__form-label']}>
              식사 시간
            </label>
            <input
              type="time"
              step={300}
              value={time}
              className={styles['modal-container__form-input']}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <fieldset className={styles['modal-container__radio']}>
            {SERVING_VALUES.map((value) => (
              <label key={value} className={styles['modal-container__radio-label']}>
                <input
                  type="radio"
                  name="serving"
                  value={value}
                  className={styles['modal-container__radio-input']}
                  onChange={(e) => setServing(parseFloat(e.target.value))}
                />
                {value}인분
              </label>
            ))}
          </fieldset>
        </div>
      </div>
    </div>
  )
}
