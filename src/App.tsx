import "./App.scss";
import { ModalProvider } from "./context/modal";
import { PortafolioProvider } from "./context/portfolio";
import { DashboardRoutes } from "./routes/DashboardRoutes";

function App() {
  return (
    <ModalProvider>
      <PortafolioProvider>
        <DashboardRoutes />
      </PortafolioProvider>
    </ModalProvider>
  );
}

export default App;
