import { useState } from 'react'
import ImageUploading from 'react-images-uploading'
import today from '../assets/today-icon.svg'
import report from '../assets/report-icon.svg'
import gallery from '../assets/gallery-icon.svg'
import styles from './ButtonBar.module.css'
import { useModal } from '../contexts/ModalContext'
import { UploadingModal } from '../modals/UploadingModal'

export const ButtonBar = () => {
  const [image, setImage] = useState(null);
  const {openModal, closeModal} = useModal();

  const onChange = (imageList) => {
    if (imageList.length > 0) {
      const selectedImage = imageList[0];
      console.log("selected-image: ", selectedImage);
      setImage(selectedImage);

      //모달 열기
      openModal(<UploadingModal image={selectedImage} onClose={closeModal}/>)
    }
  };

  return (
    <ImageUploading
      value={image ? [image] : []}
      onChange={onChange}
      dataURLKey="data_url"
      acceptType={["jpg", "png", "jpeg"]}
    >
      {({ onImageUpload }) => (
        <nav className={styles["nav-container"]}>
          <button
            onClick={onImageUpload}
            className={styles["nav-container__button"]}
          >
            <img src={gallery} alt="gallery" />
          </button>

          <a className={styles["nav-container__item"]}>
            <img src={today} alt="today" />
            <span>today</span>
          </a>

          <a className={styles["nav-container__item"]}>
            <img src={report} alt="report" />
            <span>report</span>
          </a>
        </nav>
      )}
    </ImageUploading>
  )
}
