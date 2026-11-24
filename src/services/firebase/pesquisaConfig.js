import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const pathConfig = doc(db, "config", "pesquisa-atual");

export async function getPesquisaAtual() {
  const snapshop = await getDoc(pathConfig);
  return snapshop?.data();
}
