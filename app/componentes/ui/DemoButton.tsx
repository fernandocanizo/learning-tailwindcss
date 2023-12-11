export default function DemoButton({ text }: { text: string }) {
  return (
	<button className="bg-sky-500 hover:bg-red-300 md:hover:bg-fuchsia-600">
	  {text}
	</button>
  );
}
