import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Div from "../../styledComponents/Div.jsx";

const API = process.env.REACT_APP_API_URL;

const UserThemes = () => {

    const [themesArray, setThemesArray] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/themes/user/${id}`)
        .then((response) => {
            setThemesArray(response.data)
        })
        .catch((e) => console.warn("catch", e));
    },[id]);

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

    const handleClick = () => {

    }


    return (
        <div>
            <div>Front End UserThemes</div>
            <Div>
                <div>
                    This component's styling depends on the "theme" state in src-contexts-ThemeContext.
                </div>
                <div>
                    Multiple divs inside the div should render appropriately.
                </div>

                <div>
                    <div>
                        <div>
                            Child components are also affected by styling.
                        </div>
                    </div>
                </div>
            </Div>
            {themesArray.map((themeObject) => {
                return (
                    <div></div>
                )
            })}
        </div>

    )
};
export default UserThemes;