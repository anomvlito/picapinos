import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import SobreNosotros from '@/components/sections/SobreNosotros';
import ProcesoTrabajo from '@/components/sections/ProcesoTrabajo';
import ContactoCTA from '@/components/sections/ContactoCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <SobreNosotros />
      <ProcesoTrabajo />
      <ContactoCTA />
    </>
  );
}
