import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { ThemeContext } from '../../contexts/ThemeContext';
import Div from "../../styledComponents/Div.jsx";
import "./UserThemes.css";

const API = process.env.REACT_APP_API_URL;

const UserThemes = () => {

    const [themesArray, setThemesArray] = useState([]);
    const { theme, changeTheme, defaultTheme } = useContext(ThemeContext);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/themes/user/${id}`)
            .then((response) => {
                setThemesArray(response.data)
            })
            .catch((e) => console.warn("catch", e));
    }, [id]);

    /*
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

       theme_id SERIAL PRIMARY KEY,
    theme_name VARCHAR(40) NOT NULL,
    theme_show_badges BOOLEAN NOT NULL,

    background_color VARCHAR(20) DEFAULT 'transparent',
    color VARCHAR(20) DEFAULT 'black',
    font_family VARCHAR(40) DEFAULT 'Arial, sans-serif',
    font_weight VARCHAR(20) DEFAULT 'normal',
    font_size VARCHAR(20) DEFAULT '14px',
    border_color VARCHAR(20) DEFAULT 'transparent',
    border_style VARCHAR(20) DEFAULT 'none',
    border_width VARCHAR(20) DEFAULT '0',

    user_id INT NOT NULL,

    */

    const handleClick = (updatingThemeObject) => {
        const reformattedObject = {
            backgroundColor: updatingThemeObject.background_color,
            color: updatingThemeObject.color,
            fontFamily: updatingThemeObject.font_family,
            fontWeight: updatingThemeObject.font_weight,
            fontSize: updatingThemeObject.font_size,
            borderColor: updatingThemeObject.border_color,
            borderStyle: updatingThemeObject.border_style,
            borderWidth: updatingThemeObject.border_width,
        };
        changeTheme(reformattedObject);
    };

    return (
        <div>
            <div>Front End UserThemes</div>
            {/* <div className="box">Box style</div> */}
            <div style={theme} className="box">This component's in-line styling depends on "theme" state in src-contexts-ThemeContext. </div>
            <Div className="box">
                <div>
                    This component's component-based styling also depends on "theme" state, through src-styledComponents-Div.jsx.
                </div>
                <div>
                    <div>
                        <div>
                            Child components are also affected by styling.
                        </div>
                    </div>
                </div>
            </Div>
            <div>
                <span>Switch to default theme:</span>
                <button onClick={defaultTheme}>Click</button>
            </div>
            {themesArray.map((themeObject) => {
                return (
                    <div>
                        <span>Switch to {themeObject.theme_name}:</span>
                        <button onClick={() => handleClick(themeObject)}>Click</button>
                        {/* <div>
                            {JSON.stringify(themeObject)}
                        </div> */}
                    </div>
                )
            })}

        </div>
    )
};
export default UserThemes;