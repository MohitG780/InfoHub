import Link from "next/link";
import Image from 'next/image';
import { OrganizationSwitcher, SignedIn, SignOutButton} from "@clerk/nextjs";

function Topbar() {
  return (
    
      <nav className="topbar">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
          <p className="text-heading3-bold text-light-1 max-xs:hidden">InfoHub</p>
        </Link>



        <div className="flex items-center gap-1">
      <div className="block ">
        <SignedIn>
        <SignOutButton>
            <div className="flex cursor-pointer">
             <Image
             src="/assets/logout.svg"
             alt="logout"
             width={24}
             height={24} />
            </div>
        </SignOutButton>
        </SignedIn>

      </div>
      <OrganizationSwitcher
      appearance={{
        elements:{
            organizationSwitcherTrigger:"px-2 py-4"
        }
      }
      }/>
      </div>
      </nav>

      

  );
}

export default Topbar;
