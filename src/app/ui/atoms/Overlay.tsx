"use client";

export default function ({
  children,
  className = "",
  ...args
}: {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <div
      className={
        "bg-black/30 fixed top-0 left-0 h-[100vh] w-[100vw] z-[1000] overflow-hidden " + className
      }
      {...args}
    >
      {children}
    </div>
  );
}
