import { Context } from "../../utils";

export default {
  employees: (parent, args, ctx: Context) => ctx.prisma.employees(),
  employee: (parent, args, ctx: Context) => ctx.prisma.employee(args.where),
};
