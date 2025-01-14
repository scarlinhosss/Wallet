import styled from "styled-components";


export const Container = styled.div`
    height: 20px;
    width: 100%;

    span {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 23px;
        align-items: center;

        p {
            margin: 0;
        }

        p:first-child {
            width: 100%;
            text-align: start;
            padding: 0 10px;
            font-weight: 700;
            font-size: 17px;
            color: black;
        }

        p:last-child {
            color: ${({ type }) => type === "income" ? "#03AC00" : "#C70000"};
        }
    }
`;