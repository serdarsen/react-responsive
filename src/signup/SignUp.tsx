import { HeroSection } from "../HeroSection";
import { homeObjOne, homeObjThree } from "./Data";

export const SignUp = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
};
