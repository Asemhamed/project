import './Header.css'

export default function Header({text,bgColor}) {
  return (
    <>
        <div className="header">{text}
        </div>
          <div className={`head-icon ${ bgColor?'bgColor':'bg-white'}`} ><i className="fa-solid fa-star"></i></div>
        
    </>
  )
}
