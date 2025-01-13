
import { useState } from "react";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./styles";

export default function NewIncome() {
    const [form, setForm] = useState({ value: "", description: "" });

    function handleChange({ name, value }) {
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const body = { ...form, id: 0 };
        console.log(body);
    }

    return (
        <Container>
            <h1>Nova entrada</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    id="value"
                    placeholder="Valor"
                    value={form.value}
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
                <Button value="Salvar entrada" />
            </form>
        </Container>
    );
}