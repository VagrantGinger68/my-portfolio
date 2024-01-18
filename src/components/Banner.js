import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 50px;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <img src="path/to/your/image.jpg" alt="Your Name" />
      <h1>Your Name</h1>
      <p>Web Developer</p>
    </BannerContainer>
  );
};

export default Banner;
