import type { MetaFunction } from "@remix-run/node";

import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning TailwindCss" },
    { name: "description", content: "Index" },
  ];
};

export default function Index() {
  return (
    <ul> 
      <li><NavLink to="/chitchat">ChitChat</NavLink></li>
      <li><NavLink to="/erin">Erin Lindsay</NavLink></li>
    </ul>
  );
}
