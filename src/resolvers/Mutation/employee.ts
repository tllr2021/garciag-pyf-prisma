import * as bcrypt from "bcryptjs";
import { Context } from "../../utils";

export default {
  updateEmployeeByPayroll(parent, args, ctx: Context) {
    const { payrollNumber, data } = args;
    return ctx.prisma.updateEmployee({ data: { ...data }, where: { payrollNumber: payrollNumber}});
  },
  customCreateEmployee: async (parent, args, ctx: Context) => {
    const password = await bcrypt.hash(args.data.password, 10)
    const payrollNumber = Math.floor(Math.random() * (99999-10000 + 1) + 10000);
    const salaryPerDay = 220.00;
    const paymentDue = salaryPerDay * args.data.workDays.set.length * 2;
    return await ctx.prisma.createEmployee({...args.data, payrollNumber: payrollNumber, paymentDue: paymentDue, password: password})
  },
};
