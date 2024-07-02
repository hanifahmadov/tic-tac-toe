/* eslint-disable */
import styled from "styled-components";
import { ff, clr, bg } from "../utils/styled/globals.styled";

export const TableWr = styled.div`
	height: 100%;
	width: 100%;
	padding: ${({ theme }) => (theme.device.phone ? "10px" : "20px")};
`;

export const TableContent = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 2rem;



`;

export const CellsWr = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	// width: 500px;
	// width: ${({ theme }) => theme.device.phone && "100%"};

	flex-wrap: wrap;
	border-radius: ${({ theme }) => (theme.device.phone ? "20px 20px" : "50px 50px")};

	pointer-events: auto;

	${({ theme }) =>
		theme.current.gameover &&
		` 
	 	pointer-events: none; 
		opacity: 0.6;

		`}

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
			border-top-left-radius: 50px 50px;
		}

		#cell2 {
			border-top-right-radius: 50px 50px;
		}

		#cell6 {
			border-bottom-left-radius: 50px 50px;
		}

		#cell8 {
			border-bottom-right-radius: 50px 50px;
		}


        `}





	${({ theme }) =>
		theme.device.phone &&
		theme.setting.tt &&
		`
	
	//:borders
		#cell0 {
			border-top-left-radius: 20px 20px;
		}

		#cell2 {
			border-top-right-radius: 20px 20px;
		}

		#cell6 {
			border-bottom-left-radius: 20px 20px;
		}

		#cell8 {
			border-bottom-right-radius: 20px 20px;
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


`;

export const Cell = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;


	height: ${({ theme }) => theme.device.phone ? '90px' : '140px'};
	width: ${({ theme }) => theme.device.phone ? '90px' : '140px'};
	font-size: ${({ theme }) => (theme.device.phone ? "4rem" : "5rem")};


	cursor: pointer;
	pointer-events: auto;
	background: transparent;

	border: 2px solid white;

	transition: background 0.25s ease-in-out;
	color: #394d8f;
	font-weight: 900 !important;
	font-family:${({theme}) => theme.setting.lang};

	${({ theme }) =>
		!theme.current.gameover &&
		`
	
		&:hover {
			background: rgba(255, 255, 255, .5);
		}
	
	`}

	${({ value }) => value != null && "cursor: default;"}
	${(props) => props.theme.current.winPositions.includes(props["data-ind"]) && "background: #ff7979;"} 

	${({ theme }) => theme.current.gameover && "pointer-events: none;"};
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
