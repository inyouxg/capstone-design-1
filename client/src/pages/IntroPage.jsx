import React from 'react'
import intro from '../assets/intro-background.svg'
import styles from './IntroPage.module.css'
import { useNavigate } from 'react-router-dom'

export const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['intro-container']}>
      <div className={styles['intro-container__image-wrapper']}>
        <img className={styles['intro-container__image']} alt='intro' src={intro}/>
        <h1 className={styles['intro-container__title']}>
          {`Your
          Personalized
          AI Diet Report
          `}
        </h1>
      </div>
      <div className={styles['intro-container__button-wrapper']}>
        <span className={styles['intro-container__text']}>
          시작하기 전에 프로필을 설정해 주세요.
        </span>
        <button 
        className={styles['intro-container__button']}
        onClick={() => navigate(`/profile`)}>
          프로필 설정하기
        </button>
      </div>
    </div>
  )
}
