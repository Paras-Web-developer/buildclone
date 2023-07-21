import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const NavWrapper = styled.div`
    * {
      padding: 8px 13px;
    }
    section {
      position: sticky;
      top: 0;
      background-color: #bb3478;
      scroll-behavior: smooth;
      overflow: scroll;
      align-items: center;
      &::-webkit-scrollbar {
        display: none;
      }
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        gap: 2rem;
        align-items: center;
        a {
          text-decoration: none;
          color: white;
          border: 1px solid white;
          padding: 0.7rem 1rem;
        }
      }
    }
  `;
  return (
    <NavWrapper>
      <section>
        <ul>
          <a href="#Badroom">Badroom</a>
          <a href="#living">Livingroom</a>
          <a href="#kitchen">Kitchen</a>
          <a href="#Bathroom">Bathroom</a>
          <a href="">AboutUs</a>
          <a href="">ContactUs</a>
        </ul>
      </section>
    </NavWrapper>
  );
}
