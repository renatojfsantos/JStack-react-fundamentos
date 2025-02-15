import React, { useContext } from "react";
import PropTypes from 'prop-types'

import { ThemeContext } from "./ThemeContext";
import Button from "./Button";
export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return(
    <div
      style={{
        background: "#CCC",
        fontFamily: 'sans-serif',
      }}
    >
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  title: `JStack's Blog`,
}