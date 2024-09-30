import { Button, Link } from "@nextui-org/react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Image from "next/image";

export default function MainNavbar() {
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
        <Button variant="light" as={Link} href="/dashboard" className="font-medium text-[16px] flex gap-2 items-center">
          Войти
          <FaArrowRightToBracket />
        </Button>
      </div>
    </div>
  );
}
