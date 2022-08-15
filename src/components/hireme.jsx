import React from 'react';
import { vals as config } from '../config.js'

class HireMe extends React.Component {

  title = "What I'm Seeking"

  getParagraphs() {
    return (<span>
      {config.hireMe.map((text) => 
        (<span>
          <p>{text}</p>
          <br></br>
        </span>)
      )}
    </span>)
  }

  render() {
    return (
        <section id="employment">
          <div class="container">

            <div class="section-title">
              <h2>{this.title}</h2>
              {this.getParagraphs()}
            </div>
          </div>

        </section>
    );
  }
}

export default HireMe;
