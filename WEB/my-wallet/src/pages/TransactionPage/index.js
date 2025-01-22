
import { useContext ,useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./styles";
import { formatToBRL } from "../../utils/valueHandler-utils";
/* import { postTransactions } from "../../services/transaction-service"; */
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions-utils";
import UserContext from "../../contexts/UserContext"
import { postTransactions } from "../../services/transaction-service";

export default function TransactionPage() {
    const { userData } = useContext(UserContext);
    const { transactionId } = useParams();
    const searchParams = new URLSearchParams(useLocation().search);
    const type = searchParams.get("type");
    const newTransaction = isNaN(transactionId);
    const [form, setForm] = useState({ value: "", description: "" });

    function handleChange({ name, value }) {

        setForm({ ...form, [name]: value });
    }

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        const body = {
            ...form,
            value: Number(form.value.replace("R$", "").replace(",", ".")),
            id: newTransaction ? 0 : transactionId,
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
            <h1>{`${newTransaction ? "Nova" : "Editar"} ${type === "income" ? "entrada" : "saída"}`}</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    id="value"
                    placeholder="Valor"
                    value={form.value}
                    required
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: formatToBRL(e.target.value),
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