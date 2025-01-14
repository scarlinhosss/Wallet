import { Link } from "react-router-dom";

import { Container, Header, NewTransactionButton, Transactions, TransactionTable } from "./styles";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Transaction from "../../Components/Transaction";
import Balance from "../../Components/Balance";
import { useState } from "react";

export default function Home() {
    const [transactions, setTransactions] = useState([
        {date:"01/04",description:"Salário",value:"R$10000,00",type:"income"},
        {date:"07/04", description:"Almoço GutGut", value:"R$80,00", type:"expense"}, 
        {date:"08/04", description:"Almoço Nelson", value:"R$10,00", type:"expense"}
    ]);

    return (
        <Container>
            <Header>
                <h1>Olá, Fulano</h1>
                <RiLogoutBoxRLine />
            </Header>
            <TransactionTable>
                {transactions.length === 0
                    ? (<p class="emptyText">Não há registros de entrada ou saída</p>)
                    : 
                    <Transactions>
                {transactions.map((transaction, index) =>(
                    <Transaction
                        date={transaction.date}
                        description={transaction.description}
                        value={transaction.value}
                        type={transaction.type}
                    />
                ))}
                    </Transactions>}
                <Balance type="income" value="R$9.986,00" />

            </TransactionTable>

            <div class="buttons">
                <Link to="/transaction/novo?type=income">
                    <NewTransactionButton>
                        <AiOutlinePlusCircle />
                        <p>Nova entrada</p>
                    </NewTransactionButton>
                </Link>

                <Link to="/transaction/novo?type=expense">
                    <NewTransactionButton>
                        <AiOutlineMinusCircle />
                        <p>Nova saída</p>
                    </NewTransactionButton>
                </Link>
            </div>
        </Container>
    )
}