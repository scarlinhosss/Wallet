import { Link, useNavigate } from "react-router-dom";

import { Container, Header, NewTransactionButton, Transactions, TransactionTable } from "./styles";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Transaction from "../../Components/Transaction";
import Balance from "../../Components/Balance";
import { useState, useEffect, useContext } from "react";
import { getTransactions } from "../../services/transaction-service";
import UserContext from "../../contexts/UserContext";
import { logout } from "../../services/session-api";
import { saveOnLocalStorage } from "../../utils/context-utils";
import { formatToBRL } from "../../utils/valueHandler-utils";
import { toastOptions } from "../../utils/toastOptions-utils";
import { toast } from "react-toastify";

export default function Home() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState("");
    const [editing, setEditing] = useState(false);

    useEffect(() => {
       loadTransactions();
       // eslint-disable-next-line  
    }, []);

    async function loadTransactions() {
        try {
            const response = await getTransactions(userData.userId, userData.token);
            console.log(response.transactions)
            if(response) {
                setTransactions(response.transactions);
                console.log(response.transactions);
                setBalance(response.balance);
            }
        } catch(error) {
            toast.error(`${error.response.data}`, toastOptions);
        }
    }

    async function handleLogout() {
        const body = {
            id: userData.sessionId,
            email: userData.email,
            token: userData.token,
        };

        try {
            await logout(body, userData.token);
            
            setUserData({});
            saveOnLocalStorage("userData", {});

            navigate("/");
            toast.success("Logout realizado com sucesso", toastOptions)
        } catch(error) {
            toast.error(`${error.response.data}`, toastOptions);
        };
    }

    return (
        <Container>
            <Header>
                <h1>{`Olá, ${userData.name}`}</h1>
                <span>
                    <FaRegEdit onClick={() => setEditing(!editing)}/>
                    <RiLogoutBoxRLine onClick={handleLogout} />
                </span>
            </Header>
            <TransactionTable>
                {transactions.length === 0
                    ? (<p className="emptyText">Não há registros de entrada ou saída</p>)
                    : 
                    <Transactions>
                {transactions.map((transaction, index) =>(
                    <Transaction
                        key={index}
                        id={transaction.id}
                        date={transaction.date}
                        description={transaction.description}
                        value={formatToBRL(transaction.value)}
                        type={transaction.type}
                        loadTransactions={loadTransactions}
                        editing={editing}
                        />
                    ))}
                    </Transactions>}
                <Balance type={balance > 0 ? "income" : "expense"} value={formatToBRL(balance, balance > 0 ? "income" : "expense")} />

            </TransactionTable>

            <div className="buttons">
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