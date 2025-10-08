import dayjs from "dayjs";
import image from '../assets/default-image.png';
import styles from './DietReportCard.module.css';

export const DietReportCard = ({ diet }) => {
  return (
    <>
      {
        diet.map((diet) => (
          <div key={diet.id} className={styles["diet-container"]}>
            <p className={styles["diet-container__time"]}>
              {dayjs(diet.time).format("A h : mm")}
            </p>
            <div className={styles["diet-card"]}>
              <img
                alt="diet-image"
                src={diet.image ? diet.image : image}
                className={styles["diet-card__img"]} />
              <div className={styles["diet-card__section"]}>
                <p className={styles["diet-card__total"]}>탄수화물 {diet.carbohydrate}g</p>
                <p className={styles["diet-card__total"]}>단백질 {diet.protein}g</p>
                <p className={styles["diet-card__total"]}>지방 {diet.fat}g</p>
                <p className={styles["diet-card__calories"]}>{diet.total_calories} kcal</p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
