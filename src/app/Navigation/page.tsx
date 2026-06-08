import Link from "next/link";

export function Navigation() {
  return (
    <div className="flex flex-row gap-5 m-0 m-auto">
      <Link href='/about'>Інтернет-магазин</Link>
      <Link href='/about'>Огляд</Link>
      <Link href='/about'>Допомога</Link>
    </div>
  );
}