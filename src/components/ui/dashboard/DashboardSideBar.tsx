"use client";

import Image from "next/image";
import { links } from "@/constants";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownSection,
} from "@nextui-org/react";
import { LuUser2, LuLayoutDashboard, LuSettings, LuBadgeHelp, LuLogOut } from "react-icons/lu";

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
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;

              return (
                <Link href={link.route}>
                  <div
                    className={`${
                      isActive && "bg-foreground-200"
                    } flex items-center gap-2 p-3 hover:bg-foreground-200 rounded-xl ease-in duration-200`}
                  >
                    <Image
                      src={link.image}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                    <h4 className="max-lg:hidden font-semibold text-[14px]">
                      {link.label}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <div>
              <User
                name="Viktor Alyoshin"
                description="@viktoralyoshin"
                className="max-lg:hidden"
                classNames={{
                  name: "text-default-600",
                  description: "text-primary",
                }}
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
              />
              <Avatar
                className="lg:hidden"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
              <User
                name="Viktor Alyoshin"
                description="@viktoralyoshin"
                classNames={{
                  name: "text-default-600",
                  description: "text-primary",
                }}
                avatarProps={{
                  size: "sm",
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
              />
            </DropdownItem>
            <DropdownSection title="Profile" showDivider>
              <DropdownItem key="profile" startContent={<LuUser2 size={18} />}>
                Profile
              </DropdownItem>
              <DropdownItem
                key="Dashboard"
                href="/dashboard"
                startContent={<LuLayoutDashboard size={18} />}
              >
                Dashbord
              </DropdownItem>
              <DropdownItem
                key="settings"
                startContent={<LuSettings size={18} />}
              >
                Settings
              </DropdownItem>
              <DropdownItem key="help" startContent={<LuBadgeHelp size={18} />}>
                Help
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem
                key="logout"
                color="danger"
                startContent={<LuLogOut size={18} />}
              >
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
