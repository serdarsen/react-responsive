import { HeroSection } from "../HeroSection";
import { homeObjOne, homeObjThree } from "./Data";

export const Service = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
};
