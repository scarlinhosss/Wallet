import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    background-color: #8C11BE;
    color: white;
    border-radius: 13px;
    z-index: 1;
    border: 1px solid black;

    .buttons {
        justify-content: end;
    }

    .delete, .cancel {
        cursor: pointer;
        width: 85px;
        border: 1px solid grey;
        margin-bottom: 10px;
        margin-right: 10px;
        border-radius: 5px;
    }
    .delete {
        background-color:rgb(210, 0, 0);
        margin-right: 10px;
    }
    .cancel {
        background-color: #A328D6;
        
    }
    p {
        margin-left: 7px;
    }
`