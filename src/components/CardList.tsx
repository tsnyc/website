import React from "react";
import Card from './Card'
import styled from 'styled-components'

export const Ul = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const makeList = (array) => {
    return array.map((item) => {
      return <li>
        <Card item={item}/>
      </li>
    })
  }

export default function CardList(props) {
  return (
    <Ul>
        {makeList(props.organizers)}
    </Ul>
  )
}
