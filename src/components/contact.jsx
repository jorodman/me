import React, { useState } from 'react';

function Contact(props) {

    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
          name: name.value,
          email: email.value,
          message: message.value,
        };

        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <section id="contact" class="contact section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Contact</h2>
              <p>Feel free to reach out either through the form below, via LinkedIn, Handshake, email, or by call/text.</p>
            </div>

            <div class="row" data-aos="fade-in">

              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Salt Lake City, UT</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>josephrodman5@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call/Text:</h4>
                    <p>508 233 0563</p>
                  </div>
                </div>

              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form id="contact-form" onSubmit={handleSubmit} method="POST" role="form" class="php-email-form" enctype = "multipart/form-data">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input type="text" name="name" class="form-control" id="name" required></input>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input type="email" class="form-control" name="email" id="email" required></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject" required></input>
                  </div>
                  <div class="form-group">
                    <label for="name">Message</label>
                    <textarea class="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
    );
}

export default Contact;
