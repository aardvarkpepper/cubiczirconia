import { snakeCaseToTitleCase } from "../../utils/utils.js";

const UserDetails = ({userDetailsKeysArray, userDetails}) => {
    return (
        <div>
            <div>
                Front End UserDetails
            </div>
            <table>
                <tbody>
                    {userDetailsKeysArray.map((keyElement) => {
                        return (
                            <tr key={`users ${keyElement}`}>
                                <td>
                                    {snakeCaseToTitleCase(keyElement)}
                                </td>
                                <td>
                                    {userDetails[keyElement]}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};
export default UserDetails;