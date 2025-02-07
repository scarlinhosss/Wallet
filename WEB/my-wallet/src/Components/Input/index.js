import { Container, StyledInput } from "./styles";

export default function Input({ ...rest }) {
    return (
        <Container>
            <StyledInput {...rest} />
            {rest.icon}
        </Container>
    );
}