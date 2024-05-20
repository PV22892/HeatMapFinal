"use client";

export default function SiteNav() {
  return (
    <nav className="w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://devscope.net/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/LogoDevScope.png" className="h-8" alt="DevScope Logo" />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a href="/" className="block py-2 px-3 text-orange-700 rounded md:bg-transparent md:p-0 md:dark:text-orange-500 text-xl font-bold" aria-current="page" style={{ color: '#F83C10', backgroundColor: 'transparent' }}>Home</a>
            </li>
            <li>
              <a href="/heatmap" className="block py-2 px-3 text-orange-700 rounded md:bg-transparent md:p-0 md:dark:text-orange-500 text-xl font-bold" aria-current="page" style={{ color: '#F83C10', backgroundColor: 'transparent' }}>Heatmap</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}