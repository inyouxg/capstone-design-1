import { RadialBarChart } from './RadialBarChart'
import styles from './NutrientChartCard.module.css';

export const NutrientChartCard = ({ nutrient }) => {
  const macros = [
    { label: "탄수화물", key: "carbohydrate" },
    { label: "단백질", key: "protein" },
    { label: "지방", key: "fat" },
  ];

  return (
    <div className={styles['report-container']}>
      <div className={styles['report-container__header']}>
        <p>섭취 칼로리</p>
        <p>{nutrient.total_calories}</p>
      </div>
      <div className={styles['report-container__chart']}>
        <RadialBarChart />
      </div>
      <div className={styles['nutrient-container']}>
        {macros.map((macro, idx) => (
          <div key={idx} className={styles['nutrient-container__section']}>
            <h3 className={styles[macro.key]}>{macro.label}</h3>
            <p>
              <span>{nutrient.macros[macro.key].value}</span>
              <span> / {nutrient.macros[macro.key].goal}g</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
