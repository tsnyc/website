import React from "react";
import Card from './Card'
import styled from 'styled-components'

export const Ul = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const makeList = (list) => {
    return list.map((item) => {
      return <li>
        <Card item={item}/>
      </li>
    })
  }

export default function CardList(props) {
  let list = props[Object.keys(props)[0]];
 
  return (
    <Ul>
        {makeList(list)}
    </Ul>
  )
}
