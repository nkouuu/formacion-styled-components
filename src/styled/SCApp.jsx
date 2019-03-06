import React, { Component } from "react";
import logo from "../logo-react.svg";
import profile from "../profile.png";
import {
  Main,
  Header,
  Logo,
  Search,
  SearchInput,
  SearchButton,
  Profile,
  ProfileOptions,
  ProfileOptionsItem,
  ProfilePic,
  Container,
  Title,
  TodoList,
  TodoItem,
  TodoItemTitle
} from "./styles";

const profileOptions = ["Perfil", "ToDos", "Desconectar"];
const todos = [
  {
    title: "Suspendisse id nulla in libero aliquet molestie ac in ante.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non leo sit amet turpis scelerisque fermentum sit amet a purus. Phasellus dictum malesuada enim, sit amet tristique est sodales maximus. Mauris quis placerat augue. Morbi a elit malesuada, vestibulum eros eget, sagittis libero. Nulla feugiat ex vitae auctor rhoncus. Sed eget sapien vestibulum, rutrum erat quis, viverra nulla. Aenean rutrum blandit nunc, in faucibus ligula tincidunt in. Donec convallis suscipit velit, id pretium tortor pellentesque vitae."
  },
  {
    title:
      "Nam sollicitudin nibh et dui facilisis, eu accumsan metus pharetra.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non leo sit amet turpis scelerisque fermentum sit amet a purus. Phasellus dictum malesuada enim, sit amet tristique est sodales maximus. Mauris quis placerat augue. Morbi a elit malesuada, vestibulum eros eget, sagittis libero. Nulla feugiat ex vitae auctor rhoncus. Sed eget sapien vestibulum, rutrum erat quis, viverra nulla. Aenean rutrum blandit nunc, in faucibus ligula tincidunt in. Donec convallis suscipit velit, id pretium tortor pellentesque vitae."
  },
  {
    title: "Curabitur vitae dolor interdum, bibendum dolor at, gravida sapien.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non leo sit amet turpis scelerisque fermentum sit amet a purus. Phasellus dictum malesuada enim, sit amet tristique est sodales maximus. Mauris quis placerat augue. Morbi a elit malesuada, vestibulum eros eget, sagittis libero. Nulla feugiat ex vitae auctor rhoncus. Sed eget sapien vestibulum, rutrum erat quis, viverra nulla. Aenean rutrum blandit nunc, in faucibus ligula tincidunt in. Donec convallis suscipit velit, id pretium tortor pellentesque vitae."
  }
];

class SCApp extends Component {
  render() {
    return (
      <Main>
        <Header>
          <Logo src={logo} gira />
          <Search>
            <SearchInput placeholder="Introduzca su búsqueda" />
            <SearchButton>Buscar</SearchButton>
          </Search>
          <Profile>
            <ProfilePic src={profile} />
            <ProfileOptions>
              {profileOptions.map(e => (
                <ProfileOptionsItem>{e}</ProfileOptionsItem>
              ))}
            </ProfileOptions>
          </Profile>
        </Header>
        <Container>
          <Title>To Dos</Title>
          <TodoList>
            {todos.map(e => (
              <TodoItem>
                <TodoItemTitle>{e.title}</TodoItemTitle>
                <p className="todo-item-description">{e.description}</p>
              </TodoItem>
            ))}
          </TodoList>
        </Container>
      </Main>
    );
  }
}

export default SCApp;
