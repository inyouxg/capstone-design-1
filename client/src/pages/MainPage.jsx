import styles from './MainPage.module.css';
import dashboardData from '../mock/dashboardData.json'
import dietData from '../mock/dietData.json'
import bubble from '../assets/bubble-icon.svg'
import { useEffect, useState } from 'react';
import { NutrientChartCard } from '../components/NutrientChartCard';
import { DietReportCard } from '../components/DietReportCard';
import { ButtonBar } from '../components/ButtonBar';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { getDashboardData, getMealsToday } from '../api/mainAPI';

export const MainPage = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    dashboard: null,
    diet: null,
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [dashboard, diet] = await Promise.all([
          getDashboardData(),
          getMealsToday(),
        ]);
        if (!mounted) return;
        setState({ loading: false, error: null, dashboard, diet });
      } catch (error) {
        if (!mounted) return;
        // 서버 에러 시 → mock data
        console.error(
          "서버 오류, mock data 호출",
          error?.response?.status,
          error?.response?.data || error?.message
        );
        setState({ loading: false, error: error, dashboard: dashboardData, diet: dietData });
      }
    })();

    return () => {
      mounted = false;
    };

  }, []);

  if (state.loading) return <LoadingSpinner />;

  const { dashboard, diet } = state;

  return (
    <div className={styles['main-container']}>
      <img className={styles['main-container__bubble']} src={bubble} alt='bubble-icon' />
      <div className={styles['main-container__header']}>
        <h3>{dashboard.name}님</h3>
        <div className={styles['main-container__header-box']}>
          <p>권장 칼로리 | {dashboard.recommendedCalories}kcal</p>
        </div>
      </div>
      <div className={styles['chart-container']}>
        <div>
          <NutrientChartCard dashboard={dashboard}/>
        </div>
      </div>
      <div className={styles['diet-container']}>
        <div className={styles['diet-container__section']}>
          <h3>Diet Report</h3>
          <DietReportCard diet={diet}/>
        </div>
      </div>
      <ButtonBar />
    </div>
  )
}
