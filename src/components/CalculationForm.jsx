import { createContext } from "react";
import Tile from "./Tile";
import { useForm } from "react-hook-form";
import NumberField from "./NumberField";
import { SubmitBtn } from "./SubmitBtn";

export const FormContext = createContext();

export function CalculationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const calculate = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="font-bold text-5xl">Enter your Assets</h1>
        <h3 className="mt-2 text-slate-700">
          If a particular asset is not relevant to you, leave it empty
        </h3>
      </div>

      <FormContext.Provider
        value={{ register, handleSubmit, calculate, isSubmitSuccessful }}
      >
        <form className="block">
          <Tile>
            <NumberField label={"Cash"} id={"cash"} />
            <NumberField label={"Business Investments"} id={"investBiz"} />
            <NumberField label={"Cash"} id={"investShare"} />
            <NumberField label={"DPS"} id={"dps"} />
            <NumberField label={"Pension"} id={"pension"} />
            <NumberField
              label={"Recoverable loans given to others"}
              id={"loan"}
            />
          </Tile>

          <Tile>
            <NumberField label={"Amount of Gold in Bhori"} id={"gold"} />
            <NumberField label={"Current price of Gold"} id={"goldPrice"} />
          </Tile>

          <div className="container mt-6">
            <SubmitBtn />
          </div>
        </form>
      </FormContext.Provider>
    </>
  );
}
