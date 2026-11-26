import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
  FieldError,
} from "@/components/ui/field";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { criarCarteirinha } from "../services/validacaoService";
import { toast } from "@/components/ui/toast";

function FormCarteirinha() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: { nomeCompleto: "", numeroCarteirinha: "" },
  });

  async function onSubmit(data) {
    try {
      const criada = await criarCarteirinha(data);
      if (criada) navigate("/pesquisa", { state: { cliente: data } });
    } catch (err) {
      navigate("pesquisa-respondida");

      toast.add({
        title: "Você já respondeu a pesquisa.",
        type: "error",
        priority: "high",
        timeout: 3000,
      });
      reset();
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSeparator />

          <Controller
            name="nomeCompleto"
            control={control}
            rules={{
              required: "Campo obrigatório!",
              validate: {
                tamanho: (v) => v.length > 2 || "Insira um nome válido!",
              },
            }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Nome completo</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Digite o seu nome completo..."
                  onChange={(e) => {
                    const nomeFormatado = e.target.value
                      .replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
                      .toLowerCase()
                      .replace(/\s+/g, " ")
                      .trimStart()
                      .split(" ")
                      .map((palavra) =>
                        ["de", "da", "do"].includes(palavra)
                          ? palavra
                          : palavra.charAt(0).toUpperCase() + palavra.slice(1),
                      )
                      .join(" ");

                    field.onChange(nomeFormatado);
                  }}
                />
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />

          <Controller
            name="numeroCarteirinha"
            control={control}
            rules={{
              required: "Campo obrigatório!",
              validate: {
                tamanhoExato: (valor) =>
                  valor.length === 17 ||
                  `Faltam ${17 - valor.length} dígitos (total: 17)`,
              },
            }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>N° da Carteirinha</FieldLabel>
                <FieldDescription>
                  Os 17 números da sua carteirinha Unimed Cariri
                </FieldDescription>

                <Input
                  {...field}
                  type="text"
                  inputMode="numeric"
                  maxLength={17}
                  aria-invalid={fieldState.invalid}
                  onChange={(e) => {
                    // Mantém apenas números
                    let valor = e.target.value.replace(/\D/g, "");

                    // Limita a 17 dígitos no total e atualiza o formulário
                    field.onChange(valor.slice(0, 17));
                  }}
                />
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />

          <FieldSeparator />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : "Iniciar pesquisa"}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}

export default FormCarteirinha;
