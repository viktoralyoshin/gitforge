"use client";

import MainInfoCard from "@/components/ui/main/MainInfoCard";
import MainTabCard from "@/components/ui/main/MainTabCard";
import { Image } from "@nextui-org/react";
import {
  Button,
  Link,
  Tab,
  Tabs,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { FaArrowRight, FaCodeBranch, FaShield } from "react-icons/fa6";

export default function Home() {
  const list = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col gap-32">
      <header className="h-[40vh] my-auto">
        <div className="h-full w-full">
          <div className="flex items-end h-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:w-2/3">
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
      <div className="w-full grid gap-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {list.map((index) => (
          <MainInfoCard />
        ))}
      </div>
      <div className="w-full flex gap-4">
        <div className="h-[510px] w-2/5">
          <div className="flex flex-col gap-2 sticky top-1/2 h-[50px]">
            <h1 className="font-semibold text-[36px]">
              Balance speed and security
            </h1>
            <p className="text-[18px]">
              Automate software delivery, boost productivity, and secure your
              end-to-end software supply chain.
            </p>
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-16">
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-3/5 flex flex-col gap-16">
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
          <Image src="/2.jpg" height={400} alt="Picture of the author" />
        </div>
        <div className="h-[510px] w-2/5">
          <div className="flex flex-col gap-2 sticky top-1/2 h-[50px]">
            <h1 className="font-semibold text-[36px]">
              Balance speed and security
            </h1>
            <p className="text-[18px]">
              Automate software delivery, boost productivity, and secure your
              end-to-end software supply chain.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-black to-[#171321] to-60% rounded-2xl">
        <div className="dark p-8 text-white flex flex-col gap-6 max-w-[90%]">
          <h1 className="text-[44px] font-bold">
            From planning to production, GitForge brings your team together
          </h1>
          <Tabs aria-label="Info" color="primary" size="lg" radius="full">
            <Tab
              key="development"
              title={
                <div className="flex items-center space-x-2">
                  <FaCodeBranch />
                  <span>Development</span>
                </div>
              }
            >
              <MainTabCard />
            </Tab>
            <Tab
              key="security"
              title={
                <div className="flex items-center space-x-2">
                  <FaShield />
                  <span>Security</span>
                </div>
              }
            >
              <MainTabCard />
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[44px] font-bold">FAQ</h1>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            subtitle="Press to expand"
            title="Accordion 1"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            subtitle={
              <span>
                Press to expand
              </span>
            }
            title="Accordion 2"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            subtitle="Press to expand"
            title="Accordion 3"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
