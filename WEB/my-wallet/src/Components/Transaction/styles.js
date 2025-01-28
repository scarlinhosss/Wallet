import styled from "styled-components";

export const Container = styled.span`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    z-index: 0;
    cursor: ${({ editing }) => editing ? "pointer" : "default"};

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

    .value {
        color: ${({ type }) => type === "income" ? "#03AC00" : "#C70000"};
    }

    svg {
        position: relative;
        height: 15px;
        width: 15px;
        min-height: 15px;
        min-width: 15px;
        margin-left: 5px;
        color: black;
        cursor: pointer;
        z-index: 1;
    }
`;