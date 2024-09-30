"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Link,
  User,
} from "@nextui-org/react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import {
  LuUser2,
  LuLayoutDashboard,
  LuSettings,
  LuBadgeHelp,
  LuLogOut,
} from "react-icons/lu";
import Image from "next/image";
import { useState } from "react";

export default function MainNavbar() {
  const [isAuth, setAuth] = useState(true);

  return (
    <div className="w-full sticky top-0 bg-background z-[100]">
      <div className="flex max-w-7xl justify-between items-center mx-auto my-6 px-6">
        <div className="flex gap-4 items-center">
          <Image
            src="/lo.png"
            width={28}
            height={28}
            alt="Picture of the author"
          />
          <h1 className="font-extrabold text-[20px]">GitForge</h1>
        </div>
        {isAuth ? (
          <Dropdown backdrop="blur" placement="bottom-end">
            <DropdownTrigger>
              <div>
                <User
                  name="Viktor Alyoshin"
                  description="@viktoralyoshin"
                  className="max-md:hidden"
                  classNames={{
                    name: "text-default-600",
                    description: "text-primary",
                  }}
                  avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                  }}
                />
                <Avatar
                  className="md:hidden"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" color="primary" >
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
                <DropdownItem
                  key="profile"
                  startContent={<LuUser2 size={18} />}
                >
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
                <DropdownItem
                  key="help"
                  startContent={<LuBadgeHelp size={18} />}
                >
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
        ) : (
          <Button
            variant="light"
            as={Link}
            href="/dashboard"
            className="font-medium text-[16px] flex gap-2 items-center"
          >
            Войти
            <FaArrowRightToBracket />
          </Button>
        )}
      </div>
    </div>
  );
}
