import { Link } from 'react-router-dom';
import './styles/MainPage.css';

export const MainPage = () => {
  return (
    <main className="ecommerce-main-page">
      <h1>Live Streaming E-Commerce</h1>
      <p>Entra a nuestra transmisión en vivo</p>
      <button 
        className='main-page-button'
      >
        <Link
          to="/user"
        >
          Entrar a transmisión  
        </Link>
      </button>
    </main>
  );
};