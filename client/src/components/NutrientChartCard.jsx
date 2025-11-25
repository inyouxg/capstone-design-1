import { RadialBarChart } from './RadialBarChart'
import styles from './NutrientChartCard.module.css';

export const NutrientChartCard = ({ dashboard }) => {
  const macros = [
    { label: "탄수화물", key: "carbohydrate" },
    { label: "단백질", key: "protein" },
    { label: "지방", key: "fat" },
  ];

  return (
    <div className={styles['report-container']}>
      <div className={styles['report-container__header']}>
        <p>섭취 칼로리</p>
        <p>{dashboard.totalCalories}</p>
      </div>
      <div className={styles['report-container__chart']}>
        <RadialBarChart progress={dashboard.progress}/>
      </div>
      <div className={styles['nutrient-container']}>
        {macros.map((macro, idx) => (
          <div key={idx} className={styles['nutrient-container__section']}>
            <h3 className={styles[macro.key]}>{macro.label}</h3>
            <p>
              <span>{dashboard.macros[macro.key].value.toFixed(1)}</span>
              <span> / {dashboard.macros[macro.key].goal.toFixed(0)}g</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
