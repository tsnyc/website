import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components'


export const FlexCard = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
`;


export default function Card(props) {
  console.log(props)
  return (
    <FlexCard>
           <div className="avatar">photo</div>
        <div className="info">
          <div className="title">
            <p>{props.organizer.name}</p>
          </div>
          <div className="subtitle">
            <p>{props.organizer.title}</p>
          </div>
          <div className="caption">
            <p>{props.organizer.occupation}</p>
          </div>
          <div className="summary">
            <p>{props.organizer.summary}</p>
          </div>
        </div>
        <div className="twitter-icon">tweet</div>
    </FlexCard>
  )
}
