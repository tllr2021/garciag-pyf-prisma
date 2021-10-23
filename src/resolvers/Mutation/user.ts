import * as bcrypt from "bcryptjs";
import { Context } from "../../utils";

export default {
  async setPwd(parent, args, ctx: Context) {
    const { password, email } = args.data;
    const encryptedPassword = await bcrypt.hash(password, 10);
    return await ctx.prisma.updateUser({ data: { password: encryptedPassword }, where: { email: email}});
  },
  updateUser: (parent, args, ctx: Context) => ctx.prisma.updateUser(args),
};
