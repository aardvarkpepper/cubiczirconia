import { useContext , useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ThemeContext } from "../../contexts/ThemeContext";
import "./UserThemes.css";

const UserThemes = () => {

    const { user } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    const [localTheme, setLocalTheme] = useState({});

    useEffect(() => {
        setLocalTheme(
            {
                // backgroundColor: "blue",
                // color: "white",
                // borderColor: "green",
                // borderStyle: "solid",
                // borderWidth: "2px",
                // fontFamily: "Arial, sans-serif",
                // fontWeight: "",
                // fontSize: "16px",
                
                // backgroundColor: "",
                // color: "black",
                // fontFamily: "",
                // fontWeight: "",
                // fontSize: "",
                // borderColor: "",
                // borderStyle: "",
                // borderWidth: "",
                backgroundColor: 'PapayaWhip',
                color: 'DarkOrange',
                fontFamily: 'Georgia, serif',
                fontWeight: 'normal',
                fontSize: '16px',
                borderColor: 'SaddleBrown',
                borderStyle: 'solid',
                borderWidth: '2px',

            
            }
        )
    },[])

    /*
    color: textcolor
    fontfamily: arial, verdana, tahoma, Times New Roman
    Georgia, Garamond, Courier New
    Arial, sans-serif; if Arial not available, generic sans-serif used.
    #000000 reference works too (hexadecimal)
    */

    /*
    Set the fields I want.  Pull the ones I don't want out
    of the axios call with deconstruction.  Set the remainder
    to state.  Aggregate multiple axios calls.

    Find and replace all components like div with Div,
    as Bootstrap does.
    */


    return (
        <div className={`localUserThemes tc${localTheme.tintcolor} ac${localTheme.accentcolor} fc${localTheme.fontcolor}`}>
            <div>Front End UserThemes</div>
            <div className = "tcazure acaquamarine fcred">Test Sqeu</div>
            <div style={localTheme}>Hamster hamste rhasmer</div>
        </div>

    )
};
export default UserThemes;