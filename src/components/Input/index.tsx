import { Input } from "../ui/input";

type inputProps = {
  type?: string;
  name?: string;
  id?: string;
  label?: string;
  place?: string;
};

export const InputComponent = ({
  type,
  label,
  place,
  id,
  name,
}: inputProps) => {
  return (
    <>
      <label htmlFor="" className="w-full">
        {label}
        <Input type={type} placeholder={place} id={id} name={name} />
      </label>
    </>
  );
};
