import * as exifr from "exifr";
import { useEffect, useState } from "react"
import styles from './UploadingModal.module.css'
import { uploadDiet } from "../api/dietAPI";

export const UploadingModal = ({ image, onClose, navigate }) => {
  const [time, setTime] = useState("");
  const [serving, setServing] = useState(1.0);
  const [isLoading, setIsLoading] = useState(false);

  const SERVING_VALUES = ["0.5", "1.0", "1.5"];
  //이미지 촬영시간 자동 추출 + 없으면 현재 시간으로 대체
  useEffect(() => {
    const extractTime = async () => {
      if (!image?.file) return;

      try {
        const fileObj = image?.file || image;
        if (!fileObj) return;

        const meta = await exifr.parse(fileObj);
        let formattedTime = "";

        if (meta?.DateTimeOriginal) {
          const date = new Date(meta.DateTimeOriginal);
          const hours = String(date.getHours()).padStart(2, "0");
          const minutes = String(date.getMinutes()).padStart(2, "0");
          formattedTime = `${hours}:${minutes}`;
          console.log("촬영시간 추출:", formattedTime);
        } else {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, "0");
          const minutes = String(now.getMinutes()).padStart(2, "0");
          formattedTime = `${hours}:${minutes}`;
          console.log("EXIF 없음 — 현재 시각 :", formattedTime);
        }

        setTime(formattedTime);
      } catch (error) {
        console.error("EXIF 파싱 오류:", error);
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        setTime(`${hours}:${minutes}`);
      }
    };

    extractTime();
  }, [image]);

  const handleSubmit = async () => {
    if (!time || !serving) {
      alert("시간과 식사량을 선택해 주세요!"); //모달 생성 예정
      return;
    }

    try {
      setIsLoading(true);

      const fileObj = image?.file || image;
      const formData = new FormData();
      formData.append("file", fileObj);
      formData.append("time", time);
      formData.append("serving", String(serving));

      const result = await uploadDiet(formData);
      console.log("업로드 결과:", result);

      if (result?.success && result?.meal_id) {
        onClose();
        navigate(`/report/${result.meal_id}`);
      } else {
        alert("업로드에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("업로드 중 오류 발생:", error);
      alert("서버 오류가 발생했습니다.");
    }finally{
      setIsLoading(false);
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
