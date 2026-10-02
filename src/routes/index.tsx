import { createFileRoute } from "@tanstack/react-router";
import { Board } from "@/components/reliquary/Board";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="page">
      <Board />
    </main>
  );
}
