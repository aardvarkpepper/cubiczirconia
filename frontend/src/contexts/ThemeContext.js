import { createContext, useState } from 'react';
export const ThemeContext = createContext();

/*
Theme is many to one relationship with user
Each user has a "default" appended to their themes array.
*/
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        background_color: "transparent",
        color: "black",
        font_family: "Arial, sans-serif",
        font_weight: "",
        font_size: "14px",
        border_color: "transparent",
        border_style: "",
        border_width: ""
    });

    const changeTheme = (themeData) => {
        setTheme(themeData);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}