import React from 'react';

class About extends React.Component {

  render() {
    return (
        <section id="about" class="about">
          <div class="container">

            <div class="section-title">
              <h2>About</h2>
              <p>I'm a third-year Computer Science student at the University of Utah, passionate about utilizing technology to solve problems. I'm currently working as a software developer for InnoSys Inc while I pursue my degree. Last year I worked on developing the user interface and database system for an X-ray Imaging System while I worked for nView Medical. My biggest interests outside of programming are investing and teaching, the latter of which I sought after my sophomore year as a TA for Introduction to Object Oriented Programming. In my free time I enjoy playing guitar, rock climbing, hiking, and snowboarding.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4" data-aos="fade-right">
                <img src="img/profile-pic.jpg" class="img-fluid" alt=""></img>
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Software Developer and Student</h3>
                <p class="fst-italic">
                  I am interested in opportunities for Summer 2022 software development internships
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://jorodman.github.io/me</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>508 233 0563</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Salt Lake City, UT</span></li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's Expected 2023</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>josephrodman5@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
    );
  }
}

export default About;
