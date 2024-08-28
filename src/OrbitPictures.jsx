import OrbitingCircles from "@/components/magicui/orbiting-circles";
import WordRotate from "@/components/magicui/word-rotate";
import clai1 from './assets/clai1.jpeg'
import clai2 from './assets/clai2.jpeg'
import clai3 from './assets/clai3.jpeg'
import clai4 from './assets/clai4.jpeg'
import clai5 from './assets/clai5.jpeg'
import clai6 from './assets/clai6.jpeg'
import clai7 from './assets/clai7.jpeg'
import clai8 from './assets/clai8.jpeg'


export default function GlobePictures() {
  return (
		<div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Inner Circles */}
      <WordRotate
        className="text-4xl font-bold text-black dark:text-white"
        words={["Clai", "Sobrang ganda"]}
      />
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={0}
        radius={80}
      >
        <Icons.clai1 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={80}
      >
        <Icons.clai2 />
      </OrbitingCircles>
 
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.clai3 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={80}
      >
        <Icons.clai4 />
      </OrbitingCircles>
      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={0}
        reverse
      >
        <Icons.clai5 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={5}
        reverse
      >
        <Icons.clai6 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.clai7 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Icons.clai8 />
      </OrbitingCircles>
    </div>
  );
}
 
const Icons = {
  clai1: () => (
    <img src={clai1} alt="clai image 1" className="h-[100px] object-contain" />
  ),
  clai2: () => (
    <img src={clai2} alt="clai image 2" className="h-[100px] object-contain" />
  ),
  clai3: () => (
    <img src={clai3} alt="clai image 3" className="h-[100px] object-contain" />
  ),
  clai4: () => (
    <img src={clai4} alt="clai image 4" className="h-[100px] object-contain" />
  ),
  clai5: () => (
    <img src={clai5} alt="clai image 5" className="h-[100px] object-contain" />
  ),
  clai6: () => (
    <img src={clai6} alt="clai image 6" className="h-[100px] object-contain" />
  ),
  clai7: () => (
    <img src={clai7} alt="clai image 7" className="h-[100px] object-contain" />
  ),
  clai8: () => (
    <img src={clai8} alt="clai image 8" className="h-[100px] object-contain" />
  )
}
