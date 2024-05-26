import React from 'react';
import { vals as config } from '../config.js'

class Resume extends React.Component {

  getClasses() {
    return (<ul> {config.classes.map((c) => ( <li>{c}</li>))}</ul>);
  }

  getJobExperience() {

    
    return (<span>
            {config.jobs.map((job) => (
              <div class="resume-item">
                <h4>{job.title}</h4>
                <h5>{job.duration}</h5>
                <p><em>{job.company}, {job.location}</em></p>
                <ul>
                  {job.accomplishments.map((accomplishment) => 
                    <li>{accomplishment}</li>
                  )}
                </ul>
              </div>
            ))}
          </span>);
  }

  render() {
    return (
        <section id="resume" class="resume">
          <div class="container">

            <div class="section-title">
              <h2>Resume</h2>
            </div>

            <div class="row">
              <div class="col-lg-12" data-aos="fade-up">
                <h3 class="resume-title">Summary</h3>
                <div class="resume-item pb-0">
                  <h4>Joseph Rodman</h4>
                  <p><em>{config.resumeSummary}</em></p>
                  <ul>
                    <li>{config.location}</li>
                    <li>{config.phone}</li>
                    <li>{config.email}</li>
                  </ul>
                </div>

                <h3 class="resume-title">Industry Experience</h3>
                {this.getJobExperience()}
                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                  <h4>{config.degree}</h4>
                  <h5>{config.graduationDate}</h5>
                  <p><em>{config.college}</em></p>
                  {this.getClasses()}
                </div>
              </div>
            </div>

          </div>
        </section>
    );
  }
}

export default Resume;
