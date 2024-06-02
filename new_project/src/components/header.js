import React from "react";
import image from "../img/1.jpeg";
import Button from './Button'

class Header extends React.Component {
    render() {
      return (
        <header className="header">{this.props.title}
        <Button text="Нажми на меня"/>
        <Button text="А на меня нажмёшь?" />
        <img src={image}></img>
        </header>
      )
    }
  }

export default Header