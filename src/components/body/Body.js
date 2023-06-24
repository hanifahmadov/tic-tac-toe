/* eslint-disable */
import React from "react";
import "./body.scss";

export const Body = () => {
    return (
        <div id='body'>
            <div className='wrapper-table'>

                <table className='custom-table'>
                    <tr className='child1'>
                        <td id='zero'></td>
                        <td id='one'>X</td>
                        <td id='two'></td>
                    </tr>

                    <tr className='child2'>
                        <td id='three'>O</td>
                        <td id='four'></td>
                        <td id='five'></td>
                    </tr>

                    <tr className='child3'>
                        <td id='six'></td>
                        <td id='seven'></td>
                        <td id='eight'></td>
                    </tr>
                </table>

            </div>
        </div>
    );
};
