import { useState } from "react"
import styles from './UploadingModal.module.css'
import { uploadDiet } from "../api/dietAPI";

export const UploadingModal = ({image, closeModal}) => {
  const [time, setTime] = useState("");
  const [serving, setServing] = useState(1.0);

  const SERVING_VALUES = ["0.5", "1.0", "1.5"];

  const handleSubmit = async () => {
    if (!time || !serving) {
      alert("시간과 식사량을 선택해 주세요!"); //모달 생성 예정
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image.file);
      formData.append("time", time);
      formData.append("serving", serving);

      const result = await uploadDiet(formData);
      console.log("업로드 결과:", result);

      if (result?.success) {
        closeModal();
        navigate("/report");
      } else {
        alert("업로드에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("업로드 중 오류 발생:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };



  return (
    <div className={styles['modal-container-border']}>
      <div className={styles['modal-container-border__inner']}>
        <button
          className={styles['modal-container__button']}
          onClick={handleSubmit}>
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
  )
}
