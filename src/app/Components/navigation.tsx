import Link from "next/link";

export function Navigation() {
  return (
    <div className="flex flex-row justify-center gap-5 bg-[#FACC15] fixed w-full h-[110px] items-center z-50">
      <div className="font-normal text-[30px] tracking-normal flex flex-row w-[1250px] h-[68px] justify-center items-between mr-40">

        <Link href = '/' className="w-full h-full flex items-center"><img src="/pictures/Logo.png" alt="logo" className="-ml-5.5"/></Link>
        <div className="flex flex-row items-center gap-40 w-900 justify-center">
          <div className="relative group py-5">
          <div className="flex flex-row items-center">
            <p>Category</p>
            <img src='/pictures/down.png' className="w-[24px] h-[12px]"></img>
          </div>
          

          <div className="absolute left-0 top-full hidden group-hover:flex flex-col shadow-lg rounded-md p-3 text-[20px] bg-[#FACC15] w-40 text-center gap-5">
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
          </div>
        </div>

        <Link href="/Pages/about">About us</Link>

          <div className="relative group py-5">
            <div className="flex flex-row items-center">
              <p>Help</p>
              <img src="/pictures/down.png" className="w-[24px] h-[12px]" />
            </div>

            <div className="absolute left-0 top-full hidden group-hover:flex flex-col shadow-lg rounded-md p-3 text-[20px] bg-[#FACC15] w-120 text-center gap-5">
              <Link href="/Pages/assembly" className="px-3 py-1">Find Assembly Instructions</Link>
              <Link href="/Pages/questions" className="px-3 py-1">Frequently Asked Questions (FAQ)</Link>
              <Link href="/Pages/contact" className="px-3 py-1">Contact Us</Link>
              <p className="px-3 py-1">Replacement Parts</p>
            </div>
          </div>
        </div>
      </div>
      <input type="text" placeholder="Search..." className="w-[390px] h-[44px] px-4 rounded-[50px] border bg-white text-[18px] -ml-[190px]" />
      <img src="/pictures/Search.png" alt="search" className="-ml-[70px]"/>
    </div>
  );
}