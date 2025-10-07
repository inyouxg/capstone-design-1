import { RadialBarChart } from './RadialBarChart'

export const NutrientChartCard = ({ nutrient }) => {
  const macros = [
    { label: "탄수화물", key: "carbohydrate" },
    { label: "단백질", key: "protein" },
    { label: "지방", key: "fat" },
  ];

  return (
    <div className='report-container'>
      <div className='report-container__header'>
        <p>섭취 칼로리</p>
        <p>{nutrient.total_calories}</p>
      </div>
      <div className='report-container__chart'>
        <RadialBarChart />
      </div>
      <div className='nutrient-container'>
        {macros.map((macro, idx) => (
          <div key={idx} className='nutrient-container__section'>
            <h3>{macro.label}</h3>
            <p>
              <span>{macro.label}</span>
              <span>/{nutrient.macros[macro.key].goal}g</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
