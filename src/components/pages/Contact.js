import React from 'react';
import '../../styles/contact.css';

export default function Contact() {
  return (
    <section id="contact">
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-12 col-sm-offset-2">
            <div>
              <h3>CONTACT ME</h3>
            </div>
            
            <p>You can always email me at <span><a href="mailto:bc@bcorporal.dev">bc@bcorporal.dev</a></span></p>
            <p>View my <span><a href="https://www.linkedin.com/in/brandon-corporal-65742822b">LinkedIn</a></span></p>
            <p>View my <span><a href="https://github.com/bcorporal">Github</a></span></p>
            <form method="post" data-form-title="CONTACT US">
              <input type="hidden" data-form-email="true"></input>
              <div class="form-group">
                <input type="text" class="form-control" name="name" required="" placeholder="Name*" data-form-field="Name"></input>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" required="" placeholder="Email*" data-form-field="Email"></input>
              </div>
              <div class="form-group">
                <input type="tel" class="form-control" name="phone" placeholder="Phone" data-form-field="Phone"></input>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-lg btn-danger">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
