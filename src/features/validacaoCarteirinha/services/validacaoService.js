import { db } from "@/services/firebase/firebaseConfig";
import { getPesquisaAtual } from "@/services/firebase/pesquisaConfig";
import { doc, setDoc } from "firebase/firestore";

export async function criarCarteirinha(data) {
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

  await setDoc(pathCarteirinha, {
    ...data,
    criadoEm: Date.now(),
    respondido: false,
  });

  return true;
}
