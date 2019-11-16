import React from "react";
import styled, { createGlobalStyle, css } from 'styled-components';

export const StickerStyle = styled.div`
border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default function Announcement() {
  return (
    <StickerStyle>
        <div className="sticker-container">
            <div className="sticker-content">
                <p>Next Event: <br></br>Next Event</p>
                <p>Next Event</p>
            </div>
        </div>
    </StickerStyle>
  )
}
