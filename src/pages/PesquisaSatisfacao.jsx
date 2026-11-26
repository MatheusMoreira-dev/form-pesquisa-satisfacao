import ClienteNaoIdentificado from "@/features/questionario/components/ClienteNaoIdentificado";
import Questionario from "@/features/questionario/components/Questionario";
import { useLocation } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PesquisaSatisfacao() {
  const { state } = useLocation();

  return (
    <div className="delay-100 animate-in fade-in slide-in-from-right-8 duration-500">
      {state?.cliente ? (
        <div>
          <div className="absolute top-4 left-4">
            <Button size="sm" variant="outline" className="bg-background">
              <p className="text-xs">N° Cartão:</p>

              <Link
                to="/"
                className="flex items-center gap-1 text-primary bg-none"
              >
                {state?.cliente.numeroCarteirinha}
                <IoMdExit />
              </Link>
            </Button>
          </div>

          <Questionario cliente={state.cliente} />
        </div>
      ) : (
        <ClienteNaoIdentificado />
      )}
    </div>
  );
}

export default PesquisaSatisfacao;
