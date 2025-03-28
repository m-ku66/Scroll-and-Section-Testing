import PageSection from "./components/PageSection";
import ScreenWrapper from "./components/ScreenWrapper";

export default function Home() {
  return (
    <div className="container max-w-full h-fit px-6 py-2">
      <ScreenWrapper>
        <PageSection />
        <PageSection />
        <PageSection />
      </ScreenWrapper>
    </div>
  );
}
