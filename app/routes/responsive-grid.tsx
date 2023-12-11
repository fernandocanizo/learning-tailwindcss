import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Responsive Grid" },
    { name: "description", content: "Responsive Grid" },
  ];
};

export default function Index() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>Six</div>
      <div>Seven</div>
      <div>Eight</div>
    </div>
  );
}
