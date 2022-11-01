import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 30px 40px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;

export const Title = styled.h1`
 margin: 20px;
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  margin-left: 24px;
  padding: 5px;
  border: 0;
  top: 70px;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: #fff;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: #00bcd4de;
    border-radius: 4px;
    box-shadow: 0px 2px 4px -1px 
        rgb(0 0 0 / 20%), 0px 4px 5px 0px 
        rgb(0 0 0 / 14%), 0px 1px 10px 0px 
        rgb(0 0 0 / 12%);
  }  
`;