import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header id="header">
          <div class="d-flex flex-column">

            <div class="profile">
              <img src="img/profile-pic.jpg" alt="" class="img-fluid rounded-circle"></img>
              <h1 class="text-light"><a href="index.html">Joseph Rodman</a></h1>
              <div class="social-links mt-3 text-center">
                <a href="https://github.com/jorodman" target="_blank" class="instagram"><i class="bx bi-github"></i></a>
                <a href="https://www.linkedin.com/in/josephrodman/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>

            <nav id="navbar" class="nav-menu navbar">
              <ul>
                <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="#projects" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Projects</span></a></li>
                <li><a href="#employment" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Hire Me</span></a></li>
              </ul>
            </nav>
          </div>
      </header>
    );
  }
}

export default Header;
