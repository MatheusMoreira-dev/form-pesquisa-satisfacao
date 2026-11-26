import Questionario from "@/features/questionario/components/Questionario";
import { useLocation } from "react-router-dom";

export function PesquisaSatisfacao() {
  const { state } = useLocation();
  return <Questionario cliente={state.cliente} />;
}

export default PesquisaSatisfacao;
