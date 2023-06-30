/* eslint-disable */
import React from "react";
import "./table5.scss";
import { useRecoilState } from "recoil";
import { boardState5 } from "../../utils/store";

export const Table5 = () => {
    const [board, setBoard] = useRecoilState(boardState5);

    return (
        <div id='table5'>
            <div className='table5_content_wrapper'>
                <div
                    className='table5_content'
                >
                    {board.map((child, child_index) => (
                        <div id={"child" + child_index} key={child_index}>

                            {child.map((slot, slot_index) => (
                                
                                <div
                                    key={slot_index}
                                    id={'id_' + child_index + '_' + slot_index}
                                    data_index={child_index + '_' + slot_index}
                                >
                                    <span>{slot}</span>
                                </div>
                            ))}

                        </div>
                    ))}
                    
                    </div>
                </div>
        </div>
    );
};



{/* <div
id='eight'
className='8'
style={{
    background:
        currentState.winResultIndexes.includes(8)
            ? "#aaa"
            : "",
    borderBottomRightRadius: "50px",
}}
>
<span>{board[8]}</span>
</div> */}
