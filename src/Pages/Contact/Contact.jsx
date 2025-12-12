import "./Contact.css";
import NavBar from "./../../components/NavBar/NavBar";
import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="contact">
        <Header text="conatct section" />
        <div className="container ">
        <div className="form-floating mb-3 w-50 mx-auto">
          <input
            type="email"
            className="form-control w-100 "
            id="floatingInputName"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputName">User Name</label>
        </div>
        <div className="form-floating mb-3 w-50 mx-auto">
          <input
            type="email"
            className="form-control w-100 "
            id="floatingInputAge"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputAge">User Age</label>
        </div>
        <div className="form-floating mb-3 w-50 mx-auto">
          <input
            type="email"
            className="form-control w-100 "
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating w-50 mx-auto">
          <input
            type="password"
            className="form-control w-100"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating w-50 mx-auto">
        <button className="form-Btn">Send Message</button>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
