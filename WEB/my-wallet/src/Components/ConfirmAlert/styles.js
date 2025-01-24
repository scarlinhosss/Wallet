import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    position: fixed;
    background-color: #8C11BE;
    color: white;

    .buttons {
        justify-content: end;
    }

    .yes, .cancel {
        cursor: pointer;
        width: 100px;
        background-color: red;
        border: 1px solid black;
    }
    .yes {
        background-color: green;
    }
    .cancel {
        background-color: red;
    }
`