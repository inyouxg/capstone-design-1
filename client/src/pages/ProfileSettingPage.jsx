import { InputField } from '../components/InputField'
import styles from './ProfileSettingPage.module.css'

export const ProfileSettingPage = () => {
  return (
    <div className={styles['setting-container']}>
      <form className={styles['setting-container__form']}>
        <InputField
          label='name'
          type='text'
          placeholder='이름을 입력해 주세요.'
          id='name'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}
        />
        <InputField
          label='age'
          type='number'
          placeholder='나이를 입력해 주세요.'
          id='age'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}
        />
        <InputField
          label='height'
          type='number'
          placeholder='키를 입력해 주세요.'
          id='height'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}
        />
        <InputField
          label='weight'
          type='number'
          placeholder='몸무게를 입력해 주세요.'
          id='weight'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}
        />
        <div className={styles['setting-container__form-radio']}>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              className={styles['setting-container__radio']} />
            female
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              className={styles['setting-container__radio']} />
            male
          </label>
        </div>
        <div className={styles['setting-container__form-select']}>
          <label htmlFor="activity">activity level</label>
          <select id="activity" name="activity" className={styles['setting-container__select']}>
            <option value="sedentary">비활동적</option>
            <option value="low-active">저활동적(주 1~2회 가벼운 운동)</option>
            <option value="active">활동적(주 3~4회 운동)</option>
            <option value="very-active">매우 활동적(주 5~7회 운동)</option>
          </select>
        </div>
        <button
          type='submit'
          className={styles['setting-container__button']}>
          리포트 시작하기
        </button>
      </form>
    </div>
  )
}
