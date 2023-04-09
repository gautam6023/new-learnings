import db from "@/lib/db";

export default async function Home() {
  db.set("test", "test");
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24"></div>
  );
}
