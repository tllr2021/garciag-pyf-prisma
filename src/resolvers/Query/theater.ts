import { Context } from "../../utils";

export default {
  theaters: (parent, args, ctx: Context) => ctx.prisma.theaters(),
  theater: (parent, args, ctx: Context) => ctx.prisma.theater(args.where),
};
