import { Input } from "@/components/Input";
import { InputFocus } from "@/components/Input/InputFocus";
/* import { InputSectionField } from "@/components/InputSectionField";
 */ import { Label } from "@/components/Label";
import styles from "../styles.module.scss";
import { Button } from "@/components/Button";
import { useState } from "react";
import InputStyles from "../../Input/styles.module.scss";
import ButtonStyles from "../../Button/styles.module.scss";

export const RegisterForm = () => {
  const [accType, setAccType] = useState(Boolean);
  console.log(accType);
  return (
    <div className={styles.container}>
      <form>
        <h1>Cadastro</h1>
        <p>Informações pessoais</p>
        <Label htmlFor="name" name="Nome" />
        <InputFocus>
          <Input
            type="text"
            className={InputStyles.basicInputWithBorder}
            placeholder="Ex: Samuel Leão"
            id="name"
          />
        </InputFocus>

        <Label htmlFor="email" name="Email" />
        <InputFocus>
          <Input
            type="email"
            className={InputStyles.basicInputWithBorder}
            placeholder="Ex: samuel@kenzie.com.br"
            id="email"
          />
        </InputFocus>

        <Label htmlFor="cpf" name="CPF" />
        <InputFocus>
          <Input
            type="number"
            className={InputStyles.basicInputWithBorder}
            placeholder="000.000.000-00"
            id="cpf"
          />
        </InputFocus>

        <Label htmlFor="phone" name="Celular" />
        <InputFocus>
          <Input
            type="number"
            className={InputStyles.basicInputWithBorder}
            placeholder="(DDD) 90000-0000"
            id="phone"
          />
        </InputFocus>

        <Label htmlFor="birthdate" name="Data de nascimento" />
        <InputFocus>
          <Input
            type="number"
            className={InputStyles.basicInputWithBorder}
            placeholder="00/00/00"
            id="birthdate"
          />
        </InputFocus>

        <Label htmlFor="description" name="Descrição" />
        <InputFocus>
          <Input
            type="text"
            className={InputStyles.basicInputWithBorder}
            placeholder="Digitar descrição"
            id="description"
          />
        </InputFocus>

        <p>Informações de endereço</p>
        <Label htmlFor="cep" name="CEP" />
        <InputFocus>
          <Input
            type="number"
            className={InputStyles.basicInputWithBorder}
            placeholder="000.000-00"
            id="cep"
          />
        </InputFocus>

        <div className={styles.divAddress}>
          <div>
            <Label htmlFor="estate" name="Estado" />
            <InputFocus>
              <Input
                type="text"
                className={InputStyles.basicInputWithBorder}
                placeholder="Digitar Estado"
                id="estate"
              />
            </InputFocus>
          </div>

          <div>
            <Label htmlFor="city" name="Cidade" />
            <InputFocus>
              <Input
                type="text"
                className={InputStyles.basicInputWithBorder}
                placeholder="Digitar cidade"
                id="city"
              />
            </InputFocus>
          </div>
        </div>

        <Label htmlFor="street" name="Rua" />
        <InputFocus>
          <Input
            type="text"
            className={InputStyles.basicInputWithBorder}
            placeholder="Digitar rua"
            id="street"
          />
        </InputFocus>

        <div className={styles.divAddress}>
          <div>
            <Label htmlFor="house_number" name="Número" />
            <InputFocus>
              <Input
                type="number"
                className={InputStyles.basicInputWithBorder}
                placeholder="Digitar número"
                id="house_number"
              />
            </InputFocus>
          </div>

          <div>
            <Label htmlFor="complement" name="Complemento" />
            <InputFocus>
              <Input
                type="text"
                className={InputStyles.basicInputWithBorder}
                placeholder="Ex: apto 10"
                id="complement"
              />
            </InputFocus>
          </div>
        </div>

        <p>Tipo de conta</p>
        <div className={styles.divButtons}>
          <Button
            onClick={() => setAccType(false)}
            className={ButtonStyles.brand1Button}
            text="Comprador"
          />

          <Button
            onClick={() => setAccType(true)}
            className={ButtonStyles.grey10BorderGrey4TextGrey0Button}
            text="Anunciante"
          />
        </div>

        <Label htmlFor="password" name="Senha" />
        <InputFocus>
          <Input
            type="password"
            className={InputStyles.basicInputWithBorder}
            placeholder="Digitar senha"
            id="password"
          />
        </InputFocus>

        <Label htmlFor="password_confirmation" name="Confirmar senha" />
        <InputFocus>
          <Input
            type="password"
            className={InputStyles.basicInputWithBorder}
            placeholder="Confirmar senha"
            id="password_confirmation"
          />
        </InputFocus>

        <Button
          className={ButtonStyles.brand1Button}
          text="Finalizar cadastro"
        />
      </form>
    </div>
  );
};