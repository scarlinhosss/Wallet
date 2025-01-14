import styled from "styled-components";

export const Container = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;

    p {
        margin: 0;
    }

    .date {
        color: #C6C6C6;
    }

    .description {
        width: 100%;
        text-align: start;
        padding: 0 10px
    }

    p:last-child {
        color: ${({ type }) => type === "income" ? "#03AC00" : "#C70000"};
    }  
`;