import { router } from "../trpc";
import { protectedRouter } from "./auth";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  protected: protectedRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
