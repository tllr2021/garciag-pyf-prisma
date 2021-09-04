import { Context } from "../../utils";

export default {
  createTheaterRoom: (parent, args, ctx: Context) => ctx.prisma.createTheaterRoom(args.data),
  updateTheaterRoom: (parent, args, ctx: Context) => ctx.prisma.updateTheaterRoom(args),
};
