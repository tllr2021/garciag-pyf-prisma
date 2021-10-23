import { Context } from "../utils";

export const Theater = {
  billboard: ({ id }, args, ctx: Context) => ctx.prisma.theater({ id }).billboard(),
  theaterRooms: ({ id }, args, ctx: Context) => ctx.prisma.theater({ id }).theaterRooms(),
}