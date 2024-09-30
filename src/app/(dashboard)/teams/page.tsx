import TeamCard from "@/components/ui/dashboard/cards/TeamCard";

export default function Teams() {
  const myList = ["item1", "item2", "item3", "item2", "item3"];

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-extrabold">Teams</h1>
      <div className="mt-8 grid gap-4 xl:grid-cols-4 lg:grid-cols-3 min-w-[540px]:grid-cols-2 grid-cols-1">
        {myList.map((id) => (
          <TeamCard />
        ))}
      </div>
    </div>
  );
}
