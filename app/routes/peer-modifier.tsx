import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Peer Modifier" },
    { name: "description", content: "Styling based on sibling state" },
  ];
};

export default function Index() {
  return (
    <form>
      <label className="block">
      <span className="block text-sm font-medium text-slate-700">Email</span>
        <input type="email" className="peer"/>
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      </label>
    </form>
  );
}
