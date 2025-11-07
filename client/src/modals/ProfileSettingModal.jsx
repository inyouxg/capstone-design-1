import styles from './ProfileSettingModal.module.css'

export const ProfileSettingModal = ({navigate}) => {
  return (
    <div className={styles['modal-container']}>
      <p className={styles['modal-container__title']}>프로필 등록 완료!</p>
      <p className={styles['modal-container__text']}>메인 화면으로 이동합니다.</p>
      <button className={styles['modal-container__button']}
      onClick={() => navigate("/main")}>나의 리포트 보러 가기</button>
    </div>
  )
}
