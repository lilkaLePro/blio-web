import { getFullName } from '@/lib/utils';
import { useAuthHook } from '@/main/auth/auth.hook';
import {
  userCurrentUserStore
} from '@/main/auth/store';
import { HandHelping, LayoutDashboard, LucideBook, User } from 'lucide-react';
import { useEffect } from 'react';
import { NavLink } from './navLink';

const dataLinks = [
  { link: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { link: 'Livres', icon: LucideBook, href: '/dashboard/books' },
  { link: 'Abonnés', icon: User, href: '/dashboard/subcribers' },
  { link: 'Prêts', icon: HandHelping, href: '' },
];
export const SideBar = () => {
  const firstname = userCurrentUserStore((state) => state?.firstname);
  const lastName = userCurrentUserStore((state) => state?.lastname);
  const updateLastname = userCurrentUserStore.use.setLastname();
  const updateFirstname = userCurrentUserStore.use.setFirstname();
  const updateID = userCurrentUserStore.use.setId() ;

  const { currentUserData } = useAuthHook();
  useEffect(() => {
    updateFirstname(currentUserData?.user?.firstname);
    updateLastname(currentUserData?.user?.lastname);
    updateID(currentUserData?.user?._id);
  }, [currentUserData]);
  
  const user = {
    firstname: firstname,
    lastname: lastName,
  };

  return (
    <div className="h-full max-w-72 w-full p-3">
      <div className="border h-full rounded-md flex flex-col justify-between">
        <div>
          <div className="border h-20"></div>
          <div className="px-2 py-5">
            {dataLinks?.map((data, index) => (
              <div className="py-1">
                <NavLink
                  href={data?.href}
                  link={data?.link}
                  icone={data?.icon}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border flex gap-3 p-2 items-center">
          <div className="size-12 border rounded-full"></div>
          <p className="font-semibold text-sm">
            {' '}
            {getFullName(user)}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
