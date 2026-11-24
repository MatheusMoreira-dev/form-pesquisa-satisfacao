import { db } from "@/services/firebase/firebaseConfig";
import { getPesquisaAtual } from "@/services/firebase/pesquisaConfig";
import { doc, setDoc } from "firebase/firestore";

export async function criarCarteirinha(data) {
  try {
    const pesquisaAtual = await getPesquisaAtual();

    if (!pesquisaAtual?.id) {
      throw new Error("Não foi possível identificar a pesquisa atual.");
    }

    const pathCarteirinha = doc(
      db,
      "pesquisas",
      pesquisaAtual.id,
      "carteirinhas",
      data.numeroCarteirinha,
    );

    console.log("Pesquisa atual:", pesquisaAtual);
    console.log("ID da pesquisa:", pesquisaAtual.id);
    console.log("Carteirinha:", data.numeroCarteirinha);
    console.log("Caminho:", pathCarteirinha.path);

    await setDoc(pathCarteirinha, {
      criadoEm: Date.now(),
      ...data,
    });

    console.log("Carteirinha criada com sucesso!");

    return true;
  } catch (error) {
    console.error("ERRO AO CRIAR CARTEIRINHA:");
    console.error("code:", error.code);
    console.error("message:", error.message);
    console.error("name:", error.name);
    console.error("error completo:", error);

    throw error;
  }
}
