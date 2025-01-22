interface NavLinkProps {
  link: string;
  href: string;
  icone: React.ElementType;
}

export const NavLink = ({ href, link, icone: Icon  }: NavLinkProps) => {

  return (
    <a href={href} className="flex gap-5 hover:bg-gray-100 p-2 transition-all rounded-md">
      <Icon className="stroke-2" />
      <span> {link} </span>
    </a>
  );
};
