import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';
import { LoginButton } from '../LoginButton';
import { LogoutButton } from '../LogoutButton';

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between">
      <div className="text-lg font-bold">MyApp</div>

      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/private">Dashboard</Link>
        </li>

        {auth.isAuthenticated && auth.user ? (
          <>
            <li>
              <span className="text-sm text-gray-300">
                Olá, {auth.user.profile.name || auth.user.profile.preferred_username}
              </span>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <li>
            <LoginButton />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
