import { IoCloseOutline } from "react-icons/io5";
import { Container } from "./styles";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import ConfirmAlert from "../ConfirmAlert";

export default function Transaction({ id, date, description, value, type, loadTransactions, editing }) {
    const [deleting, setDeleting] = useState(false);
    const { userData } = useContext(UserContext);

    return(
        <Container type={type}>
            <p className="date">{dayjs(date).format("DD/MM")}</p>
            <p className="description">{description}</p>
            <p className="value">{value}</p>
            {editing && <IoCloseOutline onClick={setDeleting}/>}

            {deleting && (
                <ConfirmAlert id={id} token={userData.token} setDeleting={setDeleting} loadTransactions={loadTransactions} />
            )}
            
        </Container>
    );
}