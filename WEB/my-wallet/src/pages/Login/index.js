
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./styles";
import { login } from "../../services/session-api";
import UserContext from "../../contexts/UserContext";
import { saveOnLocalStorage } from "../../utils/context-utils";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions-utils";

export default function Login() {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [passwordType, setPasswordType] = useState("password");
    console.log(passwordType);

    function handleChange({ name, value }) {
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const body = { ...form, id: 0 };

        try {
            const response = await login(body);

            toast.success("Login realizado com sucesso", toastOptions)

            setUserData(response);
            saveOnLocalStorage("userData", response);

            navigate("home");
        } catch(error) {
            toast.error(`${error.response.data}`, toastOptions);
        };
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
                    required
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                />
                <Input
                    type={passwordType}
                    id="password"
                    placeholder="Senha"
                    value={form.password}
                    required
                    pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_].*[\W_])[A-Za-z\d\W_]{8,50}$"
                    icon={<FaEye onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")} />}
                    onChange={(e) => handleChange({
                        name: e.target.id,
                        value: e.target.value,
                    })}
                />

                <Button value="Entrar" />
            </form>
            <Link to="signUp">Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}