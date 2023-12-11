import type { MetaFunction } from "@remix-run/node";

import { NavLink } from "@remix-run/react";
import DemoButton from "~/componentes/ui/DemoButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning TailwindCss" },
    { name: "description", content: "Index" },
  ];
};

export default function Index() {
  return (
    <>
      <ul className="max-w-sm mx-auto bg-blue rounded-sm shadow-lg items-center"> 
        <li><NavLink to="/chitchat">ChitChat</NavLink></li>
        <li><NavLink to="/erin">Erin Lindsay</NavLink></li>
      </ul>

      <DemoButton text="Demo Button" />
    </>
  );
}
