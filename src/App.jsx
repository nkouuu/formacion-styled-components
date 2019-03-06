import React, { Component } from "react";
import logo from "./logo-react.svg";
import profile from "./profile.png";
import "./App.css";

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

class App extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <img src={logo} className="logo" />
          <div className="search">
            <input
              className="search-input"
              placeholder="Introduzca su búsqueda"
            />
            <button className="search-button">Buscar</button>
          </div>
          <div className="profile">
            <img src={profile} className="profile-pic" />
            <ul className="profile-options">
              {profileOptions.map(e => (
                <li className="profile-options-item">{e}</li>
              ))}
            </ul>
          </div>
        </header>
        <div className="container">
          <h2 className="title">To Dos</h2>
          <ul className="todo-list">
            {todos.map(e => (
              <li className="todo-item">
                <p className="todo-item-title">{e.title}</p>
                <p className="todo-item-description">{e.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
