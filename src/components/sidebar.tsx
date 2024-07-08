import Logo from "@/assets/logo.svg";
import { IconBase } from "@/utils/icons/base";
import { IconGrid } from "@/utils/icons/grid";
import { IconMenu } from "@/utils/icons/menu";
import { IconNotification } from "@/utils/icons/notification";
import { IconQuestion } from "@/utils/icons/question";
import { IconServer } from "@/utils/icons/server";
import { IconSettings } from "@/utils/icons/settings";
import Avatar from "@/assets/avatar.png";

export const Sidebar = () => {
  return (
    <aside className="w-[80px] h-screen flex flex-col justify-between px-[20px] py-[20px]">
      <div>
        <div className="logo rounded-[10px] overflow-hidden">
          <img src={Logo} alt="" />
        </div>
        <nav>
          <ul className="flex flex-col items-center gap-4 mt-8">
            <li className="w-[40px] h-[40px] p-2 rounded-[10px] bg-[#D1E9FF] flex justify-center items-center">
              <IconBase />
            </li>
            <li>
              <IconMenu />
            </li>
            <li>
              <IconGrid />
            </li>
            <li>
              <IconServer />
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className="flex flex-col items-center gap-4 mb-8">
          <li>
            <IconNotification />
          </li>
          <li>
            <IconQuestion />
          </li>
          <li>
            <IconSettings />
          </li>
        </ul>
        <img src={Avatar} alt="" />
      </div>
    </aside>
  );
};
