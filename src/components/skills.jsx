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
              <p>
              Between my time working at nView at iLumens inc, I have two years of industry experience using javascript (vanilla js, node, and React/Redux) to develop both frontend and backend services.
              Those jobs also exposed me to projects leveraging SQL and python (Django).
              My experience with Java, C#, and C++ comes from school projects.
              </p>
            </div>

          </div>
      </section>
    );
  }
}

export default Skills;
