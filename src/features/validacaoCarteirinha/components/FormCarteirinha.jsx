import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

function FormCarteirinha() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldSeparator />
        <Field>
          <FieldLabel>Nome completo</FieldLabel>
          <Input type="text" />
        </Field>

        <Field>
          <FieldLabel>N° da Carteirinha</FieldLabel>

          <Input type="number" />
          <FieldDescription>
            Digite os 11 números da sua carteirinha Unimed Cariri
          </FieldDescription>
        </Field>

        <FieldSeparator />

        <Button type="submit">
          {loading && <Spinner />}
          Iniciar pesquisa
        </Button>
      </FieldGroup>
    </form>
  );
}

export default FormCarteirinha;
