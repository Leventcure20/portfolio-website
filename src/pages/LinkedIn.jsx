import React from 'react';
import styled from 'styled-components';

const LinkedIn = () => {
  return (
    <StyledWrapper>
      <div>
        <button className="button">
          <a href="https://www.linkedin.com/in/levent-cure" className="no-link-style">
            <svg viewBox="55.005 23.8289 333.061 333.0491" width={65} height={65} xmlns="http://www.w3.org/2000/svg">
              <path id="Path_2520" data-name="Path 2520" d="M 338.789 307.609 L 289.44 307.609 L 289.44 230.326 C 289.44 211.898 289.111 188.174 263.773 188.174 C 238.07 188.174 234.138 208.253 234.138 228.985 L 234.138 307.604 L 184.788 307.604 L 184.788 148.679 L 232.164 148.679 L 232.164 170.398 L 232.827 170.398 C 242.491 153.881 260.452 144.017 279.57 144.726 C 329.587 144.726 338.809 177.626 338.809 220.426 L 338.789 307.609 Z M 129.106 126.955 C 107.063 126.96 93.281 103.098 104.298 84.006 C 115.319 64.909 142.877 64.909 153.904 83.996 C 156.418 88.35 157.739 93.29 157.739 98.312 C 157.744 114.13 144.923 126.955 129.106 126.955 M 153.781 307.609 L 104.38 307.609 L 104.38 148.679 L 153.781 148.679 L 153.781 307.609 Z M 363.391 23.851 L 79.582 23.851 C 66.17 23.702 55.169 34.446 55.005 47.858 L 55.005 332.844 C 55.164 346.266 66.165 357.02 79.582 356.876 L 363.391 356.876 C 376.839 357.046 387.881 346.292 388.066 332.844 L 388.066 47.837 C 387.876 34.4 376.834 23.656 363.391 23.831" fill="#0b65c2" style={{}} transform="matrix(1, 0, 0, 1, -7.105427357601002e-15, -3.552713678800501e-15)" />
            </svg>
          </a></button><br />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    background-color: #ffffff;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    animation: sway 2s infinite alternate;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
    transition: transform 0.5s, box-shadow 0.5s;
  }

  .button:hover {
    transform: scale(1.5) rotate(-360deg) translateY(-1em);
    box-shadow: 0 0 20px 0 rgba(29, 161, 242, 0.5);
  }

  .icon {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6));
    transition: transform 0.5s;
  }

  .icon:hover {
    transform: scale(8);
    filter: drop-shadow(1px 2px 4px rgba(0,0,0,0.9))
  }`;

export default LinkedIn;

