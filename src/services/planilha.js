const URL_PLANILHA =
  "https://script.google.com/macros/s/AKfycbwZJyrorUT0qcYcUNDSeswTn_IcS9eLQbQBn39OWCXd1KrxQDckJKNkMAUbngV-F9-6VA/exec";

export async function enviarParaPlanilha(dados) {
  await fetch(URL_PLANILHA, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(dados),
  });
}
