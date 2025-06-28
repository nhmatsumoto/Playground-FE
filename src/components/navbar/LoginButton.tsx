import { useAuth } from "react-oidc-context";

export const LoginButton = () => {

    const { signinRedirect } = useAuth();

    const handleLogin = () => {
        signinRedirect();
    }

    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleLogin}>
            Login
        </button>
    )
}