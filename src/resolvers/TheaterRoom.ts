import { Context } from "../utils";

export const TheaterRoom = {
  seats: ({ id }, args, ctx: Context) => ctx.prisma.theaterRoom({ id }).seats(),
}