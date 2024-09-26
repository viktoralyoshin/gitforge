import {
  FaChartBar,
  FaChartPie,
  FaCommentDots,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa6";

export default function MainTabCard() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[28px] font-semibold py-8">
        Automated tasks improve efficiency and free up developers’ time —
        without sacrificing security
      </p>
      <div className="flex flex-col text-[18px] font-semibold gap-4">
        <a href="" className="group flex gap-4 items-center">
          <FaChartBar size={30} color="#7b3aec"/>
          <div className="flex gap-2 items-center">
            Continuous integration and delivery
            <FaArrowRight className="group-hover:translate-x-2 ease-in duration-200" />
          </div>
        </a>
        <a href="" className="group flex gap-4 items-center">
          <FaChartPie size={30} color="#7b3aec"/>
          <div className="flex gap-2 items-center">
            AI‑powered workflows with GitLab Duo
            <FaArrowRight className="group-hover:translate-x-2 ease-in duration-200" />
          </div>
        </a>
        <a href="" className="group flex gap-4 items-center">
          <FaCommentDots size={30} color="#7b3aec"/>
          <div className="flex gap-2 items-center">
            Source code management
            <FaArrowRight className="group-hover:translate-x-2 ease-in duration-200" />
          </div>
        </a>
        <a href="" className="group flex gap-4 items-center">
          <FaDatabase size={30} color="#7b3aec"/>
          <div className="flex gap-2 items-center">
            Automated software delivery
            <FaArrowRight className="group-hover:translate-x-2 ease-in duration-200" />
          </div>
        </a>
      </div>
    </div>
  );
}
