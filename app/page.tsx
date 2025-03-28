"use client";
import PageSection from "./components/PageSection";
import ScreenWrapper from "./components/ScreenWrapper";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <ScreenWrapper>
        <PageSection bgColor="bg-rose-50">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold tracking-tight">Welcome</h2>
            <p className="text-lg text-neutral-700 max-w-lg text-center">
              Scroll down to explore our smooth scrolling sections with parallax
              effects.
            </p>
          </div>
        </PageSection>

        <PageSection bgColor="bg-blue-50">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Second Section
            </h2>
            <p className="text-lg text-neutral-700 max-w-lg text-center">
              Notice how the background moves at a different speed than the
              content?
            </p>
          </div>
        </PageSection>

        <PageSection bgColor="bg-amber-50">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold tracking-tight">Final Section</h2>
            <p className="text-lg text-neutral-700 max-w-lg text-center">
              Each section snaps into place when scrolling.
            </p>
          </div>
        </PageSection>
      </ScreenWrapper>
    </div>
  );
}
