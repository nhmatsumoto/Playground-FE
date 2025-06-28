import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">My App</div>
                <div>
                    <LogoutButton />
                </div>
            </div>
        </nav>
    );
}