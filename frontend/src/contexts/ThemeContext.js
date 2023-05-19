import { createContext, useState } from 'react';

export const ThemeContext = createContext();

/*
Theme is many to one relationship with user
Each user has a "default" appended to their themes array.
*/
export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState({
        theme_id: 0,
        theme_name: "Default",
        theme_display_size: "Medium",
        theme_show_badges: true,
        theme_palette: "white",
        theme_font: "Arial",
        theme_text_color: "Black",
        theme_text_size: "Medium",
        theme_background: "None",
        user_id: 1,
    });

    const changeTheme = (themeData) => {
        setTheme(themeData);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}