import profileData from '../mock/profileData.json'
import nutrientData from '../mock/nutrientData.json'
import styles from './MainPage.module.css';
import { useEffect, useState } from 'react';
import { NutrientChartCard } from '../components/NutrientChartCard';

export const MainPage = () => {
  const [profile, setProfile] = useState(null);
  const [nutrient, setNutrient] = useState(null);
  const [dietReport, setDietReport] = useState(null);

  useEffect(() => {
    setNutrient(nutrientData);
    setProfile(profileData);
  },[]);

  if (!nutrient) return null;

  return (
    <div className={styles['main-container']}>
      <div className={styles['main-container__header']}>
        <h3>{profileData.name}</h3>
        <div>
          <p>권장 칼로리 | {profileData['recommanded-calories']}</p>
        </div>
      </div>
      <div className={styles['chart-container']}>
        <div>
          <NutrientChartCard nutrient={nutrient}/>
        </div>
      </div>
      <div className={styles['report-container']}></div>
      <div className={styles['header-container']}></div>
    </div>
  )
}
