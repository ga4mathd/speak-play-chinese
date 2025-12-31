import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WhatsInsideSection from "@/components/landing/WhatsInsideSection";
import LanguagesSection from "@/components/landing/LanguagesSection";
import LearnByPlayingSection from "@/components/landing/LearnByPlayingSection";
import QuizSection from "@/components/landing/QuizSection";
import SongsSection from "@/components/landing/SongsSection";
import SafetySection from "@/components/landing/SafetySection";
import BonusSection from "@/components/landing/BonusSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import FAQSection from "@/components/landing/FAQSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyOrderButton from "@/components/landing/StickyOrderButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhatsInsideSection />
        <LanguagesSection />
        <LearnByPlayingSection />
        <QuizSection />
        <SongsSection />
        <SafetySection />
        <BonusSection />
        <ComparisonSection />
        <TestimonialsSection />
        <WhatYouGetSection />
        <div id="faq">
          <FAQSection />
        </div>
        <GuaranteeSection />
        <FinalCTASection />
        <StickyOrderButton />
      </main>
      <Footer />
    </>
  );
};

export default Index;
