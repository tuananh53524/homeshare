import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <div>
       <header className="flex flex-col gap-1 py-2">
            <Logo/>
            <Nav />
       </header>
    </div>
  );
}