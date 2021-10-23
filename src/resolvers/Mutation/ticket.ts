import { Context } from "../../utils";

export default {
  createTicket: (parent, args, ctx: Context) => ctx.prisma.createTicket(args.data),
  updateTicket: (parent, args, ctx: Context) => ctx.prisma.updateTicket(args),
};
