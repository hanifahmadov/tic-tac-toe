/* eslint-disable */
import styled from "styled-components";
import { ff, clr, bg } from "../shared/globals.styled";

export const NavWr = styled.div`


    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0rem 2rem;
    ${({theme}) => theme.device.phone && ` padding: 0rem 1rem;`}

    height: 5rem;


    background: ${bg.unk02};
    font-family: ${ff.unicaone};
    font-size: 3rem;
    ${({theme}) => theme.device.phone && `font-size: 2.25rem;`}
    font-weight: 900 !important;
    color: black;
`;
