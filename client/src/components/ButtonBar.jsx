import today from '../assets/today-icon.svg'
import report from '../assets/report-icon.svg'
import gallery from '../assets/gallery-icon.svg'
import styles from './ButtonBar.module.css'

export const ButtonBar = () => {
  return (
    <nav className={styles['nav-container']}>
      <button className={styles['nav-container__button']}>
        <img src={gallery}/>
      </button>
      <a className={styles['nav-container__item']}>
        <img src={today}></img>
        <span>today</span>
      </a>
      <a className={styles['nav-container__item']}>
        <img src={report}></img>
        <span>report</span>
      </a>
    </nav>
  )
}
