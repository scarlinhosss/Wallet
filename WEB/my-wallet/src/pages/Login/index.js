
import { useState } from "react";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./styles";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

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
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                />
                <Input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    value={form.password}
                    pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_].*[\W_])[A-Za-z\d\W_]{8,50}$"

                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                />
                <Button value="Entrar" />
            </form>
            <a href="./signUp.html">Primeira vez? Cadastre-se!</a>
        </Container>
    );
}