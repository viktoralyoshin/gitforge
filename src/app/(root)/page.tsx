import { Image } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <header className="h-[40vh] my-auto">
        <div className="h-full w-full">
          <div className="flex items-end h-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col w-2/3">
                <h1 className="text-[48px] font-bold">
                  Легкость в управлении, мощь в результатах
                </h1>
                <p className="text-[24px] font-semibold text-foreground-600">
                  Упрощаем управление, увеличиваем результат
                </p>
              </div>
              <div>
                <Button
                  href="https://github.com/nextui-org/nextui"
                  as={Link}
                  variant="shadow"
                  color="primary"
                  size="lg"
                  className="text-[16px] font-medium"
                >
                  Попробовать <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full flex gap-4 h-[1450px]">
        <div className="w-2/5 flex flex-col gap-2 sticky top-1/2 h-[50px]">
          <h1 className="font-semibold text-[36px]">
            Balance speed and security
          </h1>
          <p className="text-[18px]">
            Automate software delivery
          </p>
        </div>
        <div className="w-3/5 flex flex-col gap-16">
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
        </div>
      </section>
      <div className="h-[1000px]"></div>
    </div>
  );
}
