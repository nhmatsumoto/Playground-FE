import { useAuth } from "react-oidc-context";

export const LogoutButton = () => {

    const { signoutRedirect } = useAuth();

    const handleLogout = () => {
        signoutRedirect();
    };

    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleLogout}>
            Logout
        </button>
    )
}