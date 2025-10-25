import profileData from '../mock/profileData.json'
import nutrientData from '../mock/nutrientData.json'
import dietData from '../mock/dietData.json'
import styles from './MainPage.module.css';
import bubble from '../assets/bubble-icon.svg'
import { useEffect, useState } from 'react';
import { NutrientChartCard } from '../components/NutrientChartCard';
import { DietReportCard } from '../components/DietReportCard';
import { ButtonBar } from '../components/ButtonBar';

export const MainPage = () => {
  const [profile, setProfile] = useState(null);
  const [nutrient, setNutrient] = useState(null);
  const [diet, setDiet] = useState(null);

  useEffect(() => {
    setNutrient(nutrientData);
    setProfile(profileData);
    setDiet(dietData);
  },[]);

  if (!nutrient) return null;

  return (
    <div className={styles['main-container']}>
      <img className={styles['main-container__bubble']} src={bubble} alt='bubble-icon' />
      <div className={styles['main-container__header']}>
        <h3>{profileData.name}님</h3>
        <div className={styles['main-container__header-box']}>
          <p>권장 칼로리 | {profileData['recommanded-calories']}kcal</p>
        </div>
      </div>
      <div className={styles['chart-container']}>
        <div>
          <NutrientChartCard nutrient={nutrient}/>
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
