import Hero from '@/components/hero';
import Features from '@/components/features';

export const metadata = {
  title: 'MatTerra - Tech Lead-as-a-Service',
  description: 'Desbloqueie o potencial tecnológico de sua empresa',
};

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      {/*<Zigzag/>*/}
      {/*<Testimonials/>*/}
      {/*<Newsletter/>*/}
    </>
  );
}
