import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    color:black;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    border: none;
    padding: 0 10px;
`;

export const Container = styled.div`
    position: relative;
    margin-top: 10px;
    svg {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 20px;
        top: calc(50% - 12px);
        cursor: pointer;
    }
`