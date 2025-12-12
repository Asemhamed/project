import './Home.css'
import img from '../../assets/avataaars.svg'
import Header from './../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <>
    <NavBar/>
            <div className="home text-center">
                <div className='image text-center mx-auto'>
                <img src={img} alt="character" className='w-100'/>
                </div>
                <Header text="start Framework" bgColor='#1ABC9C'/>
                <p className='mt-5 mb-3'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
    <Footer/>
    </>
  )
}
