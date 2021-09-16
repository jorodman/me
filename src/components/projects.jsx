import React from 'react';

class Projects extends React.Component {

  render() {
    return (
        <section id="projects" class="services section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Projects</h2>
              <p>All of the following projects, with the exception of Spotify Playlists, were done for school and therefore I can't host the code publicly on GitHub.</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div class="icon"><a href="https://github.com/jorodman/SpotifyExtension" target="_blank"><i class="bi bi-file-earmark-music"></i></a></div>
                <h4 class="title"><a href="https://github.com/jorodman/SpotifyExtension" target="_blank">Spotify Playlists</a></h4>
                <p class="description">Webapp that uses the Spotify API to create and update playlists for users based off of their top songs. The UI is a bootstrap html template, the front end uses javascript, and the backend uses express and a MySQL database</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><i class="bi bi-pencil-square"></i></div>
                <h4 class="title">Course Management System</h4>
                <p class="description">Web App similar to Canvas that manages a university’s students, classes, professors, assignments, grades, etc. Backend code, written in C# and utilizing LINQ, filled in by my partner and me</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="bi bi-file-earmark-spreadsheet"></i></div>
                <h4 class="title">Spreadsheet Client & Server</h4>
                <p class="description">The client was written in C# and was, and the server was written in C++. I managed the team's progress and translated spreadsheet logic from the C# program to C++</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="bi bi-binoculars"></i></div>
                <h4 class="title">Tank Wars Multiplayer Game</h4>
                <p class="description">Client and server programs for a multiplayer tank wars game, written in C#, done with a partner</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon"><i class="bi bi-chat-left-text"></i></div>
                <h4 class="title">Secure Text Message Transfer</h4>
                <p class="description">Securely sends text messages between two computers, developed using java’s cryptography and socket libraries</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                <div class="icon"><i class="bi bi-file-earmark-text"></i></div>
                <h4 class="title">Peer to Peer File Sharing Mock</h4>
                <p class="description">Mimics peer-to-peer file sharing to send files between computers using java’s TCP socket library</p>
              </div>
            </div>

          </div>
        </section>
    );
  }
}

export default Projects;
