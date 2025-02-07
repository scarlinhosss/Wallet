import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    padding: 20px;

    @media only screen and (min-width: 768px){
        max-width: 70%;
        padding: 20px;
        justify-content: space-between;
        margin: 0 auto;
    }

    @media only screen and (min-width: 1024px){
        max-width: 50%;
        padding: 20px;
        justify-content: space-between;
        margin: 0 auto;
    }

    h1 {
        color: white;
        font-size: 26px;
    };
    

    .buttons {
        display: flex;
        width: 100%;
        margin-top: 13px; 

        a {
            width: 100%;
            text-decoration: none;
        }

        a:first-child {
            margin-right: 7.5px;
        }

        a:last-child {
            margin-left: 7.5px;
        }

        p {
            margin: 0;
        }
    }
`
export const TransactionTable = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 23px 12px;
    max-width: 100%;
    justify-content: space-between;
    align-items: start;
    background-color: white;
    height: calc(100% - 177px);
    border-radius: 5px;
    text-align: center;
    color:rgb(100, 98, 98);
    .emptyText {
        width: 50%;
        align-self: center;
        margin: auto 0;
    }
`;

export const NewTransactionButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 114px;
    background-color: #A328D6; 
    color: white;
    border-radius: 5px;
    padding: 10px;

    p {
        display: flex;
        font-size: 17px;
        font-weight: 700;
        justify-content: start;
        max-width: 70px;
    }

    svg {
        height: 25px;
        width: 25px;
        color: white;
    }
`;

export const Header = styled.div`
    height: 50px;
    display: flex;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;

    svg {
        height: 25px;
        width:25px;
        color: white;
        cursor: pointer;
    }

    svg:first-child {
        margin-right: 10px;
    }

    h1 {
        margin: 0;
        color: white;
    }
`;

export const Transactions = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    overflow: auto;
`;