import logo from '../assets/images/isendLogo.png'
import '../style/component/header.css'
import '../style/fonts/poppins/poppinsFont.css'
import '../style/global.css'


const Header = function() {
    return (
        <div className='headerContainer'>
            <h1 className='title'>Liste des incidents</h1>
            <img className='logo' src={logo}/>
        </div>
    );
}

export default Header;