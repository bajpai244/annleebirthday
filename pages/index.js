import { useEffect } from "react";

import Hero from "../components/hero";
import Gallery from "../components/gallery";

import useSound from "use-sound";

const Page = () => {
  const [play] = useSound("./music.mp3");

  useEffect(() => {
    play();
  });

  return (
    <>
      <Hero />
      <Gallery />
    </>
  );
};

export default Page;
