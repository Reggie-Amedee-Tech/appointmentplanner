import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
    <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="please input your name"
    >
    </input>
    <input
      type='text'
      value={email}
      onChange={(e) => setEmail(e.target.value)}

      placeholder="please input your email"
    >
    </input>
    <input
      type='text'
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="please input your phone number"
    >
    </input>
    <button type="submit">Submit</button>
  </form>
  );
};

export default ContactForm
