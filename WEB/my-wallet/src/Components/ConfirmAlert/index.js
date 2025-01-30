import { toast } from "react-toastify";
import { Container } from "./styles"
import { toastOptions } from "../../utils/toastOptions-utils";
import { deleteTransaction } from "../../services/transaction-service";


export default function ConfirmAlert({ id, token, setDeleting, loadTransactions }) {

    async function handleDeleteTransaction() {
        try {
            await deleteTransaction(id, token);
            setDeleting(false);
            loadTransactions();
        } catch(error) {
            console.log(error);
            toast.error(`${error.response.data}`, toastOptions)
        }
    }

    return(
        <Container>
            <p>Deseja realmente deletar a transação?</p>
            <div className="buttons">
                <div className="button cancel" onClick={() => setDeleting(false)}>Cancelar</div>
                <div className="button delete" onClick={handleDeleteTransaction}>Deletar</div>
            </div>
        </Container>
    )
}