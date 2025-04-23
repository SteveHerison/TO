import React from "react";
import { Input } from "../../ui/input";
import clsx from "clsx";
import { useController, UseControllerProps } from "react-hook-form";
import { InputProps } from "@/types/inputRegister";
import { UserLogin } from "@/types/loginUser";

// Adicionando autoComplete ao InputProps
type InputComponentProps = UseControllerProps<UserLogin> &
  InputProps & {
    autoComplete?: string; // Adiciona autoComplete
  };

export const InputComponent = (props: InputComponentProps) => {
  const { field, fieldState } = useController(props);

  // Captura o restante das props com o spread operator
  const { label, place, type, id, autoComplete, ...rest } = props;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.name} className="block text-sm font-medium">
          {label}
        </label>
      )}
      <Input
        {...field}
        value={field.value ?? ""}
        id={id || props.name}
        placeholder={place}
        type={type || "text"}
        autoComplete={autoComplete}
        required
        className={clsx("mt-1", {
          "border-red-500 focus-visible:ring-red-500": fieldState.invalid,
        })}
        {...rest} // Passa o restante das props para o Input
      />
      {fieldState.error?.message && (
        <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
      )}
    </div>
  );
};

InputComponent.displayName = "InputComponent";
