import { navigationItems } from "@/app/data/navigation-items";
import NavigationLink from "./NavegationLink";

function Navigation() {
  return (
    <nav aria-label="Navegación principal">
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <NavigationLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;