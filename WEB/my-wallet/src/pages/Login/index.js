
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./styles";
import { login } from "../../services/session-api";
import UserContext from "../../contexts/UserContext";
import { saveOnLocalStorage } from "../../utils/context-utils";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

    function handleChange({ name, value }) {
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const body = { ...form, id: 0 };

        try {
            const response = await login(body);

            setUserData(response);
            saveOnLocalStorage("userData", response);

            navigate("home");
        } catch(error) {
            alert(error.response);
        };
    }

    toast('🦄 Wow so easy!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

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
                <Button value="Entrar" />
                <ToastContainer />
            </form>
            <Link to="signUp">Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}