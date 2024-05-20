export default function Footer() {
  return (
    <footer className="mt-auto">
      <nav className="w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://ipv.pt/en/" className="flex items-center rtl:space-x-reverse">
            <img src="/LogoIPV.png" className="h-16" alt="Logo IPV" />
          </a>
          <a href="https://www.estgv.ipv.pt/estgv/" className="flex items-center rtl:space-x-reverse">
            <img src="/LogoESTGV.png" className="h-24" alt="Logo ESTGV" />
          </a>
          <a href="https://www.di.estgv.ipv.pt/" className="flex items-center rtl:space-x-reverse">
            <img src="/LogoDPInformatica.png" className="h-12" alt="Logo Departamento Informática " />
          </a>
        </div>
      </nav>
    </footer>
  );
}