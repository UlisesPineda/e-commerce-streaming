import PropTypes from 'prop-types';

import './styles/VideoModalComponent.css';

export const VideoModalComponent = ({ setIsModalOpen, urlImage, idImg }) => {

    const handleCloseModal = () => {
        setIsModalOpen( false );
    };

    console.log( urlImage, idImg );

  return (
    <div
        className="modal-container"
    >
        VideoModalComponent   
        <div className="video-container">
            <video 
                src="https://firebasestorage.googleapis.com/v0/b/conexiaapp.appspot.com/o/api-media%2FHermoso%20paisaje%20en%20el%20mar(video%20corto).MP4?alt=media&token=2e87e4e7-4551-4af6-a2cc-a4412df5babb"
                width="640" height="360" autoPlay controls
            ></video>
        </div>
        <button 
          className='video-button-component'
          onClick={ handleCloseModal }
        >
            Cerrar 
        </button>
 
    </div>
  );
};

VideoModalComponent.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
    urlImage: PropTypes.string.isRequired,

    idImg: PropTypes.string,
};