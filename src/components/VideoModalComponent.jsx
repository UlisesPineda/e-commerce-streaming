import PropTypes from 'prop-types';

import './styles/VideoModalComponent.css';

export const VideoModalComponent = ({ setIsModalOpen, urlVideo, idImg }) => {

    const handleCloseModal = () => {
        setIsModalOpen( false );
    };
    
    console.log( idImg );

  return (
    <div
        className="modal-container"
    >
        <div className="video-container">
            <video 
                src={ urlVideo }
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
    setIsModalOpen: PropTypes.func,
    urlVideo: PropTypes.string,

    idImg: PropTypes.string,
};