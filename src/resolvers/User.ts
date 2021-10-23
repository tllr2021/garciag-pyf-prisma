import { Context } from "../utils";

export const User = {
  card: ({ id }, args, ctx: Context) => ctx.prisma.user({ id }).card()
}