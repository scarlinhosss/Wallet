import { Container } from "./styles";
import dayjs from "dayjs";

export default function Transaction({ date, description, value, type }) {
    return(
        <Container type={type}>
            <p className="date">{dayjs(date).format("DD/MM")}</p>
            <p className="description">{description}</p>
            <p>{`R$${value}`}</p>
        </Container>
    );
}