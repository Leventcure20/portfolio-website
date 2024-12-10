import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <StyledWrapper>
      <div className="card" style={{backgroundImage: `url(${props.photo})`}}>
        <button className="card-button">{props.text}</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 200px;
    height: 250px;
    border-radius: 20px;
    background-size: contain; /* Ensures the image fits properly */
    background-repeat: no-repeat; /* Prevents tiling */
    background-position: center; /* Centers the image */
    background-color: #f5f5f5; /* Fallback color */
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .card-button {
    width: 100px;
    height: 40px;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.5rem;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for better visibility */
    transition: all 0.3s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: auto;
  }

  .card-button:hover {
    background-color: #006bbd; /* Darker blue for hover effect */
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }

  /* Card hover effect */
  .card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }`;

export default Card;
