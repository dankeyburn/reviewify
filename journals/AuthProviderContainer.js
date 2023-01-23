import { BrowserRouter } from "react-router-dom";
import "./Styles.css";
import { AuthProvider, useToken } from "../ghi/src/UseToken";
import App from "../ghi/src/App";

function GetToken() {
    useToken();
    return null;
}

function AuthProviderContainer() {
    // const navigate = useNavigate();

    return (
        <AuthProvider>
            <BrowserRouter>
                <GetToken />
                <App />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AuthProviderContainer;
