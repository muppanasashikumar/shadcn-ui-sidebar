import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { UserRound } from 'lucide-react';
import { SheetMenu } from "@/components/admin-panel/sheet-menu";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow  dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-semibold !ml-9">Payroll Ancillary Portal</h1>
        </div>
        <div className="flex  gap-2 flex-1 items-center justify-end">
          {/* <ModeToggle /> */}
          {/* <UserNav /> */}
          <UserRound />
          <p className="font-light text-sm">Ramchandra Bangera</p>
        </div>
      </div>
    </header>
  );
}
