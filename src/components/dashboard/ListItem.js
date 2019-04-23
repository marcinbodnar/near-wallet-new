import React from 'react'

import { Link } from 'react-router-dom'

import { Grid, Image } from 'semantic-ui-react'

import styled from 'styled-components'

const CustomGridRow = styled(Grid.Row)`
   &&& {
      margin-left: 20px;
      border-left: 4px solid #f8f8f8;

      .col-image {
         margin-left: -33px;
         width: 40px;
         flex: 0 0 40px;
         padding-left: 0px;

         .main-image {
            border: 1px solid #e6e6e6;
            background: #fff;
            border-radius: 14px;
            padding: 5px;
            width: 26px;
            height: 26px;
            margin: 0 24px 0 18px;
            overflow: hidden;

            img {
               margin: 0 0 0 0;
            }
         }
      }
      .main-row-title {
         font-weight: 600;
         width: auto;
         padding-right: 0px;
         flex: 1;
      }
   }
`

const ListItem = ({ row }) => (
   <CustomGridRow verticalAlign='middle' className='border-bottom-light'>
      <Grid.Column computer={8}>
         <Grid verticalAlign='middle'>
            <Grid.Column className='col-image'>
               <div className='main-image'>
                  <Image src={row[0]} className='' align='left' />
               </div>
            </Grid.Column>
            <Grid.Column className='main-row-title'>
               <Link to='' className='color-black'>
                  {row[1]}
               </Link>
               {row[2] && (
                  <span className='font-small'>
                     <br />
                     <Link to=''>{row[2]}</Link>
                  </span>
               )}
            </Grid.Column>
         </Grid>
      </Grid.Column>
      <Grid.Column computer={8} textAlign='right'>
         <span className='font-small'>{row[3]}</span>
      </Grid.Column>
   </CustomGridRow>
)

export default ListItem
