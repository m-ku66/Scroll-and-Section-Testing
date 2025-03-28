"use client";
import PageSection from "./components/PageSection";
import ScreenWrapper from "./components/ScreenWrapper";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <ScreenWrapper>
        <PageSection
          bgColor="bg-rose-50"
          parallaxStrength={1}
          scaleOnScroll={true}
        >
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold tracking-tight">Welcome</h2>
            <p className="text-lg text-neutral-700 max-w-lg text-center">
              Scroll down to explore our smooth scrolling sections with dramatic
              parallax effects.
            </p>
          </div>
        </PageSection>

        <PageSection
          bgColor="bg-blue-50"
          parallaxStrength={1}
          scaleOnScroll={true}
        >
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Second Section
            </h2>
            <p className="text-lg text-neutral-700 max-w-lg text-center">
              This section used to have extra rotation effects when scrolling!
            </p>
          </div>
        </PageSection>

        <PageSection
          bgColor="bg-amber-50"
          parallaxStrength={1}
          scaleOnScroll={true}
        >
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold tracking-tight">Final Section</h2>
            <p className="text-lg text-neutral-700 max-w-lg text-center">
              Notice how this section scales slightly as you scroll through
              it(well, all sections do this now lol).
            </p>
          </div>
        </PageSection>
      </ScreenWrapper>
    </div>
  );
}
