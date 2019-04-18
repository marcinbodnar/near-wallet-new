import React from 'react'

import { Container, Loader, Grid, Dimmer, Header } from 'semantic-ui-react'

import NearInfo from './NearInfo'

import styled from 'styled-components'

const CustomContainer = styled(Container)`
   && .disclaimer {
      margin-left: 1rem;
      margin-right: 1rem;
      margin-top: 100px;

      > .column {
         padding-left: 0px;
         padding-right: 0px;
      }
   }
   .disclaimer-info {
      font-weight: 600;
      letter-spacing: 2px;
   }

   &&& .creating-info {
      padding-right: 0px;
      padding-top: 48px;

      h1 {
         color: #4a4f54;
         padding-bottom: 24px;
      }
   }

   @media screen and (max-width: 767px) {
      &&& .creating-info {
         padding-right: 1rem;
      }
   }
`

const CreateAccountContainer = ({ loader, children }) => (
   <CustomContainer>
      <Grid className=''>
         <Dimmer inverted active={loader}>
            <Loader />
         </Dimmer>

         <Grid.Row className='creating-info'>
            <Grid.Column computer={8} tablet={8} mobile={16} className=''>
               <Header as='h1'>Create Account</Header>
               <Header as='h2'>
                  Creating a NEAR account is easy. Just choose a username and
                  you’re ready to go.
               </Header>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16} className=''>
               <NearInfo />
            </Grid.Column>
         </Grid.Row>
      </Grid>

      {children}

      <Grid className=''>
         <Grid.Row className='disclaimer border-top-bold'>
            <Grid.Column computer={16} tablet={16} mobile={16} className=''>
               <span className='disclaimer-info'>DISCLAIMER: </span>
               This is a developers&apos; preview Wallet. It should be used for
               NEAR Protocol DevNet only. Learn more at{' '}
               <a href='http://nearprotocol.com'>nearprotocol.com</a>
            </Grid.Column>
         </Grid.Row>
      </Grid>
   </CustomContainer>
)

export default CreateAccountContainer
