import { Container } from "./styles";

export default function Transaction({ date, description, value, type }) {
    return(
        <Container type={type}>
            <p className="date">{date}</p>
            <p className="description">{description}</p>
            <p>{value}</p>
        </Container>
    );
}