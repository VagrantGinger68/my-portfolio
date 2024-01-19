import React from 'react';
import styled from 'styled-components';
import RyanPic from '../images/IMG_6994-2.jpg';

const BannerContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 50px;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <img src={RyanPic} style={{borderRadius: '50%', width: '25%'}} alt='Ryan Schelhaas'/>
      <h1>Ryan Schelhaas</h1>
      <p>Web Developer</p>
    </BannerContainer>
  );
};

export default Banner;
