import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__text">
            <div className='logo'>Bitcoins</div>
            <ul className="navbar__ul">
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Solution</a></li>
                <li><a href="">Markets</a></li>
                <li><a href="">Trade</a></li>
                <li><a href="">Earn</a></li>
            </ul>
            </div>
    </nav>
  );
};

export default Navbar;