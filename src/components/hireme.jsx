import React from 'react';
import { vals as config } from '../config.js'

class HireMe extends React.Component {

  title = "What I'm Seeking"

  render() {
    return (
        <section id="employment">
          <div class="container">

            <div class="section-title">
              <h2>{this.title}</h2>
              <p>
                {config.hireMeP1}
              </p>
              <br></br>
              <p>
                {config.hireMeP2}
              </p>
              <br></br>
            </div>
          </div>

        </section>
    );
  }
}

export default HireMe;
