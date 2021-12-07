import React from 'react';

class Skills extends React.Component {

    componentDidMount() {
       var script = document.createElement('script')
       script.src = "js/skills.js";
       script.class = "external-script";
       document.body.appendChild(script);
    }

  render() {
    return (
        <section id="skills" class="skills section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Skills</h2>
              <p>I have a year and a half of industry experience using javascript to develop both frontend and backend services. I also have industry experience
              with MySQL Databases from my time spent at nView, where I designed and implemented a relational database. My experience with Java, C#, and C++ comes from school projects.
              The following percentages represent my confidence and comfort with these skills - at this point I'm confident that I can use any of these technologies, but there
              will be more googling involved in the ones that I am less confident in. I have a lot more to learn, even with the skills that I feel most confident in!
              </p>
            </div>

            <div class="row skills-content">

              <div class="col-lg-6" data-aos="fade-up">

                <div class="progress">
                  <span class="skill">Javascript <i class="val">95%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">HTML/CSS <i class="val">95%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">Git<i class="val">85%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">SQL <i class="val">80%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                <div class="progress">
                    <span class="skill">Java <i class="val">75%</i></span>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div class="progress">
                  <span class="skill">C# <i class="val">60%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">Python (Django) <i class="val">50%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>
      </section>
    );
  }
}

export default Skills;
