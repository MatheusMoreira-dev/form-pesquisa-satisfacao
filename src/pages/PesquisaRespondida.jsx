import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function PesquisaRespondida() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-bold">Resposta Enviada!</h1>
      <p className="text-sm text-muted-foreground">
        Agradecemos a sua avaliação!
      </p>

      <Button className="mt-12" variant="link">
        <Link to="/">Enviar nova resposta</Link>
      </Button>
      <div></div>
    </div>
  );
}

export default PesquisaRespondida;
