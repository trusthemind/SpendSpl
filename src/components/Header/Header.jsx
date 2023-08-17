import logo from '../../image/logo.svg'
import Vector from '../../image/Vector.svg'
import Vector1 from '../../image/Vector1.svg'
import Vector2 from '../../image/Vector2.svg'
import Vector3 from '../../image/Vector3.svg'

function Header() {
  return (
    <>
      <div className='header'>
        <div className='header__el header__nav'>
          <img src={Vector} alt="elem" />
          <img src={Vector1} alt="elem" />
        </div>
        <div className='header__el header__logo'>
          <img src={logo} alt="circle" className='logo'/>
          <span className='logo__title'>SpendSplif</span>
        </div>
        <div className='header__el header__nav'>
          <img src={Vector2} alt="elem" />
          <img src={Vector3} alt="elem" />
        </div>
      </div>
    </>

  );
}
  export default Header;