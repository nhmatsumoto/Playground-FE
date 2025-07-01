import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from 'react-oidc-context';
import oidcConfig from './configuration/oidcConfig';
import { MainLayout } from './components/layout/MainLayout';
import './global.css';

createRoot(document.getElementById('root')!).render(
    <AuthProvider {...oidcConfig}>
        <MainLayout> 
            <AppRoutes />
        </MainLayout>
    </AuthProvider>
);
