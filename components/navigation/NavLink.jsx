import Link from "next/link";
import clsx from "clsx";

export const NavLink = ({ url, label, isActive }) => {
  const defaultStyle = "mr-1";
  const activeStyle = "border-b boder-slate-900";

  return (
    <li className={clsx(defaultStyle, isActive && activeStyle)}>
      <Link href={url}>
        <a className="flex text-gray-600 hover:bg-slate-200 cursor-pointer transition-colors duration-300 m-2 p-5 rounded-lg">
          {label}
        </a>
      </Link>
    </li>
  );
};
