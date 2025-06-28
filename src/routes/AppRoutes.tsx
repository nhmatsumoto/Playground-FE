import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/public/Home';
import ProtectedRoute from './ProtectedRoute';
import { Dashboard } from '../pages/private/Dashboard';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                       <Home />
                    }
                />
                <Route
                    path="/private"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;