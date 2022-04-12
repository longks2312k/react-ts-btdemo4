import { Switch } from "antd";
import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const ThemeBtn = () => {
  const { bgrColor, textColor, itemColor, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      // color="gray"
      defaultChecked
      onChange={toggleTheme.bind(
          this,
          bgrColor === '#f4f4f7' ? '#2e2e2e' : '#f4f4f7',
          textColor === 'white' ? '#121212' : 'white',
          itemColor === 'white' ? '#121212' : 'white'
        )
      }
    />
  );
};

export default ThemeBtn;
