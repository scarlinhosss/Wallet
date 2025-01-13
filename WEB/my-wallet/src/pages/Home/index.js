import { Container } from "./styles";
import logo from "../icons/logOut.svg"
export default function Home() {
    return (
        <Container>
            <div class="topPage">
                <h1>Olá, Fulano</h1>
                <img src="../" alt="logout icon" class="icon"/>
            </div>
            <div class="transactionTable">
                <div class="transactions">
                    <span class="transaction">
                        <p class="date">01/03</p>
                        <p class="description">Salário Meguel</p>
                        <p class="income">R$10.000,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">08/04</p>
                        <p class="description">Almoço Nelson</p>
                        <p class="expense">R$10,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                    <span class="transaction">
                        <p class="date">04/04</p>
                        <p class="description">Janta Meguel após campeonato de karatê</p>
                        <p class="expense">R$4,00</p>
                    </span>
                </div>
            <div class="balance">
                <span class="transaction">
                    <p class="boldBalance">Saldo</p>
                    <p class="income">R$9.986,00</p>
                </span>
            </div>

            </div>
            <div class="buttons">
                <a href="newIncome.html">
                    <div class="newTransactionButton">
                        <div class="transactionIcon">+</div>
                        <p>Nova<br/>Entrada</p>
                    </div>
                </a>
                <a href="newExpense.html">
                    <div class="newTransactionButton">
                        <div class="transactionIcon">-</div>
                        <p>Nova<br/>saída</p>
                    </div>
                </a>
            </div>
        </Container>
    )
}