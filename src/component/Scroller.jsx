import React from "react";
import { styled } from "styled-components";
import bathroom from "../assist/images/bathroom.webp";
import bedroom from "../assist/images/bedroom.jpg";
import kitchen from "../assist/images/kitchen.webp";
import living from "../assist/images/living-room.jpg";

export default function Scroller() {
  const ContentWrapper = styled.section`
    section {
      h1 {
        margin: 2px 0 1px 0;
        text-align: center;
        background-color: #212529;
        color: white;
        font-weight: bolder;
        padding: 1rem;
      }
      .scroller {

        display: flex;
        overflow: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
        img {
          width: 330px;
        }
        .one h2 {
          text-align: center;
        }
      }
    }
  `;
  return (
    <ContentWrapper>
      <section>
        <h1>Complete Interior Solution</h1>
        <div className="scroller">
          <div className="one" id="Badroom">
            <img src={bedroom} alt="" />
            <h2>bedroom</h2>
          </div>
          <div className="one">
            <img src={bathroom} alt="" id="Bathroom" />
            <h2>bathroom</h2>
          </div>
          <div className="one">
            <img src={kitchen} alt="" id="kitchen" />
            <h2>kitchen</h2>
          </div>
          <div className="one">
            <img src={living} alt="" id="living" />
            <h2>living-room</h2>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
}
