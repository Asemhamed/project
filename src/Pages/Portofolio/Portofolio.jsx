import './Portofolio.css'
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
import Header from './../../components/Header/Header';
export default function Portofolio() {
    const Selector = document.querySelector('.selector ');
    const Image = document.querySelector('.selector .image-display');
const display = function (pos){
    document.querySelector('.selector ').classList.replace('d-none','d-flex');
    if(pos==1){
        document.querySelector('.selector .image-display').setAttribute('src',img1);
    }else if(pos==2){
        document.querySelector('.selector .image-display').setAttribute('src',img2);
    }else{
        document.querySelector('.selector .image-display').setAttribute('src',img3);
    }
}

const Hide = function(){
    document.querySelector('.selector ').classList.replace('d-flex','d-none')
}

  return (
    <>
    <NavBar/>
        <div className="porto">
            <Header text='portfolio component'/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-lg-4 pt-3">
                        <div className="inner position-relative overflow-hidden">
                            <picture className=''>
                                <div onClick={()=>display(1)} className="layout position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src={img1} alt="porto1" className='w-100' />
                            </picture>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-3">
                        <div className="inner position-relative overflow-hidden">
                            <picture className=''>
                                <div onClick={()=>display(2)} className="layout position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src={img2} alt="porto1" className='w-100' />
                            </picture>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-3">
                        <div className="inner position-relative overflow-hidden">
                            <picture className=''>
                                <div onClick={()=>display(3)} className="layout position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src={img3} alt="porto1" className='w-100' />
                            </picture>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-3">
                        <div className="inner position-relative overflow-hidden">
                            <picture className=''>
                                <div onClick={()=>display(1)} className="layout position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src={img1} alt="porto1" className='w-100' />
                            </picture>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-3">
                        <div className="inner position-relative overflow-hidden">
                            <picture className=''>
                                <div onClick={()=>display(2)} className="layout position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src={img2} alt="porto1" className='w-100' />
                            </picture>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-3">
                        <div className="inner position-relative overflow-hidden">
                            <picture className=''>
                                <div onClick={()=>display(3)} className="layout position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src={img3} alt="porto1" className='w-100' />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    <div onClick={Hide} className='selector position-fixed d-none'>
    <img  alt="" className=' image-display' />
    </div>
    </>
  )
}
