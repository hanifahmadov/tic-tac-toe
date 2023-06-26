/* eslint-disable */
import React from "react";
import "./settings.scss";
import { useRecoilState } from "recoil";
import { movesState } from "../utils/store";

// import friendly from "../../shared/happy-robot.png";
// import challenge from "../../shared/smart-robot.png";



export const Settings = () => {

    const [moves, setMoves] = useRecoilState(movesState)

    const challenge = 'https://icongr.am/feather/frown.svg?size=30&color=ffffff'
    const friendly = 'https://icongr.am/feather/smile.svg?size=30&color=ffffff'

    const handleClick = (e) => {
        let id = Number(e.target.className)

        if(id == 1){

            setMoves(
                {
                    hu: {
                        value: "X",
                        moves: [...moves.hu.moves],
                        turn: true,
                    },
                
                    ai: {
                        value: "O",
                        moves: [...moves.ai.moves],
                        turn: false,
                    },
                }
            )

            
        } else if( id == 0){
            setMoves(
                {
                    hu: {
                        value: "X",
                        moves: [...moves.hu.moves],
                        turn: false,
                    },
                
                    ai: {
                        value: "O",
                        moves: [...moves.ai.moves],
                        turn: true,
                    },
                }
            )
        }
    }

    return (
        <div id='subheader'>
            {/* <div className='wrapper-robots'>
                <div className='wrapper-friendly'>
                    <span>
                        <img className='img-friendly' src={friendly} />
                    </span>
                </div>

                <div className='challange'>
                    <span>
                        <img className='img-friendly' src={challenge} />
                    </span>
                </div>
            </div> */}

            <div className="choose-player" onClick={(e) => handleClick(e)}>
                <h3>Choose Player</h3>

                <span id="1">X</span>
                <span id="0">O</span>
            </div>
        </div>
    );
};
