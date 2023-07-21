import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import img1 from "../assist/images/1.webp";
import img2 from "../assist/images/2.webp";
import img3 from "../assist/images/3.webp";
import img4 from "../assist/images/4.webp";
import img5 from "../assist/images/5.webp";
import img6 from "../assist/images/6.webp";
import img7 from "../assist/images/7.webp";
import img8 from "../assist/images/8.webp";
import img9 from "../assist/images/9.webp";
import img10 from "../assist/images/10.webp";
export default function Bathroom() {
  const [show, setShow] = useState("0");
  console.log(show);
  const BathroomWrapper = styled.div`
    margin: 0 !important;
    padding: 0 !important;
    section {
      section {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .div .img {
        display: flex;
        overflow: scroll;
        width: 100%;
        height: 100%;
        padding: 0;
        scroll-behavior: smooth;
      }
      .div {
        height: 400px;
      }
      .div div img {
        width: 85%;
      }

      .div a {
        position: relative;
        color: gray;
        bottom: 70px;
        font-weight: bolder;
        left: 20%;
        font-size: 3rem;
        text-decoration: none;
        z-index: 1;
        margin: 5px !important;
        padding: 0 !important;
      }

      .div a:focus {
        color: blue;
      }
      .card {
        display: flex;
        overflow: scroll;
        padding: 0;
        background-color: white;
        a {
          margin: 2px;
          padding: 0;
          border-radius: none;

          img {
            width: 70px;
            height: 100px;

            &:focus {
              border: 2px solid red;
            }
          }
        }
      }
      .bottom {
        margin: 0 !important;
        padding: 10px 2px !important;
        text-align: center;
        color: white;
        line-height: 20px;
        letter-spacing: 2px;
      }
      .hide {
        background: #3a5894;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
        p {
          width: 200px;
        }
        button {
          padding: 0.5rem 1rem;
        }
      }
      .form {
        background-color: white;
        display: flex;
        flex-direction: column;
        line-height: 2rem;
        padding: 0 1px;
        overflow: hidden;
        input {
          padding: 7px 0;
        }
        .checks {
          background-color: white;
          display: grid;
          grid-template-columns: auto auto;
          padding: 10px;
          padding: 0;
          .check {
            padding: 5px 0;
            margin: 5px 0;
            background-color: white;
            display: flex;
          }
        }
        button {
          background-color: #3a5894;
          color: white;
          border: none;
          padding: 7px 0;
        }
      }
    }
  `;
  return (
    <>
      <BathroomWrapper>
        <section>
          <main class="div">
            <div class="img">
              <img src={img1} alt="" id="one" />
              <img src={img2} alt="" id="two" />
              <img src={img3} alt="" id="three" />
              <img src={img4} alt="" id="four" />
              <img src={img5} alt="" id="five" />
              <img src={img6} alt="" id="six" />
              <img src={img7} alt="" id="seven" />
              <img src={img8} alt="" id="eignt" />
              <img src={img9} alt="" id="nine" />
              <img src={img10} alt="" id="ten" />
            </div>
            <a href="#one">.</a>
            <a href="#two">.</a>
            <a href="#three">.</a>
            <a href="#four">.</a>
            <a href="#five">.</a>
            <a href="#six">.</a>
            <a href="#seven">.</a>
            <a href="#eignt">.</a>
            <a href="#nine">.</a>
            <a href="#ten">.</a>
          </main>
          <div className="card">
            <a href="#one">
              <img src={img1} alt="" id="one" />
            </a>
            <a href="#two">
              <img src={img2} alt="" id="two" />
            </a>
            <a href="#three">
              <img src={img3} alt="" id="three" />
            </a>
            <a href="#four">
              <img src={img4} alt="" id="four" />
            </a>
            <a href="#five">
              <img src={img5} alt="" id="five" />
            </a>
            <a href="#six">
              <img src={img6} alt="" id="six" />
            </a>
            <a href="#seven">
              <img src={img7} alt="" id="seven" />
            </a>
            <a href="#eight">
              <img src={img8} alt="" id="eight" />
            </a>
            <a href="#nine">
              <img src={img9} alt="" id="nine" />
            </a>
            <a href="#ten">
              <img src={img10} alt="" id="ten" />
            </a>
          </div>
          <div className="bottom">
            <h4>Know About Errors & Save Money</h4>
            <p>
              Before Start - Know about budget-friendly best quote, brand
              warranty & Book a Visit Today
            </p>
          </div>
          <div className="hide">
            <p>Book Home Visit & Get Budgets Estimates</p>
            <button
              onClick={() => setShow((show) => (show === "0" ? "auto" : "0"))}
            >
              Click me
            </button>
          </div>
          <form action="" className="form" style={{ height: show }}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" />
            <label htmlFor="">Content Number</label>
            <input type="text" placeholder="Contect number" />
            <label htmlFor="">Enquiry Type</label>
            <div className="checks">
              <div className="check">
                <input type="checkbox" name="" id="" />
                <h5>Price Estimate</h5>
              </div>
              <div className="check">
                <input type="checkbox" name="" id="" />
                <h5>A to Z Interior</h5>
              </div>
              <div className="check">
                <input type="checkbox" name="" id="" />
                <h5>Only Small Space</h5>
              </div>
              <div className="check">
                <input type="checkbox" name="" id="" />
                <h5> Others</h5>
              </div>
            </div>
            <button>Enquiry Now</button>
          </form>
        </section>
      </BathroomWrapper>
    </>
  );
}
