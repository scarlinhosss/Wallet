
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./styles";
import { formatToBRL } from "../../utils/valueHandler-utils";

export default function TransactionPage() {
    const { transactionId } = useParams();
    const searchParams = new URLSearchParams(useLocation().search);
    const type = searchParams.get("type");
    const newTransaction = isNaN(transactionId);

    const [form, setForm] = useState({ value: "", description: "" });

    function handleChange({ name, value }) {
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const body = { ...form, id: newTransaction ? 0 : transactionId };
        console.log(body);
    }

    return (
        <Container>
            <h1>{`${newTransaction ? "Nova" : "Editar"} ${type === "income" ? "entrada" : "saída"}`}</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    id="value"
                    placeholder="Valor"
                    value={formatToBRL(form.value)}
                    required
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
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