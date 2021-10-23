import { Context } from "../utils";

export const Employee = {
  theater: ({ id }, args, ctx: Context) => ctx.prisma.employee({ id }).theater(),
}