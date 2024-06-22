import dynamic from "next/dynamic";
import "swiper/css";

const DynamicLandingPage = dynamic(() => import("@/components/LandingPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <DynamicLandingPage />
    </main>
  );
}
