import clsx from "clsx";
import { useLocation } from "react-router";

interface NavLinkProps {
  link: string;
  href: string;
  icone: React.ElementType;
}

export const NavLink = ({ href, link, icone: Icon  }: NavLinkProps) => {
  const location = useLocation();
  
  return (
    <a href={href} className={clsx("flex gap-5 hover:bg-green-50 p-2 transition-all rounded-md hover:text-accent", {
      "bg-green-100 text-accent" : location.pathname == href || location.pathname == `${href}/${location.pathname.split('/')[3]}`
    })}>
      <Icon className="stroke-2" />
      <span> {link} </span>
    </a>
  );
};
