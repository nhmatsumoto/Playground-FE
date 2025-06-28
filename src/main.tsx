import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import './global.css';
import { AuthProvider } from 'react-oidc-context';
import oidcConfig from './configuration/oidcConfig';

createRoot(document.getElementById('root')!).render(
    <AuthProvider {...oidcConfig}>
        <AppRoutes />
    </AuthProvider>
);
