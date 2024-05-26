import Image from "next/image";
import { socials } from "@/static";

export default function Socials() {
  return (
    <ul className="flex items-center justify-start gap-2 mx-4">
      {socials.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            className="w-8 h-8 flex items-center justify-center"
          >
            <Image {...link} className="max-w-full max-h-full"></Image>
          </a>
        </li>
      ))}
    </ul>
  );
}
