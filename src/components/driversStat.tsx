import Ignition from "@/assets/ignition.svg";
import Moving from "@/assets/moving.svg";
import Standing from "@/assets/standing.svg";
import Parked from "@/assets/parked.svg";
import Search from "@/assets/search.svg";
import Setting from "@/assets/setting.svg";

type StatCardProps = {
  driver: {
    name: string;
    icon: string | undefined;
    amount: number;
  };
};

const statCards = [
  {
    name: "Зажигания",
    icon: Ignition,
    amount: 24,
  },
  {
    name: "Движущиеся",
    icon: Moving,
    amount: 32,
  },
  {
    name: "Стоящие",
    icon: Standing,
    amount: 8,
  },
  {
    name: "Припаркованные",
    icon: Parked,
    amount: 17,
  },
];

const StatCard = ({ driver }: StatCardProps) => {
  const { name, icon, amount } = driver;
  return (
    <div className="h-[88px] p-[10px] bg-[#F5F5F5] rounded-[10px]">
      <div className="flex justify-between">
        <span className="text-[16px] font-medium">{name}</span>
        <img src={icon} width={20} height={20} alt="" />
      </div>
      <span className="text-[32px] font-bold">{amount}</span>
    </div>
  );
};

export const DriversStat = () => {
  return (
    <div className="w-[420px] bg-white p-[5px] rounded-b-[10px]">
      <div className="grid grid-cols-2 gap-2">
        {statCards.map((driver) => (
          <StatCard key={driver.name} driver={driver} />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-[8px] mb-[4px]">
        <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-full h-[48px] px-12 py-[12px] bg-[#f5f5f5] rounded-[10px]"
            type="search"
            placeholder="Поиск"
          />
          <img className="absolute top-[14px] left-4" src={Search} alt="" />
        </form>
        <div className="bg-[#f5f5f5] w-[58px] h-[48px] rounded-[10px] flex justify-center items-center hover:ring">
          <img src={Setting} alt="setting" />
        </div>
      </div>
    </div>
  );
};
