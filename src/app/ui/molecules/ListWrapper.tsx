import Image from "next/image";

interface Props {
  className?: string;
  title?: string;
  withIcon?: boolean;
  children: React.ReactNode;
}

export default function ({ className = "", title, withIcon, children }: Props) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      {title && (
        <div className="mb-6">
          <h1 className="text-yellow-main font-semibold uppercase text-center text-2xl ">{title}</h1>

          {withIcon && (
            <Image src="/static/icon.svg" alt="" width="56" height="56" className="mx-auto"></Image>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
