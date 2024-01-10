import { handler } from "./routes/router.ts";

interface AppOtions {
  port: number;
}

type App = (
  options?: Partial<AppOtions>,
) => void;

export const app: App = (options = {}) => {
  Deno.serve(options, handler);
};
