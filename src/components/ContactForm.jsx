import {useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import {media} from '../styles/utils.js';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .7);
  z-index: 5;
`;
const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  min-width: 35vw;
  max-height: 50vh;
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-template-areas:
  "name name"
  "email email"
  "message message"
  "submit cancel";
  gap: 1rem;
  margin:0;

  ${media.medium`
      max-width:unset;
      max-height:unset;
      width: 70%;
      `}

  ${media.smedium`
      width:90%;
      gap:.5rem;
      grid-template-columns:1fr;
      grid-template-areas:
      'name'
      'email'
      'message'
      'submit'
      'cancel';
      `}
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: .5rem;
  padding: .5rem;

  ${media.small`
      height:2.5rem;
      font-size:1rem;
      `}
`;

const Name = styled(Input)`
  grid-area: name;
`;
const Email = styled(Input)`
  grid-area: email;
`;
const Message = styled.textarea`
  grid-area: message;
  width: 100%;
  min-height: 10rem;
  max-height: 30rem;
  border-radius: .5rem;
  resize: vertical;
  padding: .5rem;
`;
const Button = styled.button`
  width: 100%;
  height: 4rem;
  padding: .5rem;
  font-weight: 700;
  font-size: 1.1rem;
  backdrop-filter: blur(20px);
  border-radius: .5rem;
  transition: all ease-in .2s;
  border: none;
  outline: none;
  
  ${media.small`
      height:2.5rem;
      font-size:1rem;
      `}
`;
const SubmitButton = styled(Button)`
  grid-area: submit;
  background: ${props => props.theme.colors.frosted};
  color: ${props => props.theme.colors.altText};

  &:hover {
    box-shadow: ${props => props.theme.effects.darkBoxShadow};
  }

`;
const CancelButton = styled(Button)`
  grid-area: cancel;
  font-weight: unset;

  &:hover {
    background: indianred;
    color: ${props => props.theme.colors.altText};
    box-shadow: ${props => props.theme.effects.darkBoxShadow};
  }
`;

const ContactForm = ({toggleModal}) => {
    const [formData, setFormData] = useState({
        name: '', email: '', message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://us-central1-portfolio-7e0ed.cloudfunctions.net/api/send-email', formData);
            if (res.data.success) {
                alert('Message sent successfully!');
                setFormData({name: '', email: '', message: ''});
                toggleModal();
            } else {
                alert('There was an error sending your message');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };
    return (
        <>
            <Overlay onClick={toggleModal}/>
            <Form onSubmit={handleSubmit}>
                <Name name="name" value={formData.name} onChange={handleChange}
                      placeholder="Name" required/>
                <Email type="email" name="email" value={formData.email}
                       onChange={handleChange} placeholder="Email" required/>
                <Message name="message" value={formData.message} onChange={handleChange}
                         placeholder="Message..." required/>
                <SubmitButton type="submit">Submit</SubmitButton>
                <CancelButton type="button" onClick={toggleModal}>Cancel</CancelButton>
            </Form>
        </>);
};
export default ContactForm;

ContactForm.propTypes = {
    toggleModal: PropTypes.func.isRequired
};