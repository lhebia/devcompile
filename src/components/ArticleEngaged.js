import React from 'react';
import styled from '@emotion/styled';

const EngagedDiv = styled.div`
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 100;
  background-color: #f53d14;
  color: white;
  border-radius: 5px;
  padding: 0.5rem 5rem;
  box-shadow: 10px 10px 22px -10px rgba(0, 0, 0, 0.49);
  transition: all 1s ease;
`;

export default function ArticleEngaged(props) {
    return (
        <EngagedDiv>
            <p>Article {props.action}</p>
        </EngagedDiv>
    )
}
