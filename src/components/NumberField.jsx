import { useContext } from "react";
import { FormContext } from "./CalculationForm";

export default function NumberField({ id, label }) {
  const { register } = useContext(FormContext);

  return (
    <div className="m-3 mb-6">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>
      <input
        type="number"
        className="rounded p-2 w-full shadow-sm mt-1 border-solid border border-neutral-300"
        id={id}
        {...register(id)}
      />
    </div>
  );
}
