import { router, publicProcedure } from "../trpc";

export const postsRouter = router({
  jobs: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
