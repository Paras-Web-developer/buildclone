import React from "react";
import { styled } from "styled-components";

export default function Types() {
  const Wrapper = styled.section`
  h3{
    text-align: center;
    padding: 10px 0;
    margin: 0;
    color: white;
    background-color: #3a5894 !important;
    font-weight: bolder;

  }
  p{
    background-color: #eaeaea;
    margin: 1px 0;
    padding: 10px 0;
  }
  `;
  return (
    <>
      <Wrapper>
      <h3>Different ways to renovate your bathroom</h3>
        <p>→ Contemporary Bathrooms</p>
        <p>→ Shabby Chic Bathroom Designs</p>
        <p>→ Traditional Bathroom Designs</p>
        <p>→ European Bathroom Design Ideas</p>
        <p>→ Tuscan Bathroom Design Ideas</p>
        <p>→ Mediterranean-Style Bathroom Design</p>
        <p>→ French Country Bathroom Design</p>
        <p>→ Southwestern Bathroom Design and Decor</p>
        <p>→ Country Western Bathroom Decor</p>
        <p>→ Victorian Bathroom Design Ideas</p>
        <p>→ Beach and Nautical Themed Bathrooms</p>
        <p>→ Eclectic Bathroom Design Ideas</p>
        <p>→ Mid Century Modern Bathrooms</p>
        <p>→ Japanese-Style Bathrooms</p>
        <p>→ Arts and Crafts Bathrooms</p>
        <p>→ Spanish-Style Bathrooms</p>
        <p>→ Transitional Bathrooms</p>
        <p>→ Colonial Bathrooms</p>
      </Wrapper>
    </>
  );
}
