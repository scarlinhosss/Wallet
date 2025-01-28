import { IoCloseOutline } from "react-icons/io5";
import { Container } from "./styles";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import ConfirmAlert from "../ConfirmAlert";
import { useNavigate } from "react-router-dom";
import { toastOptions } from "../../utils/toastOptions-utils";
import { toast } from "react-toastify";

export default function Transaction({ id, date, description, value, type, loadTransactions, editing }) {
    const [deleting, setDeleting] = useState(false);
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    async function editTransaction() {
        if (!editing) return;

        try {
            navigate(`/transaction/${id}?type=${type}`)
        } catch(error) {
            toast.error(`${error.response.data}`, toastOptions)
        }
    }

    return(
        <>
            <Container type={type} onClick={editTransaction} editing={editing}>
                <p className="date">{dayjs(date).format("DD/MM")}</p>
                <p className="description">{description}</p>
                <p className="value">{value}</p>
                {editing && <IoCloseOutline onClick={(e) => {
                    e.stopPropagation();
                    setDeleting(true);
                }} />}
            </Container>
            
            {deleting && (
                <ConfirmAlert id={id} token={userData.token} setDeleting={setDeleting} loadTransactions={loadTransactions} />
            )}
        </>
    );
}