import { useState } from 'react'
import './InputSide.css'
import styled from 'styled-components'

const InputSideWrapper = styled.form`
    padding-bottom: 100px;
    position: relative;
    width: 100%;
    // border-top: 10px solid var(--blue-clr);
`;

const InputWrapper = styled.div`
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    color: var(--black-clr);
    background-color: #D4E3EA;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    font-size: 15px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 10px;
    outline: 0px transparent !important;
    padding: 8px;
    width: 100%;

    &::placeholder{
        color: #808080; 
    }
`;

const MessageInput = styled.textarea`
    background-color: #D4E3EA;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    color: var(--black-clr);
    height: 20vh;
    font-size: 15px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: 0px transparent !important;
    padding: 10px;
    resize: none;
    width: 100%;

    &::placeholder{
        color: #808080; 
    }
`;

const SubMitButton = styled.input`
    bottom: 20px;
    background-color: var(--orange-clr);
    border-radius: 5px;
    border: none;
    color: #fff;  
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    padding-block: .7rem;
    padding-inline: 1rem;
    right: 0px;
    text-transform: uppercase;
    &:hover {
        background-color: #B72D00;
        transition: background-color .4s;
    }
`;

const LoadingButton = styled.button`
    bottom: 20px;
    background-color: var(--orange-clr);
    border-radius: 5px;
    border: none;
    color: #fff;  
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    padding-block: .7rem;
    padding-inline: 1rem;
    right: 0px;
    text-transform: uppercase;
    &:hover {
    background-color: #B72D00;
    transition: background-color .4s;
    }
`;

const TextOne = styled.p`
  text-align: start;
  color: var(--black-clr);
  font-weight: 500;
  font-size: 20px;
  padding-block: 10px; 
`;

const InputSide = ({ onEmailSent }) => {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const response = await fetch('https://formspree.io/f/xwkgbpev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, subject, email, message, phone }),
    });

    if (response.ok) {
      setButtonLoading(false);
      setName('');
      setSubject('');
      setEmail('');
      setPhone('');
      setMessage('');
      onEmailSent();
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <InputSideWrapper onSubmit={handleSubmit}>
       <TextOne>Kontaktformulär</TextOne>
        <InputWrapper>
            <p className='input-title'>Namn</p>
            <Input 
            type='text' 
            required 
            placeholder='Anders Andersson' 
            value={name} 
            onChange={nameHandler} />
        </InputWrapper>
        <InputWrapper>
            <p className='input-title'>E-post</p>
            <Input 
            type='email' 
            placeholder='anders@email.com'
            value={email}
            onChange={emailHandler}
            required
            />
        </InputWrapper>
        <InputWrapper>
            <p className='input-title'>Telefonnummer</p>
            <Input
            type="tel"
            required
            placeholder="070-123 45 67"
            value={phone}
            onChange={phoneHandler}
            />
        </InputWrapper>
        <InputWrapper>
            <p className='input-title'>Ämne</p>
            <Input 
            type='text' 
            placeholder='Byte av tak'
            value={subject}
            onChange={subjectHandler} 
            />
        </InputWrapper>
        <InputWrapper>
            <p className='input-title'>Skriv ett meddelande</p>
            <MessageInput 
            placeholder='Jag skulle vilja byta mitt tak, men är osäker på...'
            value={message}
            required
            onChange={messageHandler} />
        </InputWrapper>
        {buttonLoading ? (
            <LoadingButton>Laddar...</LoadingButton>
        ) : (
            <SubMitButton type='submit' value='Skicka' />
        )}
  </InputSideWrapper>
  )
}

export default InputSide