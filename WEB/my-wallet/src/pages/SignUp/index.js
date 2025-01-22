
import { useState } from "react";
import { Link, Navigate } from "react-router-dom"; 

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./styles";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions-utils";

export default function SignUp() {
    const [form, setForm] = useState({name: "", email: "", password: "", password_confirmation: ""  });

    function handleChange({ name, value }) {
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const body = { ...form, id: 0 };
        console.log(body);
        try {
            const user = await SignUp(form);
            toast.success("Login realizado com sucesso", toastOptions)

            Navigate(-1);
        } catch(error) {
            toast.error(`${error.response.data}`, toastOptions);
        };
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    id="name"
                    placeholder="Nome"
                    value={form.name}
                    required
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                />
                <Input 
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    value={form.email}
                    required
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
                    required
                    pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_].*[\W_])[A-Za-z\d\W_]{8,50}$"

                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                />
                <Input
                    type="password"
                    id="password_confirmation"
                    placeholder="Senha"
                    value={form.password_confirmation}
                    required
                    pattern={form.password}

                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                />
                <Button value="Cadastrar" />
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Container>
    );
}