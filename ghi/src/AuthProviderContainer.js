import { BrowserRouter } from "react-router-dom";
import "./Styles.css";
import { AuthProvider, useToken } from "./UseToken";
import App from "./App";

function GetToken() {
    useToken();
    return null;
}

function AuthProviderContainer() {
    const domain = /https:\/\/[^/]+/;
    const basename = process.env.PUBLIC_URL.replace(domain, "");

    return (
        <AuthProvider>
            <BrowserRouter basename={basename}>
                <GetToken />
                <App />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AuthProviderContainer;
