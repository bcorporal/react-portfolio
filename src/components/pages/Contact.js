import React from 'react';
import '../../styles/contact.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjvljnkl");
  if (state.succeeded) {
      return <p>Thank Your For Your Submission</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
    <h1 htmlFor="email">Contact Me</h1>
    <h5>Please enter details below</h5>
    <h3>Name</h3>
    <input
      id="nameInput"
      type="name"
      name="Full Name"
      placeholder="Full Name.."
    />
    <h3>Email</h3>
    <input id="email" type="email" name="email" placeholder="Email.." />
    <ValidationError prefix="Email" field="email" errors={state.errors} />
    <h3>Message</h3>
    <textarea
      id="message"
      name="message"
      placeholder="Enter Message Here.."
    />
    <ValidationError prefix="Message" field="message" errors={state.errors} />
    <br></br>
    <button type="submit" disabled={state.submitting}>
      Submit
    </button>
  </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;


