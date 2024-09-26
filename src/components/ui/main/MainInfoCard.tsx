import { Card, CardBody } from "@nextui-org/react";
import { FaClipboardCheck } from "react-icons/fa6";

export default function MainInfoCard() {
  return (
    <Card>
      <CardBody className="flex flex-col gap-4 p-8">
        <FaClipboardCheck size={30} />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-[24px]">Simplify your toolchain</h3>
          <p>All the essential DevSecOps tools in one place.</p>
        </div>
      </CardBody>
    </Card>
  );
}
