import { CustomPageProps } from "../utils";
import Section1 from "../components/medicine/Section1";
import Section2 from "../components/medicine/Section2";
import Section3 from "../components/medicine/Section3";
import Section4 from "../components/medicine/Section4";

const Medicine: CustomPageProps = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};
Medicine.title = "Medicine in the Philippines";
export default Medicine;
