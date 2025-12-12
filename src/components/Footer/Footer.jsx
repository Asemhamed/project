import './Footer.css'

export default function Footer() {
return (
    <>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center mt-5 mt-md-0">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 text-center mt-5 mt-md-0">
                    <h3>AROUND THE WEB</h3>
                    <div className='icons d-flex justify-content-center '>
                        <div className="icon"><i className="fa-brands fa-facebook"></i></div>
                        <div className="icon"><i className="fa-brands fa-twitter"></i></div>
                        <div className="icon"><i className="fa-brands fa-linkedin-in"></i></div>
                        <div className="icon"><i className="fa-solid fa-globe"></i></div>
                    </div>
                </div>
                <div className="col-md-4 text-center mt-5 mt-md-0">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
    
        <div className="copyright text-white text-center">
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
)
}
