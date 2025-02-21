
import './Header.css';
import logo from '../images/logo.jpg';

const Header = () => {
  return (
    <header className="header">
    <div className="logo">Shaik NagurBabu</div>
    <nav>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </nav>
    <div className="profile">
      
      <img src={logo} alt="User" className="profile-pic" />
      <div className="profile-info">
        <span className="profile-name">Shaik Nagur babu</span>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  </header>
  );
};

export default Header;
