import { Context, getUser } from "../../utils";

export default {
  users: (parent, args, ctx: Context) => ctx.prisma.users(),
  user: (parent, args, ctx: Context) => ctx.prisma.user(args.where),
  getUserPoints: async (parent, { userId }, ctx:Context) => {
    const user = ctx.prisma.user({ id: userId })
    const card = user.card()
    return await card.points()
  }
};
