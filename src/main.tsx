import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import './global.css';

createRoot(document.getElementById('root')!).render(
 <AppRoutes />
);
