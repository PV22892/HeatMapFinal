import Image from "next/image";
import Link from "next/link";
import SiteNav from "./site-nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <SiteNav />
    </header>
  );
}