import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles/UserPage.css';
import { VideoModalComponent } from '../components/VideoModalComponent';

export const UserPage = () => {

  const tempImg = [
    {
      id: "1",
      urlImg: "https://firebasestorage.googleapis.com/v0/b/conexiaapp.appspot.com/o/api-media%2Fpexels-cipotesv-18825357.jpg?alt=media&token=e524baf2-7291-4ec6-ae74-cdd9327f21eb",
    },
    {
      id: "2",
      urlImg: "https://firebasestorage.googleapis.com/v0/b/conexiaapp.appspot.com/o/api-media%2Fpexels-jc-herrera-257777426-19332101.jpg?alt=media&token=8d6eadc5-2e59-4c31-ab78-b14689563d6e",
    },
    {
      id: "3",
      urlImg: "https://firebasestorage.googleapis.com/v0/b/conexiaapp.appspot.com/o/api-media%2Fpexels-sofia-morales-95410047-14567680.jpg?alt=media&token=4f682d91-1a10-455f-80b7-e52099a6128e",
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState( false );
  const [idImg, setIdImg] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const handleProductSelected = (e) => {
    const idImage = e.currentTarget.getAttribute('data-id');
    setIdImg( idImage );
    setIsModalOpen( true );
  };
  
  const getMultimedia = async() => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    setUrlImage( data.cries.latest );
    return data;
  };

  useEffect(() => {
    getMultimedia();
  }, [])
  

  return (
    <>
      <main className="user-main-container">
        <h1>Productos en promoción</h1>
        <div className="products-container">
          {
            tempImg.map(
              ( img ) => {  
                return (
                    <div 
                      className="product-data-container"
                      onClick={ handleProductSelected }
                      data-id={ img.id }
                      key={ img.id }
                    >
                      <img src={ img.urlImg } alt="Descripción de la imagen" />
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
            urlImage={ urlImage }
            idImg={ idImg }
           />
      }
    </>
  );
};
