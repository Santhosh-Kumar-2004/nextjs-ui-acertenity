import { SparklesCore } from "@/components/ui/sparkles";
import { SparklesPreview } from "@/components/sparkles2";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundGradientDemo } from "@/components/bgGradient";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BackgroundGradientAnimationDemo } from "@/components/gradient_bg";

export default function Home() {
  return (
    <>
      <SparklesCore />  
      <SparklesPreview />
      {/* <BackgroundGradient /> */}
      {/* <BackgroundGradientDemo /> */}
      <BackgroundGradientAnimation />
      <BackgroundGradientAnimationDemo />
    </>
  );
}
