import Questionario from "@/features/questionario/Questionario";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function PesquisaSatisfacao() {
  return (
    <main className="flex flex-col mx-auto min-h-full max-w-md px-4 pt-[max(24px,env(safe-area-inset-top))] pb-[max(24px,env(safe-area-inset-bottom))]">
      <Card className="flex min-h-0 flex-col flex-1">
        <img
          src="../public/capa.jpg"
          alt="Event cover"
          className="aspect-video w-full object-cover brightness-80  dark:brightness-40"
        />

        <CardContent className="flex min-h-0 flex-1 flex-col">
          <Questionario />
        </CardContent>
      </Card>
    </main>
  );
}

export default PesquisaSatisfacao;
