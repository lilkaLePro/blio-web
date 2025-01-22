import { SideBar } from '@/components/sideBar';
import { Outlet } from 'react-router';

export const Dashboard = () => {
  return (
    <div className="flex gap-10 h-screen w-full">
      <SideBar />
      <div className="w-full h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};
