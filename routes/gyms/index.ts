import { notFoundHandler } from "../notFound.ts";
import db from "../../data/db.json" assert { type: "json" };

export const patterns: URLPattern[] = [
  new URLPattern({ pathname: "/gyms" }),
  new URLPattern({ pathname: "/gyms/" }),
  new URLPattern({ pathname: "/gyms/:id" }),
];

const articlesHandler: Deno.ServeHandler = () =>
  new Response(JSON.stringify(db.gyms), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });

const articleHandler = (id: string): Deno.ServeHandler => {
  const article = db.gyms.find((a) => `${a.id}` === id);

  if (!article) {
    return notFoundHandler;
  }

  return () =>
    new Response(JSON.stringify(article), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    });
};

export const handler = (match: URLPatternResult): Deno.ServeHandler => {
  const articleId = match.pathname.groups.id;
  if (articleId) {
    return articleHandler(articleId);
  }

  return articlesHandler;
};
