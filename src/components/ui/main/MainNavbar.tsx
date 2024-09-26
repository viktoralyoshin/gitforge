import { Button } from "@nextui-org/react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Image from "next/image";

export default function MainNavbar() {
  return (
    <div className="w-full sticky top-0 bg-background z-[100]">
      <div className="max-w-7xl flex justify-between items-center mx-auto my-6 px-6">
        <div className="flex gap-8 items-center">
          <Image
            src="/lo.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <nav className="flex text-[16px] gap-8 font-medium">
            <a
              href=""
              className="opacity-70 hover:opacity-100 ease-in duration-200"
            >
              Платформа
            </a>
            <a
              href=""
              className="opacity-70 hover:opacity-100 ease-in duration-200"
            >
              Тарифы
            </a>
            <a
              href=""
              className="opacity-70 hover:opacity-100 ease-in duration-200"
            >
              О нас
            </a>
          </nav>
        </div>
        <Button variant="light" className="font-medium text-[16px] flex gap-2 items-center">
          Войти
          <FaArrowRightToBracket />
        </Button>
      </div>
    </div>
  );
}
