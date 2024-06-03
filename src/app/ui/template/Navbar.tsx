"use client";

import Link from "next/link";
import { Dropdown } from "antd";

import { Locale } from "@/types";
import { translate } from "@/helpers/translate";

import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

interface Props {
  locale: Locale;
  className?: string;
  isHeader?: boolean;
}
interface NavbarItem {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any;
  children?: NavbarItem[];
}

export default function Navbar({ locale, className = "", isHeader = true }: Props) {
  const pathname = usePathname();
  const links: NavbarItem[] = [
    {
      href: `/${locale}`,
      label: translate("mainpage", locale),
    },
    {
      href: `/${locale}/about`,
      label: translate("about", locale),
      children: [
        {
          href: `/${locale}/about/media`,
          label: translate("media_about_us", locale),
        },
      ],
    },
    {
      href: `/${locale}/products`,
      label: translate("products", locale),
    },
    {
      href: `/${locale}/articles`,
      label: translate("news", locale),
    },
  ];
  return (
    <ul className={`grow flex gap-4 items-center justify-start ${className}`}>
      {links.map((link) =>
        link.children && isHeader ? (
          <Fragment key={link.href}>
            <li className="hidden md:block">
              <Dropdown
                menu={{
                  items:
                    link.children?.map((el) => ({
                      key: el.href,
                      label: (
                        <Link className="hidden md:block" href={el.href}>
                          {el.label}
                        </Link>
                      ),
                    })) ?? [],
                }}
              >
                <div>
                  <Link
                    href={link.href}
                    className={`hover:border-b border-white ${pathname === link.href && "border-b"}`}
                  >
                    {link.label}
                  </Link>
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1 w-3 cursor-pointer" />
                </div>
              </Dropdown>
            </li>
            <li className="md:hidden">
              <Link
                href={link.href}
                className={`hover:border-b border-white ${pathname === link.href && "border-b"}`}
              >
                {link.label}
              </Link>
            </li>
            {link.children.map((el) => (
              <li className="md:hidden" key={el.href}>
                <Link href={el.href}>{el.label}</Link>
              </li>
            ))}
          </Fragment>
        ) : (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:border-b border-white ${pathname === link.href && "border-b"}`}
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
