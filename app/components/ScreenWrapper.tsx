"use client";

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <div className="relative w-full h-full flex flex-col gap-4 justify-center items-center">
      {children}
    </div>
  );
};

export default ScreenWrapper;
