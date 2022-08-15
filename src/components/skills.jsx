import React from 'react';
import { vals as config } from '../config.js'

class Skills extends React.Component {

  componentDidMount() {
      var script = document.createElement('script')
      script.src = "js/skills.js";
      script.class = "external-script";
      document.body.appendChild(script);
  }

  title = "Technical Skills";


  render() {
    return (
        <section id="skills" class="skills section-bg">
          <div class="container">

            <div class="section-title">
              <h2>{this.title}</h2>
              <p>
                {config.skillsParagraph}
              </p>
            </div>

          </div>
      </section>
    );
  }
}

export default Skills;
