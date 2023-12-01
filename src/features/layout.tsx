import { ReactNode } from "react";
import Logo from "../assets/logo.svg?react";
import EMail from "../assets/e-mail.svg?react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-black-1 h-16 w-full flex items-center justify-center">
        <Logo width={160} height={36} className="text-white" />
      </header>
      {children}
      <footer className="w-full text-gray-2 px-[150px] mt-[60px]">
        <Logo width={84} height={19} className="text-gray-2" />

        <div className="flex h-[81px] justify-between text-[13px] font-semibold py-5">
          <span>©Formula 2023. All Rights Reserved</span>
          <span className="flex gap-2 items-center">
            <EMail width={20} height={20} /> info@formula.com
          </span>
        </div>
      </footer>
    </div>
  );
}
