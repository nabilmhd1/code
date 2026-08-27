import Link from "next/link";

export default function Home() {
  return (
   <main>
    <h1> Collect customer feedback to build better products </h1>
    <div>
      Create a feedback board in minutes, prioritise features, and build a product your customers will love.
    </div>
    <Link href="/dashboard">Dashboard</Link>
   </main>
  );
}
