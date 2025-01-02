import { createContext } from "react";
import Tile from "./Tile";
import { useForm } from "react-hook-form";
import NumberField from "./NumberField";
import { SubmitBtn } from "./SubmitBtn";
import CalculationHeader from "./CalculationHeader";

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
      <CalculationHeader />

      <FormContext.Provider
        value={{ register, handleSubmit, calculate, isSubmitSuccessful }}
      >
        <form className="w-4/5 ml-1">
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
