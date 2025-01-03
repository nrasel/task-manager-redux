import { Link } from "react-router-dom";
import { ModeToggle } from "../mode.toogle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl ml-auto h-16 flex items-center justify-center gap-3 px-5">
      <div>
        <span className="font-bold text-2xl mr-7">Task</span>
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
