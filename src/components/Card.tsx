import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components'



export const FlexCard = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:space-around;
width:100%;
@media (min-width: 576px) {
  flex-direction: row;
}
`;
export const AvatarContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:space-around;
width:100%;
@media (min-width: 576px) {
  flex-direction: row;
  width:25%;
}
`;

export const Info = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
@media (min-width: 576px) {
  width:75%;
  align-items:flex-start;
}
`;

export const Avatar = styled.div`
background-image: url(${props => props.img || "http://i.stack.imgur.com/Dj7eP.jpg"};);
width: 100px;
height: 100px;
background-size: cover;
background-position: top center;
border-radius: 50%;
`;

const accessPropsContent = (props) => {
  let propsContent = props[Object.keys(props)[0]];
 return propsContent;
};

export default function Card(props) {
  let {title, subtitle, summary, twitterHandle, imageUrl} = accessPropsContent(props);

  return (
    <FlexCard>
      <AvatarContainer>
      <Avatar img={imageUrl}></Avatar>
      </AvatarContainer>
           
        <Info>
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="title">
            <p>{twitterHandle}</p>
          </div>
          <div className="subtitle">
            <p>{subtitle}</p>
          </div>
          <div className="summary">
            <p>{summary}</p>
          </div>
          </Info>
    </FlexCard>
  )
}
