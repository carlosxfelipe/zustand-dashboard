import type { IconType } from "react-icons";
import {
  IoSpeedometerOutline,
  IoPawOutline,
  IoLogOutOutline,
  IoHeartOutline,
  IoListOutline,
  IoAccessibilityOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";
import { SideMenuItem } from "./SideMenuItem";

interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    subTitle: "Visualizar data",
    href: "/dashboard",
    Icon: IoSpeedometerOutline,
  },
  {
    title: "Ursos",
    subTitle: "Gerenciador de ursos",
    href: "/dashboard/bears",
    Icon: IoPawOutline,
  },
  {
    title: "Pessoa",
    subTitle: "Nome e sobrenome",
    href: "/dashboard/person",
    Icon: IoAccessibilityOutline,
  },
  {
    title: "Tarefas",
    subTitle: "Lista de tarefas",
    href: "/dashboard/tasks",
    Icon: IoListOutline,
  },
  {
    title: "Casamento",
    subTitle: "Convidados para o casamento",
    href: "/dashboard/wedding-invitation",
    Icon: IoHeartOutline,
  },
];

export const SideMenu = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        {/* Title */}
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Zustand
          <span className="text-blue-500 text-xs"> StateManager</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Gerenciador de estados simples, mas poderoso.
        </p>
      </div>

      {/*  Profile */}
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bem-vindo,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <img
              className="rounded-full w-8 h-8"
              src="https://avatars.githubusercontent.com/u/85801709?v=4"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Carlos Felipe</span>
        </a>
      </div>

      {/* Menu Items */}
      <nav id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SideMenuItem key={item.href} {...item} />
        ))}

        {/* Logout */}
        <NavLink to={"/auth/login"} className="mt-10">
          <div>
            <IoLogOutOutline />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Sair
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Terminar sessão
            </span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};
