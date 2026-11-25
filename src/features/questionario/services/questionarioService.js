import { doc, updateDoc } from "firebase/firestore";
import { getPesquisaAtual } from "@/services/firebase/pesquisaConfig";
import { db } from "@/services/firebase/firebaseConfig";

export async function enviarRespostas(data) {
  const pesquisaAtual = await getPesquisaAtual();

  if (!pesquisaAtual?.id) {
    throw new Error("Não foi possível identificar a pesquisa atual.");
  }

  const pathCarteirinha = doc(
    db,
    "pesquisas",
    pesquisaAtual.id,
    "respostas",
    data.numeroCarteirinha,
  );

  await updateDoc(pathCarteirinha, {
    respostas: data.respostas,
    respondido: true,
    data: Date.now(),
  });
}
