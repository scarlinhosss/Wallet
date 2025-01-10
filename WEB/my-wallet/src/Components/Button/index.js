import { StyledButton } from "./styles";

export default function Button({ ...rest }) {
    return (
        <StyledButton type="submit" {...rest}/>
    )
}