export const notFoundHandler: Deno.ServeHandler = () =>
  new Response("Not Found", {
    status: 404,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
