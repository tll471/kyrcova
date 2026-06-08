import Link from "next/link";

export function Navigation() {
  return (
    <div className="flex flex-row justify-center gap-5 bg-blue-100">
    <Link href="/about">Інтернет-магазин</Link>
    <Link href="/about">Огляд</Link>
    <Link href="/about">Допомога</Link>
    </div>
  );
}