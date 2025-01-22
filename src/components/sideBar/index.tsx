import { NavLink } from './navLink';
import { HandHelping, LayoutDashboard, LucideBook, LucideBookMinus, User } from 'lucide-react';

const data = [
  { link: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { link: 'Livres', icon: LucideBook, href: '/dashboard/books'},
  { link: 'Abonnés', icon: User, href: '/dashboard/subcribers'},
  { link: 'Prêts', icon: HandHelping, href: ''}
];

export const SideBar = () => {
  return (
    <div className='h-full border max-w-xs w-full'>
      <div className='border h-[100px]'>

      </div>
      <div className='px-2 py-5'>
        {data?.map((data, index) => (
          <div className='py-1'>
            <NavLink
              href={data?.href}
              link={data?.link}
              icone={data?.icon}
              key={index}
            />
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};
