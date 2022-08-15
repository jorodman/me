import React from 'react';
import { vals as config } from '../config.js'

class Projects extends React.Component {

  getProjects = () => {
      let content = (
        <div class="row">

            {config.projects.map((project) => {
              if(project.link)
              {
                return (
                    <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                      <div class="icon"><a href={project.link} target="_blank"><i class="bi bi-file-earmark-music"></i></a></div>
                      <h4 class="title"><a href={project.link} target="_blank">{project.name}</a></h4>
                      <p class="description">{project.description}</p>
                    </div>)
              }
              else 
              {
                return (
                    <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                      <div class="icon"><i class="bi bi-file-earmark-music"></i></div>
                      <h4 class="title">{project.name}</h4>
                      <p class="description">{project.description}</p>
                    </div>)
              }
            })}

        </div>
      );

    return content;
  }

  render() {
    return (
        <section id="projects" class="services section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Projects</h2>
              {config.projectsDescription}
            </div>

            {this.getProjects()}

          </div>
        </section>
    );
  }
}

export default Projects;
