import * as articlesRoute from "./gyms/index.ts";

const match = (
  rawUrl: string,
  patterns: URLPattern[],
): URLPatternResult | null => {
  for (const p of patterns) {
    const m = p.exec(rawUrl);
    if (m) return m;
  }

  return null;
};

export const handler: Deno.ServeHandler = (req, connInfo) => {
  const m = match(req.url, articlesRoute.patterns);

  if (m) {
    return articlesRoute.handler(m)(req, connInfo);
  }

  return new Response("Welcome Tops API!");
};
