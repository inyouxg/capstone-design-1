import { useForm } from 'react-hook-form'
import { InputField } from '../components/InputField'
import styles from './ProfileSettingPage.module.css'

export const ProfileSettingPage = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });

  const registerRules = {
    name: { required: "이름을 입력해 주세요." },
    age: {
      required: "나이를 입력해 주세요.",
      min: { value: 1, message: "나이는 1세 이상 입력해 주세요." },
      max: { value: 120, message: "나이는 120세 이하로 입력해 주세요." }
    },
    height: {
      required: "키를 입력해 주세요.",
      min: { value: 1, message: "키는 1cm 이상 입력해 주세요." }
    },
    weight: {
      required: "몸무게를 입력해 주세요.",
      min: { value: 1, message: "몸무게는 1kg 이상 입력해 주세요." }
    },
    gender: { required: "성별을 선택해 주세요." },
    activity: { required: "활동 수준 선택은 필수입니다." }
  };


  const onSubmit = (data) => {
    console.log(data); //API 추가 예정
  }

  console.log(errors);
  return (
    <div className={styles['setting-container']}>
      <form
        id='profile-form'
        className={styles['setting-container__form']}
      >
        <InputField
          label='name'
          type='text'
          placeholder='이름을 입력해 주세요.'
          id='name'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}

          register={register("name", registerRules.name)}
        />
        <InputField
          label='age'
          type='number'
          placeholder='나이를 입력해 주세요.'
          id='age'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}

          register={register("age", registerRules.age)}
        />
        <InputField
          label='height'
          type='number'
          placeholder='키를 입력해 주세요.'
          id='height'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}

          register={register("height", registerRules.height)}
        />
        <InputField
          label='weight'
          type='number'
          placeholder='몸무게를 입력해 주세요.'
          id='weight'
          className={styles['setting-container__form-input']}
          inputClassName={styles['setting-container__input']}

          register={register("weight", registerRules.weight)}
        />
        <div className={styles['setting-container__form-radio']}>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              className={styles['setting-container__radio']}

              {...register("gender", registerRules.gender)}
            />
            female
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              className={styles['setting-container__radio']}

              {...register("gender", registerRules.gender)}
            />
            male
          </label>
        </div>
        <div className={styles['setting-container__form-select']}>
          <label htmlFor="activity">activity level</label>
          <select
            id="activity"
            name="activity"
            className={styles['setting-container__select']}

            {...register("activity", registerRules.activity)}
          >
            <option value="">선택해주세요</option>
            <option value="sedentary">비활동적</option>
            <option value="low-active">저활동적(주 1~2회 가벼운 운동)</option>
            <option value="active">활동적(주 3~4회 운동)</option>
            <option value="very-active">매우 활동적(주 5~7회 운동)</option>
          </select>
        </div>
      </form>
      {Object.keys(errors).length > 0 && (
        <p style={{ color: "red", fontSize: "13px", textAlign: "center"}}>
          {Object.values(errors)[0].message}
        </p>
      )}
      <button
        form='profile-form'
        type='submit'
        className={styles['setting-container__button']}
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
      >
        리포트 시작하기
      </button>
    </div>
  )
}
