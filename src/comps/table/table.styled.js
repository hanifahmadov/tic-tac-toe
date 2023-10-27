/* eslint-disable */
import styled from "styled-components";

export const Cell = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

    border: 3px solid rgb(25, 30, 81);
	color: rgb(28, 37, 104);
	font-weight: 600;

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


`;


export const CellsWr = styled.div`

    ${({theme}) => theme.setting.txt && 'margin-top: 5rem;'}
    ${({theme}) => theme.setting.fxf && 'margin-top: 1rem;'}

    ${({theme}) => theme.setting.txt && theme.device.phone && 'margin-top: 5rem;'}
    ${({theme}) => theme.setting.fxf && theme.device.phone && 'margin-top: 5rem;'}



`
