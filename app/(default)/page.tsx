import Hero from '@/components/hero';
import Features from '@/components/features';
import Zigzag from "@/components/zigzag";

export const metadata = {
  title: 'MatTerra - TI-as-a-Service',
  description: 'Desbloqueie o potencial tecnológico de sua empresa',
};

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <Zigzag/>
      {/*<Testimonials/>*/}
      {/*<Newsletter/>*/}
    </>
  );
}
