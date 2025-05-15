import CenterNav from "~/components/centernav/CenterNav";
import CtaNav from "~/components/cta/CtaNav";
import Logo from "~/components/logo/Logo";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between mb-20">
          {/* Logo */}
          <Logo />
  
          {/* Center Navigation */}
          <CenterNav />
  
          {/* CTA Button */}
          <CtaNav />
        </nav>
    )
}

export default Navbar;