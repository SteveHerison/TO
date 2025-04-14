import React from "react";
import { Input } from "../ui/input";
import clsx from "clsx";
import { useController, UseControllerProps } from "react-hook-form";
import { InputProps } from "@/types/inputRegister";

import { UserFormData } from "@/schemas/userShema";

// Tipo combinado: props do React Hook Form + props personalizados
type InputComponentProps = UseControllerProps<UserFormData> & InputProps;

export const InputComponent = (props: InputComponentProps) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="w-full ">
      {props.label && (
        <label htmlFor={props.name} className="block text-sm font-medium">
          {props.label}
        </label>
      )}
      <Input
        {...field}
        value={field.value ?? ""}
        id={props.id || props.name}
        placeholder={props.place}
        type={props.type || "text"}
        className={clsx("mt-1", {
          "border-red-500 focus-visible:ring-red-500": fieldState.invalid,
        })}
      />
      {fieldState.error?.message && (
        <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
      )}
    </div>
  );
};

InputComponent.displayName = "InputComponent";
