import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetClose,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navItems } from "@/constants/navbar";
// import SideBar from "@/components./sideBar";
const MobileSidebar = ({
  scrollToSection,
}: {
  scrollToSection: (href: string) => void;
}) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-50 transition cursor-pointer">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent side="right" className="">
        <div className="bg-glass/95 backdrop-blur-md border-t border-glass">
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/20 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
