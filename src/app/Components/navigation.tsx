import Link from "next/link";

export function Navigation() {
  return (
    <div className="flex flex-row justify-center gap-5 bg-[#FACC15] fixed w-full h-[110px] items-center z-100">
      <div className="font-normal text-[30px] tracking-normal flex flex-row w-[810px] h-[68px] justify-between flex items-center mr-150">
        <p>LOGO</p>
        <p>Category⬇</p>
        <p>About us</p>
        <p>Help⬇</p>
      </div>
    </div>
  );
}