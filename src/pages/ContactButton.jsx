import React from 'react';
import styled from 'styled-components';

const CButton = () => {
  return (
    <div>
        <StyledWrapper >
            <button>Contact Me
            </button>
        </StyledWrapper>

    </div>
  );
}

const StyledWrapper = styled.div`

  button {
   padding: 0.8em 1.8em;
   border: 2px solid yellow;
   position: relative;
   overflow: hidden;
   background-color: transparent;
   text-align: center;
   text-transform: uppercase;
   font-size: 16px;
   transition: .3s;
   z-index: 1;
   font-family: inherit;
   color: yellow;
   margin-left: -50px;
  }

  button::before {
   content: '';
   width: 0;
   height: 300%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) rotate(45deg);
   background: #17C3B2;
   transition: .5s ease;
   display: block;
   z-index: -1;
   background-color: yellow;
  }

  button:hover::before {
   width: 105%;
  }

  button:hover {
   color: #111;
  }`;

export default CButton;