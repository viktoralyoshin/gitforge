"use client"

import Image from "next/image";
import { links } from "@/constants";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardSideBar() {
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 min-w-[50px]  h-screen">
      <div className="flex flex-col p-4 pt-6 gap-4 h-full justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center pl-2">
            <Image
              src="/lo.png"
              width={28}
              height={28}
              alt="Picture of the author"
            />
            <h1 className="font-extrabold text-[20px] max-lg:hidden">
              GitForge
            </h1>
          </div>
          <nav className="flex flex-col gap-2">
            {links.map((link) => {

              const isActive = (pathname.includes(link.route) && link.route.length > 1 || pathname === link.route)

              return (
                <Link href={link.route}>
                  <div className={`${isActive && "bg-primary/40 hover:bg-primary/50"} flex items-center gap-2 p-3 hover:bg-foreground-200 rounded-xl ease-in duration-200`}>
                    <Image
                      src={link.image}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                    <h4 className="max-lg:hidden font-semibold text-[14px]">{link.label}</h4>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
