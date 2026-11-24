import PesquisaSatisfacao from "./pages/PesquisaSatisfacao";
import ValidacaoUsuario from "./pages/ValidacaoUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="h-dvh overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary/40">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index path="/" element={<ValidacaoUsuario />} />
            <Route path="/pesquisa" element={<PesquisaSatisfacao />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
