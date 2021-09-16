# Overview

I started by following this [tutorial](https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/) which uses create-react-app
I took this [bootstrap template](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/) and cut it up into react components

Template Name: iPortfolio
Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
Author: BootstrapMade.com
License: https://bootstrapmade.com/license/

# The Contact Form
The original template had a contact form in the html but did not provide the backend code. So I decided that I would figure out how to use node.js to send emails. I found this [tutorial](https://w3collective.com/react-contact-form/) on using nodemailer to send emails. Once I had everything working locally I went to deploy it by adding the command 'node server.js' to the 'deploy' command in the scripts section of my package.json. This worked - but I later found that it was only running the server locally, it wasn't hosted on GitHub pages. I did some googling and found out that GitHub pages only hosts static sites, so I decided to wrap up my project and just leave out the contact form.

# Continuous Integration
Part of getting the contact form running involves putting your username and password into nodemailer (in the code). Obviously that is a security risk and so I tried to figure out how to use GitHub secrets and environment variables to get this running. This led me to try using GitHub actions to set my environment variables, and I ended up getting a configuration for continuous integration of my website! I never was able to get the environment variables set for my server.js file because GitHub pages wouldn't run that file, but it was cool to get continuous integration going as a result of my efforts!
