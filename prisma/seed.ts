import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { data, tags, user } from "./data";

async function main() {
  const userInstance = await prisma.userProfile.create({
    data: {
      ...user,
    },
  });

  const posts = await Promise.all(
    data.map((post) => {
      return prisma.post.create({
        data: {
          ...post,
          userId: user.id,
          tags: {
            create: [
              {
                tag: {
                  create: {
                    tag:
                      tags[Math.floor(Math.random() * tags.length)] ??
                      "Default",
                  },
                },
              },
            ],
          },
        },
      });
    })
  );

  console.log(userInstance);
  console.log(posts);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
