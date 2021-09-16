import React from 'react';

class Resume extends React.Component {

  render() {
    return (
        <section id="resume" class="resume">
          <div class="container">

            <div class="section-title">
              <h2>Resume</h2>
            </div>

            <div class="row">
              <div class="col-lg-6" data-aos="fade-up">
                <h3 class="resume-title">Summary</h3>
                <div class="resume-item pb-0">
                  <h4>Joseph Rodman</h4>
                  <p><em>Third year Computer Science student at the University of Utah with a year and a half of Industry Experience developing applications in javascript.</em></p>
                  <ul>
                    <li>Salt Lake City, Utah</li>
                    <li>(508) 233-0563</li>
                    <li>josephrodman5@gmail.com</li>
                  </ul>
                </div>

                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                  <h4>Bachelors in Computer Science</h4>
                  <h5>Expected 2023</h5>
                  <p><em>Univeristy of Utah, Salt Lake City, UT</em></p>
                  <ul>
                      <li>Introduction to OOP</li>
                      <li>Introduction to Algorithms and Data Structures</li>
                      <li>Software Practice I & Software Practice II</li>
                      <li>Computer Networking</li>
                      <li>Database Systems</li>
                      <li>Calculus I-III</li>
                      <li>Linear Algebra</li>
                      <li>Discrete Structures</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 class="resume-title">Industry Experience</h3>
                <div class="resume-item">
                  <h4>Software Developer</h4>
                  <h5>August 2021 - Present</h5>
                  <p><em>InnoSys Inc, Salt Lake City, UT </em></p>
                  <ul>
                    <li>My role is mostly as a frontend developer with InnoSys, using React.js to develop an improved UI for one of their products.</li>
                  </ul>
                </div>
                <div class="resume-item">
                  <h4>Software Developer</h4>
                  <h5>March 2020 - May 2021</h5>
                  <p><em>nView Medical, Salt Lake City, UT</em></p>
                  <ul>
                    <li>Assisted in UI and web server development for an X-ray system. The UI manages the surgical procedure workflow, manipulates the X-ray volume, and displays patient and procedure metadata</li>
                    <li>Greatly improved system reliability by re-architecting lots of existing code. This included designing and implementing a relational database to replace the poorly designed first database iteration</li>
                    <li>Implemented both a mouse and touch interface using Javascript, HTML and CSS</li>
                    <li>Acquired vanilla Javascript, Node.js, SQL, git and linux command line skills to complete the work</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
    );
  }
}

export default Resume;
