import { useContext } from "react";
import { FormContext } from "./CalculationForm";
import Loading from "./Loading";

export function SubmitBtn() {
  const { handleSubmit, calculate, isSubmitSuccessful } =
    useContext(FormContext);

  return (
    <>
      {!isSubmitSuccessful && (
        <input
          type="submit"
          onClick={handleSubmit(calculate)}
          className="p-3 bg-islamic text-white font-semibold w-4/5 rounded-xl hover:cursor-pointer hover:brightness-95 active:brightness-90 transition"
        />
      )}

      {isSubmitSuccessful && (
        <button
          className="p-2 bg-slate-400 text-white w-4/5 rounded-xl text-center"
          disabled
        >
          <Loading />
        </button>
      )}
    </>
  );
}
