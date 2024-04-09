import './ContactView.css'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

import InputSide from '../../components/InputSide/InputSide'
import DetailsBar from '../../components/DetailsBar/DetailsBar'
import InputSuccess from '../../components/InputSuccess/InputSuccess'

import Cap from '../../assets/cap.png'


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  `;
  
  const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 3rem 0rem 3rem 0;
  width: 100%; 

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem; 
  }
`;


const ContactView = () => {

  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleEmailSent = () => {
    setEmailSent(true);
  }

  return (
    <div className='Contact'>
      <div className='img-wrapper'>
        <div className='overlay flex-center'></div>
        <img src={Cap} alt='En svart keps med Arosols orange logga' className='img-cover' />
      </div>
      <div className='line'></div>
      <div className='d-flex-column gap-3'>
        <div className='container'>
          <PageWrapper>
            { emailSent ? <InputSuccess/> : 
              <FormContainer>
                <DetailsBar/>
                <InputSide onEmailSent={handleEmailSent} />
              </FormContainer>
            }
          </PageWrapper>
        </div>
      </div>
    </div>
  )
}

export default ContactView