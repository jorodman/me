import React, { Component } from 'react';

class Hero extends React.Component {


    componentDidMount() {
       var script = document.createElement('script')
       script.src = "js/hero.js";
       script.class = "external-script";
       document.body.appendChild(script);
    }


  render() {
    return (
        <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
          <div class="hero-container" data-aos="fade-in">
            <h1>Joseph Rodman</h1>
            <p>I'm a <span class="typed" data-typed-items="Programmer, Leader, Student, Creator"></span></p>
          </div>
        </section>
    );
  }
}

export default Hero;
