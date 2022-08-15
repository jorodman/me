import React from 'react';
import { vals as config } from '../config.js'

class About extends React.Component {
  
  sectionTitle = "About"

  render() {
    return (
        <section id="about" class="about">
          <div class="container">

            <div class="section-title">
              <h2>
                {this.sectionTitle}
              </h2>
              <p>
                {config.aboutMe}
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4" data-aos="fade-right">
                <img src="img/profile-pic.jpg" class="img-fluid" alt=""></img>
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3></h3>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <a href={config.websiteUrl} target="_blank"><span>{config.websiteUrl}</span></a></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{config.phone}</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{config.location}</span></li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{config.age}</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{config.email}</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{config.degree} {config.graduationDate} </span></li>
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
