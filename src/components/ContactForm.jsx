import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';

const Form = styled.form``;
const Name = styled.input``;
const Email = styled.input``;
const Message = styled.textarea``;
const FormButton = styled.button``;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/send-email', formData);
      if (res.data.success) {
        alert('Message sent successfully!');
      } else {
        alert('There was an error sending your message');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Name name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <Email type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <Message name="message" value={formData.message} onChange={handleChange} placeholder="Message..." required />
      <FormButton type="submit" />
    </Form>
  );
};
export default ContactForm;