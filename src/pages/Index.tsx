import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { DarkAccentStrip } from "@/components/sections/DarkAccentStrip";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RealizationsSection } from "@/components/sections/RealizationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocalSection } from "@/components/sections/LocalSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DarkAccentStrip />
      <ProductsSection />
      <WhyUsSection />
      <ProcessSection />
      <RealizationsSection />
      <TestimonialsSection />
      <LocalSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
