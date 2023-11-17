import { AlignRight, Menu, Search } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex h-20 justify-between items-center px-2 sm:max-w-7xl sm:mx-auto">
      <div className="div">
        <Menu className="md:hidden" />

        <div className="meni-link text-base hidden md:flex items-center space-x-8 uppercase">
          <Link to="/" className="hover:text-[#1239AC] font-extrabold">
            Home
          </Link>
          <Link to="/" className="hover:text-[#1239AC] font-extrabold">
            Services
          </Link>
          <Link to="/" className="hover:text-[#1239AC] font-extrabold">
            About
          </Link>
          <Link to="/" className="hover:text-[#1239AC] font-extrabold">
            Contact
          </Link>
        </div>
      </div>
      <div className="logo">
        <img src="/logo.png" alt="logo" className="h-20 w-20 object-contain" />
      </div>
      <div className="actions flex items-center space-x-4 xl:space-x-8">
        <Search />
        <AlignRight className="hidden md:block" />
      </div>
    </div>
  )
}
