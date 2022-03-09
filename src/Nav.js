import React from 'react'
import './nav.css'

function Nav() {
    const [show,setShow] = React.useState(true)

    const transitionNavBar = () => {
        if(window.scrollY >100){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    React.useEffect(() =>{
        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar)
    },[])

  return (
<div className={`nav ${show && 'nav-black'}`}>
    <div className="nav-content">
        <img src="https://www.pngall.com/wp-content/uploads/4/Netflix-Official-Logo.png" alt="" className="logo"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="avatar"/>
    </div>
    
</div>
  )
}

export default Nav