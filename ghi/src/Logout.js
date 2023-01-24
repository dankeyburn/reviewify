import { useContext } from "react";
import { Context } from "./Store";

function Logout() {
    const [token, dispatch] = useContext(Context);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const accountsUrl = "http://localhost:8000/token/";
        const fetchConfig = {
            method: "delete",
            credentials: "include",
        };
        await fetch(accountsUrl, fetchConfig);
        dispatch({ type: "logout" });
        let accountData = {
            id: null,
            email: null,
            username: null,
        };
        dispatch({ type: "update_current", payload: accountData });
    };
    return (
        <>
            <button onClick={handleSubmit} className="btn btn-primary">
                Log Out
            </button>
        </>
    );
}
export default Logout;
