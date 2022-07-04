import React from 'react';
import Heart from './img/heart.png';
import './Footer.css';

function Footer(){
  return (
    <footer class="footer">
      <section class="copy">
        Copyright © 2022 - MITXPRO
      </section>
      <section class="author">
        Made with <img src={Heart} alt="Love"/> for <a href="https://github.com/arturomsoberanes" target="_blank">Arturo Soberanes</a>
      </section>
    </footer>
  );
}

export default Footer;
