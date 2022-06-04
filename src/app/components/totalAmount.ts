import { Control, useForm, useWatch } from "react-hook-form";

const { setValue } = useForm();
const Total = ({ control }: { control: Control }) => {

  const formValues = useWatch({
    name: "product",
    control
  });
  const totalCal = formValues.reduce(
    (acc: number, current: { rate: any; quantity: any; }) => acc + (current.rate || 0) * (current.quantity || 0),
    0
  );
  console.log("total", totalCal);
  return setValue("amount", totalCal)
};

export default Total;
