import { useNavigate } from "react-router-dom";
import styles from './DietReportPage.module.css'
import image from '../assets/default-image.png'
import home from '../assets/home-icon.svg'
import diet from '../mock/reportData.json'
import bubble from '../assets/bubble2-icon.svg'
import smile from '../assets/smile-icon.svg'

export const DietReportPage = () => {
  const navigate = useNavigate();
  const macros = [
    { label: "탄수화물", key: "carbohydrate" },
    { label: "단백질", key: "protein" },
    { label: "지방", key: "fat" },
  ];

  const mealsName = diet.meals[0].items.map(item => ({
    name: item.name,
    calories: item.calories
  }));

  return (
    <div className={styles['report-container']}>
      <div className={styles['report-container-top']}>
        <img
          src={home}
          alt='home-icon'
          className={styles['report-container-home']}
          onClick={() => navigate('/main')}
        />
        <img
          alt="diet-image"
          src={diet.image ? diet.image : image}
          className={styles['report-container-image']}
        />
        <div className={styles['diet-container']}>
          <div className={styles['diet-container__sort']}>
            {mealsName.map((item, idx) => (
              <div key={idx} className={styles['diet-container__section']}>
                <span className={styles['diet-container__section-name']}>{item.name}</span>
                <span className={styles['diet-container__section-calories']}>{item.calories}kcal</span>
              </div>
            ))}
          </div>
          <div>
            <img className={styles['diet-container__icon']} src={bubble} alt='bubble-icon' />
            <div className={styles['diet-container__total-calories']}>
              <p>총 섭취 칼로리</p>
              <span>{diet.total_calories} kcal</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['nutrient-container']}>
        {macros.map((macro, idx) => (
          <div key={idx} className={styles['nutrient-container__section']}>
            <h3 className={styles[macro.key]}>{macro.label}</h3>
            <p>
              <span>{diet.macros[macro.key].value}</span>
              <span>{diet.macros[macro.key].unit}</span>
            </p>
          </div>
        ))}
      </div>
      <div className={styles['feedback-container']}>
        <div className={styles['feedback-container__title']}>
          <img src={smile} alt='smile-icon' />
          <span>AI 건강 비서</span>
        </div>
        <div className={styles['feedback-container__content']}>
          {diet.feedback}
        </div>
      </div>
    </div>
  )
}
