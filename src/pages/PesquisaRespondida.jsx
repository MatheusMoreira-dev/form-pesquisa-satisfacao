import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function PesquisaRespondida() {
  return (
    <div className="flex flex-col w-full delay-100 animate-in fade-in slide-in-from-right-8 duration-500">
      <h1 className="text-xl font-bold">Resposta Enviada!</h1>
      <p className="text-sm text-muted-foreground">
        Agradecemos a sua avaliação!
      </p>

      <Button
        className="mt-12 border-primary text-primary bg-primary/10"
        variant="outline"
      >
        <Link to="/">Página Inicial</Link>
      </Button>
      <div></div>
    </div>
  );
}

export default PesquisaRespondida;
