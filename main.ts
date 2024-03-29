import { app } from "./app.ts";

const port = +(Deno.env.get("PORT") ?? 3000);

if (import.meta.main) {
  const server = app({ port });

  Deno.addSignalListener("SIGINT", () => {
    server.shutdown();
  });

  await server.finished;
}
