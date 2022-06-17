import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
          <h3>About Bitcoins</h3>
        <h1>Welcome to Bitcoins & Blockchain</h1>
        <p>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>
        <div className="about__btn">
              <a href="" className="btn btn-smart">
              Get Bitcoins
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
            <img src="/img/images.jpg" alt="Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
