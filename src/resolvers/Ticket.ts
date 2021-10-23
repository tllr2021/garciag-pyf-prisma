import { Context } from "../utils";

export const Ticket = {
  movie: ({ id }, args, ctx: Context) => ctx.prisma.ticket({ id }).movie(),
  seat: ({ id }, args, ctx: Context) => ctx.prisma.ticket({ id }).seat(),
  theaterRoom: ({ id }, args, ctx: Context) => ctx.prisma.ticket({ id }).theaterRoom(),
}