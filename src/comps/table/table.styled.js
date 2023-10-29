/* eslint-disable */
import styled from "styled-components";
import { ff } from "../utils/styled/globals.styled";

export const TableWr = styled.div`
	height: 100%;
	width: 100%;
	padding: 20px;

	// background: black;
	// border: 20px solid purple;
`;

export const TableContent = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	// background: rgba(255, 0, 0, 0.4);
	border: 2px solid red;


`;

export const CellsWr = styled.div`
	display: flex;
	width: ${({ theme }) => theme.setting.ff ? "550px" : '450px'};
	flex-wrap: wrap;
	border-radius: 1rem;

	pointer-events: auto;
	${({ theme }) => theme.current.gameover && " pointer-events: none;"}

	${({ theme }) =>
		theme.setting.tt &&
		`
        //: left border none
        #cell0,
        #cell3,
        #cell6 {
            border-left: none;
        }
        //: right border none
        #cell2,
        #cell5,
        #cell8 {
            border-right: none;
        }
    
        //: top border none
        #cell0,
        #cell1,
        #cell2 {
            border-top: none;
        }
    
        //: bottom border none
        #cell6,
        #cell7,
        #cell8 {
            border-bottom: none;
        }

		//:borders
		#cell0 {
			border-top-left-radius: 40px 40px;
		}

		#cell2 {
			border-top-right-radius: 40px 40px;
		}

		#cell6 {
			border-bottom-left-radius: 40px 40px;
		}

		#cell8 {
			border-bottom-right-radius: 40px 40px;
		}


        `}
	

	${({ theme }) =>
		theme.setting.ff &&
		`
        //: left border none
	    #cell0,
	    #cell5,
	    #cell10,
        #cell15,
        #cell20 {
		    border-left: none;
	    }

	    //: right border none
	    #cell4,
	    #cell9,
	    #cell14,
        #cell19,
        #cell24 {
	    	border-right: none;
	    }

	    //: top border none
        #cell0,
	    #cell1,
	    #cell2,
        #cell3,
        #cell4 {
	    	border-top: none;
	    }

	    //: bottom border none
	    #cell20,
	    #cell21,
	    #cell22,
        #cell23,
        #cell24 {
	    	border-bottom: none;
	    }

        `} 
        
        // background: silver;
`;

export const Cell = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;

	

	height: ${({ theme }) => theme.setting.ff ? "110px" : '150px'};
	width: ${({ theme }) => theme.setting.ff ? "110px" : '150px'};

	

    line-height: 0;

    font-size: 7rem;
    font-weight: 300;

	cursor: pointer;
    pointer-events: auto;


    
    

    border: 3px solid white;
	transition: background .2s ease-in-out;

	&:hover{
		background: #91bad4;
	}

	${({value}) => value != null && 'cursor: default;'}
	${(props) => props.theme.current.winPositions.includes(props["data-ind"]) && 'background: red;'}

	${({theme}) => console.log(theme, "theme in Cell")}
	// background: lightblue;
`;

/* 


${({ theme }) =>
		theme.setting.txt &&
		`
        width: 140px;
	    height: 140px;
        font-size: 5rem;
    
    `}

	${({ theme }) =>
		theme.setting.fxf &&
		`
	    width: 110px;
	    height: 100px;
        font-size: 5rem;

    `}

    ${({ theme }) =>
		theme.device.phone &&
		theme.setting.txt &&
		`
        width: 120px;
        height: 120px;
        font-size: 3.5rem;

    `} 


 ${({ theme }) =>
		theme.device.phone &&
		theme.setting.fxf &&
		`
    width: 75px;
    height: 75px;
    font-size: 3rem;
    border: 2px solid rgb(25, 30, 81);
    `}























    	${({ theme }) => theme.setting.txt && "margin-top: 5rem;"}
	${({ theme }) => theme.setting.fxf && "margin-top: 1rem;"}

    ${({ theme }) =>
		theme.setting.txt && theme.device.phone && "margin-top: 5rem;"}
    ${({ theme }) =>
		theme.setting.fxf && theme.device.phone && "margin-top: 5rem;"}

    pointer-events: auto;
	opacity: 1;

	${({ theme }) =>
		theme.setting.fxf && theme.setting.ai && "pointer-events: none;"}
	${({ theme }) => theme.setting.fxf && theme.setting.ai && "opacity: .1;"}


*/
