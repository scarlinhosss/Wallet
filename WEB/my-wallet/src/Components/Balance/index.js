import { Container } from "./styles";

export default function Balance({ value, type }) {
    return (
        <Container type={type}>
            <span>
                <p>Saldo</p>
                <p>{value}</p>
            </span>
        </Container>
    );
}