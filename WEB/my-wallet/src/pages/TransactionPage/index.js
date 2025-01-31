
import { useContext ,useEffect,useState } from "react";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Header } from "./styles";
import { formatThousandToBRL } from "../../utils/valueHandler-utils";
/* import { postTransactions } from "../../services/transaction-service"; */
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions-utils";
import UserContext from "../../contexts/UserContext"
import { getTransactionById, postTransactions } from "../../services/transaction-service";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function TransactionPage() {
    const { userData } = useContext(UserContext);
    const { transactionId } = useParams();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(useLocation().search);
    const type = searchParams.get("type");
    const newTransaction = isNaN(transactionId);
    const [form, setForm] = useState({ value: "", description: "" });

    useEffect(() => {
        loadTransaction();
        // eslint-disable-next-line
    }, []);

    function handleChange({ name, value }) {

        setForm({ ...form, [name]: value });
    }

    async function loadTransaction() {
        if (newTransaction) return;

        try {
            const response = await getTransactionById(transactionId, userData.token);
            console.log(response.value);
            if(response) {
                setForm({ value: response.value, description: response.description });
            }

        } catch(error) {
            toast(`${error.response.data}`, toastOptions);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        const body = {
            ...form,
            value: parseFloat(form.value.replace("R$", "").replaceAll(".", "").replace(",", ".")),
            description: String(form.description),
            id: newTransaction ? 0 : parseInt(transactionId),
            type,
            userId: userData.userId,
        };

        try {
            await postTransactions(body, userData.token);
            toast.success("Transação realizada com sucesso", toastOptions)

            navigate(-1);
        } catch(error) {
            toast.error(`${error.response.data}`, toastOptions);
        };
    } 

    return (
        <Container>
            <Header>
                <h1>{`${newTransaction ? "Nova" : "Editar"} ${type === "income" ? "entrada" : "saída"}`}</h1>
                <Link to="/home">
                    <AiOutlinePlusCircle />
                </Link>
            </Header>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    id="value"
                    placeholder="Valor"
                    value={formatThousandToBRL(form.value)}
                    required
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: formatThousandToBRL(e.target.value),
                    })}
                />
                <Input
                    type="text"
                    id="description"
                    placeholder="Descrição"
                    value={form.description}
                    required
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                    />
                <Button value={`${newTransaction ? "Salvar" : "Atualizar"} ${type === "income" ? "entrada" : "saída"}`} />
            </form>
        </Container>
    );
}