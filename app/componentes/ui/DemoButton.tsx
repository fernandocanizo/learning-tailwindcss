export default function DemoButton({ text }: { text: string }) {
  return (
	<button className="bg-violet-500 hover:bg-violet-600 active:bg-black active:text-white focus:outline-none focus:ring focus:ring-violet-300">
	  {text}
	</button>
  );
}
