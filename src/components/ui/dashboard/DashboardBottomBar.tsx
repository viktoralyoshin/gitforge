"use client";

import Image from "next/image";
import { links } from "@/constants";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardBottomBar() {
  //   const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-5 w-screen md:hidden">
      <nav className="flex gap-2 max-w-[90%] mx-auto bg-foreground-100 p-1 justify-between rounded-xl">
        {links.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link href={link.route} className="w-full">
              <div
                className={`${
                  isActive && "bg-foreground-200"
                } flex items-center justify-center gap-2 p-3 hover:bg-foreground-200 rounded-xl ease-in duration-200`}
              >
                <Image
                  src={link.image}
                  alt={link.label}
                  width={20}
                  height={20}
                />
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
