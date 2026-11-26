import { Outlet } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toast";

function MainLayout() {
  return (
    <main className="flex flex-col mx-auto min-h-full max-w-lg px-1 pt-[max(24px,env(safe-area-inset-top))] pb-[max(24px,env(safe-area-inset-bottom))]">
      <Card className="flex min-h-0 flex-col flex-1">
        <img
          src="../public/capa.png"
          alt="Event cover"
          className="delay-100 animate-in fade-in zoom-in-95 duration-1000 aspect-video w-full object-cover"
        />

        <CardContent className="flex min-h-0 flex-1 flex-col">
          <Outlet />
        </CardContent>
      </Card>

      <Toaster />
    </main>
  );
}

export default MainLayout;
