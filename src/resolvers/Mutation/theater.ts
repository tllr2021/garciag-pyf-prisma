import { Context } from "../../utils";

export default {
  createTheater: (parent, args, ctx: Context) => ctx.prisma.createTheater(args.data),
  updateTheater: (parent, args, ctx: Context) => ctx.prisma.updateTheater(args),
};
