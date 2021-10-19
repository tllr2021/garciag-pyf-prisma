import { Context } from "../../utils";

export default {
  theaterRooms: (parent, args, ctx: Context) => ctx.prisma.theaterRooms(),
  theaterRoom: (parent, args, ctx: Context) => ctx.prisma.theaterRoom(args.where),
};
