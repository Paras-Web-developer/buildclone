import React, { useState } from "react";
import Styled, { styled } from "styled-components";
import Phone from "../assist/images/phone.png";
import Scroller from "../component/Scroller";
import { NavLink, Outlet } from "react-router-dom";
import Citys from "./Citys";

export default function Main() {
  const [bath, setBath] = useState("bath");
  const [types, setTypes] = useState("types");

  const [show, setShow] = useState({
    Show: "Show",
    height: "195px",
  });

  const handleToggleClick = () => {
    setShow((prevState) => ({
      ...prevState,
      Show: prevState.Show === "Show" ? "Less" : "Show",
      height: prevState.height === "195px" ? "auto" : "195px",
    }));
  };
  const Wrapper = styled.section`
    header {
      background-color: #434242;
      padding: 10px 40px;
      h3 {
        color: white;
        text-align: center;
        font-weight: bold;
      }
    }
    .slider {
      display: flex;
      overflow: scroll;
      background-color: gray;
      a {
        border: 1px solid white;
        text-decoration: none;
        color: white;
        font-weight: bold;
        background-color: transparent;
        padding: 10px 30px;
      }
    }
  `;
  const MainWrapperr = styled.section`
    margin: 0;
    padding: 0;
    section {
      padding: 0 2px;
      .top {
        background-color: gray;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h1 {
          margin: 2rem 0 0.5rem 0;
          font-weight: 400;
          font-size: 1.5rem;
        }
        p {
          color: #3b3939;
          text-align: left;
          padding: 0.6rem 4px 1rem 10px;
          margin: 0;
          font-size: 0.9rem;
        }
        .number {
          display: flex;
          gap: 10px;
          margin-bottom: 1rem;
          div {
            display: flex;
            align-items: center;
            gap: 5px;
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .para1 {
        background-color: #3a5894;
        color: white;
        margin: 0;
        padding: 10px;
        font-size: 11px;
        text-align: center;
      }
      .para2 {
        background-color: gray;
        color: black;
        margin: 5px 0 0 0;
        padding: 10px;
        font-size: 11px;
        text-align: center;
      }
      .para3 {
        background-color: #3a5894;
        color: white;
        margin: 5px 0 0;
        padding: 10px;
        font-size: 1.1rem;
        text-align: center;
      }
      .why-Diffrent {
        overflow: hidden;
        .gray {
          padding: 5px 0;
          padding-left: 15px;
          margin: 0;
          color: #343a40;
          margin-bottom: 2px;
          background-color: gray;
          span {
            color: #3a5894;
            font-size: 20px;
            margin-right: 5px;
          }
        }
      }
      .show {
        margin: 0;
        padding: 5px;
        text-align: center;
        background-color: green;
        color: white;
        font-weight: bolder;
      }
    }
    .Bathroom {
      h1 {
        margin: 0;
        padding: 12px 0;
        background-color: #343a40;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
      }
      div {
        background-color: gray;
        padding: 20px 0;
        a {
          margin: 0 10px;
          font-weight: bolder;
          text-decoration: none;
          color: white;
          padding: 10px 20px;
          border-radius: 40px;
        }
        .bath {
          background-color: #343a40;
          color: white;
        }
        .types {
          background-color: white;
          color: #343a40;
        }
      }
    }
  `;
  return (
    <>
      <MainWrapperr>
        <section>
          <div className="top">
            <h1>Welcome To Interior Master</h1>
            <p>
              Small company, big results - that's what you can expect from our
              interior design services in Delhi NCR.
            </p>
            <div className="number">
              <div>
                <img src={Phone} alt="" />
                <h3>9582 113 575</h3>
              </div>
              <div>
                <img src={Phone} alt="" />
                <h3> 9911 774 383</h3>
              </div>
            </div>
          </div>
          <p className="para1">
            Rank #1 for noise-free interior design in Delhi NCR.
          </p>
          <p className="para2">
            We work closely to design your interior VISION in real life.
          </p>
          <h1 className="para3">Why We Are Different</h1>
          <div className="why-Diffrent" style={{ height: show.height }}>
            <p className="gray">
              {" "}
              <span>✔</span> Starting quotes Rs. 99,000.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Stable price - No price ups and downs.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Easy selection process with catalogues.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Provide product used certificate.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> First preference is always good brands.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Fixed Timelines.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Family owned business since 1997.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> 100% Personal Approach.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> We always suggest high-quality brands as the first
              option.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Welcome written agreement based work.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Warranty upto +10 years or brand based.
            </p>
            <p className="gray">
              {" "}
              <span>✔</span> Everything in Writing or mail.
            </p>
          </div>
          <p className="show" onClick={handleToggleClick}>
            {show.Show} More
          </p>
        </section>
        <Scroller />
        <section className="Bathroom">
          <h1>Bathroom</h1>
          <div>
            <NavLink
              to="/Bathroom"
              className={types}
              onClick={() => {
                setBath("bath");
                setTypes("types");
              }}
            >
              Bathroom
            </NavLink>
            <NavLink
              to="/types"
              className={bath}
              onClick={() => {
                setBath("types");
                setTypes("bath");
              }}
            >
              Types
            </NavLink>
          </div>
          <Outlet />
        </section>
      </MainWrapperr>
      <Wrapper>
        <header>
          <h3>Our Services are Successfully Provided in These Locations</h3>
        </header>
        <div className="slider">
          <NavLink to="/Noida">Noida</NavLink>
          <NavLink to="/Delhi">Delhi</NavLink>
          <NavLink to="/Gurugram">Gurugram</NavLink>
          <NavLink to="/Faridabad">Faridabad</NavLink>
          <NavLink to="/Mumbai">Mumbai</NavLink>
        </div>
      </Wrapper>
    </>
  );
}
