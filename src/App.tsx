import "./App.scss";
import { ModalProvider } from "./context/modal";
import { PortafolioProvider } from "./context/portfolio";
import { DashboardRoutes } from "./routes/DashboardRoutes";
import { UIProvider } from "./context/ui/UIProvider";

function App() {
  return (
    <ModalProvider>
      <PortafolioProvider>
        <UIProvider>
          <DashboardRoutes />
        </UIProvider>
      </PortafolioProvider>
    </ModalProvider>
  );
}

export default App;
