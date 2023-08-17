import form1 from '../../image/form1.svg'
import form2 from '../../image/form2.svg'
import form3 from '../../image/form3.svg'
import form4 from '../../image/form4.svg'
import google from '../../image/google.svg'
import vk from '../../image/vk.svg'
import fcb from '../../image/fcb.svg'

function Main() {
  return (
      <div className='container'>
        <form action="#" className='form'>
            <div className='form__el'>
                <img src={form1} alt="" />
                <input className='form__subtitle' placeholder='Никнейм' />
            </div>
            <div className='form__el'>
                <img src={form2}  alt="" />
                <input className='form__subtitle' placeholder='Почта' />
            </div>
            <div className='form__el'>
                <img src={form3}  alt="" />
                <input className='form__subtitle' placeholder='Пароль' />
            </div>
            <div className='form__el'>
                <img src={form4}  alt="" />
                <input className='form__subtitle' placeholder='Подтверждение пароля' />
            </div>
            <span className='form__login'>Я уже пользователь</span>
            <div className='form__links'>
                <img src={google} alt="gogle" />
                <img src={vk}alt="vk" />
                <img src={fcb}alt="fcb" />
            </div>
        </form>
      </div>

  );
}
export default Main;