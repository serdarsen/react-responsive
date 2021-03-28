import { HeroSection } from "../HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

export const Product = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
};
