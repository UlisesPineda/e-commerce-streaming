import { Link } from 'react-router-dom';
import { useState } from 'react';

import './styles/UserPage.css';
import { VideoModalComponent } from '../components/VideoModalComponent';

export const UserPage = () => {

  const dataProduct = [
    {
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_standard.jpg",
      "video": "https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/4300d7b9187942e79a82a8ab010672d5_d98c/Tenis_Samba_OG_Blanco_B75806_video.mp4",
      "id": "1"
    },
    {
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_standard.jpg",
      "video": "https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/4300d7b9187942e79a82a8ab010672d5_d98c/Tenis_Samba_OG_Blanco_B75806_video.mp4",
      "id": "2"
    },
    {
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_standard.jpg",
      "video": "https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/4300d7b9187942e79a82a8ab010672d5_d98c/Tenis_Samba_OG_Blanco_B75806_video.mp4",
      "id": "3"
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState( false );
  const [urlVideo, setUrlVideo] = useState('');
  const [idImg, setIdImg] = useState('');

  const handleProductSelected = (e) => {
    const idImage = e.currentTarget.getAttribute('data-id');
    const productSelected = dataProduct.filter( product => product.id === idImage );
    setUrlVideo( productSelected[0].video );
    setIdImg( idImage );
    setIsModalOpen( true );
  };
  
  return (
    <>
      <main className="user-main-container">
        <h1>Productos en promoción</h1>
        <div className="products-container">
          {
            dataProduct.length &&
              dataProduct.map(
                ( product ) => {  
                  return (
                      <div 
                        className="product-data-container"
                        onClick={ handleProductSelected }
                        data-id={ product.id }
                        key={ product.id }
                      >
                        <img src={ product.image } alt="Descripción de la imagen" />
                      </div>
                  )
                }
              )
          }
        </div>
        <button 
          className='main-page-button'
        >
          <Link
            to="/"
          >
            Ir al inicio 
          </Link>
        </button>
      </main>
      {
        isModalOpen &&
          <VideoModalComponent
            setIsModalOpen={ setIsModalOpen }
            urlVideo={ urlVideo }
            idImg={ idImg }
          />
      }
    </>
  );
};
