import { CustomPageProps } from "../utils";
import Section1 from "../components/choosing-philippines/Section1";
import Section2 from "../components/choosing-philippines/Section2";
import Section3 from "../components/choosing-philippines/Section3";
import Section4 from "../components/choosing-philippines/Section4";

const ChoosingPhilippines: CustomPageProps = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};
ChoosingPhilippines.title = "Choosing Philippines";
export default ChoosingPhilippines;
