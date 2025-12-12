import './About.css'
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';

export default function About() {
  return (
    <>
        <NavBar/>
        <div className="about">
        <Header text='about component' bgColor='#1ABC9C'/>
        <div className='container mt-5'>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}
