import React from 'react'
import Navbar  from './Navbar';
const Header = () => {
  return (
    <div className="banner">
      <Navbar/>
      <div className="banner_content">
        <div className="container">
          <div className='banner__text'>
            <h2>Bitcoins</h2>
            <p>Bitcoin is a digital currency which operates free of any central control or the oversight of banks or governments.</p>
            <h2>Blockchain</h2>
            <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
