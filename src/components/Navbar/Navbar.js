import React, { useState} from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button';
import './Nav.css'



const Navbar = () => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click)
    // if (click === true) {
    //    document.getElementsByClassName(".navbar").style.height = "100vh";
    // }

    // else{
    //   document.getElementsByClassName(".navbar").style.height = "10vh";
    // }



  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <div className={click ? 'navbar new' : 'navbar'}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          JSCOP 5.0
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
          <a href ='/#Events'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Events
            </a>
          </li>
          <li className='nav-item'>
            <a href ='/#timeline'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Timeline
            </a>
          </li>

          {/* <li>
            <Link
              to='/register'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              REGISTER NOW!
            </Link>
          </li> */}
        </ul>
        {/* {button && <Button buttonStyle='btn--outline'>REGISTER NOW</Button>} */}

      </div>
    </div>
  )
}

export default Navbar