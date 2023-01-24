import { BrowserRouter } from "react-router-dom";
import "./Styles.css";
import { AuthProvider, useToken } from "./UseToken";
import App from "./App";

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
