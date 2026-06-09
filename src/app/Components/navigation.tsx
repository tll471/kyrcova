export function Navigation() {
  return (
    <div className="flex flex-row justify-center gap-5 bg-[#FACC15] fixed w-full h-[110px] items-center z-50">
      <div className="font-normal text-[30px] tracking-normal flex flex-row w-[810px] h-[68px] justify-between items-center mr-150">

        <p>LOGO</p>

        <div className="relative group">
          <p>Category</p>

          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col shadow-lg rounded-md p-3 text-[20px] bg-[#FACC15] w-40 text-center gap-5">
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
            <p className="bg-[#FACC15] px-3 py-1">Мда</p>
          </div>
        </div>

        <p>About us</p>
        <p>Help⬇</p>

      </div>
    </div>
  );
}