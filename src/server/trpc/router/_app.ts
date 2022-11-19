import { router } from "../trpc";
import { protectedRouter } from "./auth";
import { exampleRouter } from "./example";
import { jobsRouter } from "./jobsRouter";

export const appRouter = router({
  example: exampleRouter,
  protected: protectedRouter,
  jobs: jobsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
