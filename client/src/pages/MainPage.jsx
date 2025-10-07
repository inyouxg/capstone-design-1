import profileData from '../mock/profileData.json'
import nutrientData from '../mock/nutrientData.json'
import { useEffect, useState } from 'react';
import { NutrientChartCard } from '../components/NutrientChartCard';

export const MainPage = () => {
  const [profile, setProfile] = useState({});
  const [nutrient, setNutrient] = useState(null);
  const [dietReport, setDietReport] = useState([]);

  useEffect(() => {
    setNutrient(nutrientData);
    setProfile(profileData);
  },[]);

  if (!nutrient) return null;

  return (
    <div className='main-container'>
      <div className='main-container__header'>
        <h3>{profileData.name}</h3>
        <div>
          <p>권장 칼로리 | {profileData['recommanded-calories']}</p>
        </div>
      </div>
      <div className='chart-container'>
        <div>
          <NutrientChartCard nutrient={nutrient}/>
        </div>
      </div>
      <div className='report-container'></div>
      <div className='header-container'></div>
    </div>
  )
}
