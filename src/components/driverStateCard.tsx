import { Checkbox } from "antd";
import IconCar from "@/assets/car.png";
import Wireless from "@/assets/wireless.svg";
import Satellite from "@/assets/satellite.svg";
import Key from "@/assets/key.svg";
import GasStation from "@/assets/gasStation.svg";
import LowBattery from "@/assets/lowBattery.svg";
import { Car } from "@/types";
import { useMapContext } from "@/providers/mapProvider";

type DriverStateProps = {
  car: Car;
};

export const DriverStateCard = ({ car }: DriverStateProps) => {
  const { mapRef } = useMapContext();
  return (
    <div
      className="flex flex-col gap-[4px] bg-white rounded-[10px] p-4 w-full h-[96px] cursor-pointer"
      onClick={() => {
        mapRef.current?.flyTo({ lat: car?.latitude, lng: car?.longitude }, 12);
      }}
    >
      <div className="flex gap-[5px] items-center">
        <Checkbox className="custom-checkbox" value={""} onChange={() => {}} />
        <img src={IconCar} width={28} alt="" />
        <div className="w-[176px] flex flex-col text-ellipsis">
          <span>
            {car?.name} {car?.number}
          </span>
          <span>
            {car?.owner.trim()
              ? car?.owner.trim()
              : "Sabridinkhon Sharofidinov"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#2d8aef]">{car?.speed}</span>
          <img src={Wireless} alt="" />
          <img src={Satellite} alt="" />
          <img src={Key} alt="" />
          <img src={GasStation} alt="" />
          <img src={LowBattery} alt="" />
        </div>
      </div>
      <hr />
      <div className="flex gap-8 px-6">
        <span>
          <span className="font-medium">Группа:</span> {car?.name}
        </span>
        <span>
          <span className="font-medium">Пробег:</span> 148 693 км
        </span>
      </div>
    </div>
  );
};
