import React from 'react';

class Footer extends React.Component {

  render() {
    return (
        <footer id="footer">
          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong><span>iPortfolio</span></strong>
            </div>
            <div class="credits">
              Designed by <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>, translated to React.js by Joseph Rodman
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
