import { CalculationForm } from "../components/CalculationForm";
import image from "../assets/ramadan.png";

export default function CalculationPage() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-2 container mt-10 pl-10 pr-5 ">
          <CalculationForm />
        </div>

        <div className="text-center relative">
          <img src={image} className="w-4/5 top-24 absolute" />
        </div>
      </div>
    </>
  );
}
