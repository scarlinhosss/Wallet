import { Container } from "./styles"

export default function PasswordParams() {
    return (
        <Container>
            <ul>
                <li>Mínimo de 8 caracteres</li>
                <li>Mínimo de 2 caracteres especiais</li>
                <li>Mínimo de 1 número</li>
                <li>Mínimo de 1 letra maiúscula</li>
            </ul>
        </Container>
    )
}