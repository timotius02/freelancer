import { router, publicProcedure } from "../trpc";

export const jobsRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
