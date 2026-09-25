import Link from "next/link";
import Navigation from "../utils/Navigation";
function Header() {

  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <Link
        href="/"
        className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
        aria-label="UTVT, inicio"
      >
        <svg
          className="h-10 w-10 transition-transform duration-200 group-hover:scale-105"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="UTVT"
        >
          <path
            d="M8 18h18l3 28L38 13h7L30 50H17.8 13Z"
            fill="#00843D"
          />
          <path
            d="M20 13h7L42 37L47 13h7L49 50H36L32 31L28 50H18L26 13Z"
            fill="#00A532"
          />
          <path
            d="M18 8H47"
            stroke="#00843D"
            strokeWidth="5"
            strokeLinecap="square"
          />
        </svg>
        <span>UTVT</span>
      </Link>
      
      <Navigation />

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/vercel/next.js/"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          aria-label="Repositorio de GitHub"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.578 2 12.23c0 4.522 2.865 8.352 6.839 9.707 5.004.682 .22.682 .49 0 .24-.009 .877-.014 1.722 2.782.617 3.369 1.373 3.369-3.369-3.369 2.782 1.373 3.369 1.373s3.369-3.369-3.369c2.782.617 3.369 1.373 3.369 3.369-3.369z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;