import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  font-family: "Roboto", sans-serif;
`;
export const Header = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #194dac;
`;

//Crear una animacion
const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

//Inyectando props
export const Logo = styled.img.attrs(props => ({ gira: true}))`
  width: 100px;
  animation: ${props => props.gira && logoSpin} 2s linear infinite;
`;
export const Search = styled.div`
  background: white;
  padding: 5px;
  border-radius: 5px;
  > * {
    padding: 10px;
    border: none;
  }
`;
export const SearchInput = styled.input`
  outline: none;
  font-size: 15px;
`;
export const SearchButton = styled.button`
  border-radius: 5px;
  color: white;
  background: rgb(243, 38, 38);
`;
export const Profile = styled.div`
  position: relative;
`;

export const ProfileOptions = styled.ul`
  display: none;
  position: absolute;
  width: 150px;
  left: calc(100% - 140px);
  top: calc(100% - 15px);
  background: rgb(201, 196, 196);
  list-style: none;
  padding: 10px 0;
  text-align: center;
  border-radius: 5px;
  ${Profile}:hover & {
    display: block;
  }
`;
export const ProfileOptionsItem = styled.li`
  color: white;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: rgb(145, 180, 221);
  }
`;
export const ProfilePic = styled.img`
  width: 50px;
  border: none;
  border-radius: 50%;
`;

export const Container = styled.div`
  padding: 40px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const TodoList = styled.ul`
  display: flex;
  list-style: none;
`;
export const TodoItem = styled.li`
  padding: 10px;
  margin: 10px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
export const TodoItemTitle = styled.p`
  font-weight: bold;
  color: #2467cf;
`;
