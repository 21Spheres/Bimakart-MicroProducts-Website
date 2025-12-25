export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* <Logo /> */}

        <nav className="flex items-center gap-6 text-sm font-medium">
          <a>PolicyHawaldar</a>
          <a>About</a>
          <a>Claim Support</a>
          <a>Contact</a>
        </nav>

        <button className="border px-3 py-1.5 rounded-md text-sm">
          Select Language
        </button>
      </div>
    </header>
  );
}
