import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import React from "react";

const Div = ({children}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div style={{theme}}>
            {React.Children.map(children, child => (
                <div style={theme}>{child}</div>
            ))}
        </div>
    )
};
export default Div;