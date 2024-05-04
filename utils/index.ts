type Handler = (req: Request) => Promise<Response>;

export function withTryCatch(fn: Handler): Handler {
  return async (req: Request) => {
    try {
      return await fn(req);
    } catch (error) {
      if (error instanceof Error) {
        return Response.json({ error: error.toString() });
      }
      return Response.json({ error: "unexpected" });
    }
  };
}
