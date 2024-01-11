import { handler } from "./routes/router.ts";

interface AppOptions {
  port: number;
}

export const app = (options: Partial<AppOptions> = {}) =>
  Deno.serve(options, handler);
