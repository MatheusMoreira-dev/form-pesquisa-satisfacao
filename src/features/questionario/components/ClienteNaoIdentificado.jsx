import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ClienteNaoIdentificado() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-medium">Número de Carteirinha inválida!</h1>

      <Button
        className="mt-12 border-primary text-primary bg-primary/10"
        variant="link"
      >
        <Link to="/">Página inicial</Link>
      </Button>
    </div>
  );
}

export default ClienteNaoIdentificado;
