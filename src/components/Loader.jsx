import cosmoIcon from '../assets/cosmo-icon.svg';

const Header = () => {
    return (
        <header className="app-header">
            <img src={cosmoIcon} alt="Cosmo Icon" className="header-icon" />
            <h1>CosmoFlix</h1>
            <p>Your Portal to the Movie Universe</p>
        </header>
    );
};

export default Header;