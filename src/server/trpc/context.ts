import { type User } from "@clerk/nextjs/dist/api";

import type  * as trpcNext from '@trpc/server/adapters/next';

import { type inferAsyncReturnType } from "@trpc/server";

import { prisma } from "../db/client";
import { getAuth, clerkClient } from "@clerk/nextjs/server";

interface userData {
  user: User | null
}

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async ({ user }: userData) => {
  return { user, prisma }
}

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  async function getUser() {
    const { userId } = getAuth(opts.req)
    const user = userId ? await clerkClient.users.getUser(userId) : null
    return user
  }

  const user = await getUser()

  return await createContextInner({ user })
}


export type Context = inferAsyncReturnType<typeof createContext>;
