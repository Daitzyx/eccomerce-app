import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Header } from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import { CartProvider } from './context/CartContext';

import { SidebarProvider } from './context/SidebarContext';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <CartProvider>
          <GlobalStyles />
          <Header />
          <Sidebar />
          <main style={{ marginTop: '80px' }}>
            <AppRoutes />
          </main>
        </CartProvider>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
