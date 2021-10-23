import { Context } from "../../utils";

export default {
  customCreateProductSale: async (parent, args, ctx: Context) => {
    const userID = args.data.user.connect.id
    const user = ctx.prisma.user({id: userID})
    const card = await user.card()
    const currentPoints = card.points

    const gainedPoints = Math.floor((args.data.total / 10))
    const newPoints = currentPoints + gainedPoints
    
    ctx.prisma.updateCard({ data: { points: newPoints }, where: { id: card.id } })

    return ctx.prisma.createProductSale({ ...args.data })
  },
  customCreateTicketSale: async (parent, args, ctx: Context) => {
    const userID = args.data.user.connect.id
    const user = ctx.prisma.user({id: userID})
    const card = await user.card()
    const currentPoints = card.points

    const gainedPoints = Math.floor((args.data.total / 10))
    const newPoints = currentPoints + gainedPoints

    ctx.prisma.updateCard({ data: { points: newPoints }, where: { id: card.id } })
    
    return ctx.prisma.createTicketSale({ ...args.data })
  },
};
