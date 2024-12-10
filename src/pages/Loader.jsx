import React from 'react';
import styled from 'styled-components';

const Loader = () => {
      return (
        <StyledWrapper>
          <div className="spinner" />
        </StyledWrapper>
      );
    }
  
   

const StyledWrapper = styled.div`

display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: 100vh; /* Full screen height */
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,79,119,1) 0%, rgba(0,212,255,1) 100%);
  color: white;
  .spinner {
   --size: 30px;
   --first-block-clr: #005bba;
   --second-block-clr: #fed500;
   --clr: #111;
   width: 100px;
   height: 100px;
   position: relative;
  }

  .spinner::after,.spinner::before {
   box-sizing: border-box;
   position: absolute;
   content: "";
   width: var(--size);
   height: var(--size);
   top: 50%;
   animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
   left: 50%;
   background: var(--first-block-clr);
  }

  .spinner::after {
   background: var(--second-block-clr);
   top: calc(50% - var(--size));
   left: calc(50% - var(--size));
   animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  @keyframes down {
   0%, 100% {
    transform: none;
   }

   25% {
    transform: translateX(100%);
   }

   50% {
    transform: translateX(100%) translateY(100%);
   }

   75% {
    transform: translateY(100%);
   }
  }

  @keyframes up {
   0%, 100% {
    transform: none;
   }

   25% {
    transform: translateX(-100%);
   }

   50% {
    transform: translateX(-100%) translateY(-100%);
   }

   75% {
    transform: translateY(-100%);
   }
  }`;

export default Loader;
