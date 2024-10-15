import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
  isOpen: boolean | undefined;
  setIsOpen?: () => void;
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className="invisible lg:visible absolute top-[12px] -right-[60px] z-20">
      <Button
        onClick={() => setIsOpen?.()}
        className="rounded-md w-8 h-8 text-black"
        variant="outline"
        size="icon"
      >
        <Menu
          className={cn(
            "h-4 w-4 transition-transform ease-in-out duration-700"
          )}
        />
      </Button>
    </div>
  );
}
