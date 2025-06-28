import React from 'react';
import { useAuth } from 'react-oidc-context';
import { LoginButton } from '../components/navbar/LoginButton';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {

    const { isAuthenticated, isLoading } = useAuth();

    console.log(JSON.stringify(isAuthenticated))

    if (isLoading) {
        return <>Carregando...</>; 
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
        <h2>É necessário fazer login para acessar esta página.</h2>
        <LoginButton />
    </div>
  );
};

export default ProtectedRoute;