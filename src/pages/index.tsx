import BasicLayouts from "@/components/layouts/BasicLayouts";
import HomeDesc from "@/components/views/home/HomeDesc";
import HomeHero from "@/components/views/home/HomeHero";
import HomeReason from "@/components/views/home/HomeReason";

export default function Home() {
  return (
    <BasicLayouts>
      <HomeHero />
      <HomeDesc />
      <HomeReason />
    </BasicLayouts>
  );
}
