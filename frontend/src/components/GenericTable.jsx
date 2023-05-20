import { Link } from "react-router-dom";
import "./GenericTable.css";

const API = process.env.REACT_APP_API_URL;

const GenericTable = ({ tableData = [] }) => {

    const tableDataKeysArray = Object.keys(tableData[0]);

    const genericTableOutput = () => {
        if (tableData.length === 0) {
            return (
                <div>
                    <div>This table component requires particular arguments to be passed in from a parent element.</div>
                    <div>The table not rendering may be a result of the above not happening.</div>
                </div>
            )
        } else {
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                {tableDataKeysArray.map((element) => {
                                    return (
                                        <th>
                                            {element}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </table>

                </div>

            )
        }
        // if formType none
    }
    return (
        <div className="GenericTable">
            {genericTableOutput()}
        </div>
    )
};
export default GenericTable;