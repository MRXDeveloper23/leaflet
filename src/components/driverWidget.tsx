import { DriverStateCard } from "@/components/driverStateCard";
import { DriversStat } from "@/components/driversStat";
import Refresh from "@/assets/refresh.svg";
import Sitemap from "@/assets/sitemap.svg";
import Sort from "@/assets/sort.svg";
import Speed from "@/assets/speed.svg";
import Internet from "@/assets/internet.svg";
import GPS from "@/assets/gps.svg";
import Lock from "@/assets/lock.svg";
import Fuel from "@/assets/fuel.svg";
import Battery from "@/assets/battery.svg";
import { Checkbox } from "antd";
import { useBaseQuery } from "@/hooks/useBaseQuery";
import { Car } from "@/types";

export const DriverWidget = () => {
  const { data } = useBaseQuery(
    ["positions"],
    "http://app.maxtrack.uz:8080/positions",
    {
      method: "POST",
      body: JSON.stringify({
        fleetID: "2036",
        userName: "rpp",
      }),
    }
  );
  return (
    <div>
      <DriversStat />
      <div className="my-2 px-4 flex items-center justify-between">
        <div className="flex gap-2">
          <Checkbox value={""} onChange={() => {}} />
          <div className="w-[32px] h-[32px] rounded-[10px] bg-[#fcfcfc] flex items-center justify-center">
            <img src={Refresh} alt="" />
          </div>
          <div className="w-[32px] h-[32px] rounded-[10px] bg-[#fcfcfc] flex items-center justify-center">
            <img src={Sitemap} alt="" />
          </div>
          <div className="w-[32px] h-[32px] rounded-[10px] bg-[#fcfcfc] flex items-center justify-center">
            <img src={Sort} alt="" />
          </div>
        </div>
        <div className="flex gap-[2px]">
          <img src={Speed} alt="speed" />
          <img src={Internet} alt="internet" />
          <img src={GPS} alt="internet" />
          <img src={Lock} alt="internet" />
          <img src={Fuel} alt="internet" />
          <img src={Battery} alt="internet" />
        </div>
      </div>
      <div className="pr-[4px] flex flex-col gap-2 h-[400px] overflow-auto">
        {data?.update[0]?.data.map((car: Car) => {
          return <DriverStateCard key={car.id} car={car} />;
        })}
      </div>
    </div>
  );
};
