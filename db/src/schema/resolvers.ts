import { userResolvers } from "./User/userResolvers";
import { serviceResolvers } from "./Service/serviceResolvers";
import { sportCenterResolvers } from "./SportCenter/sportCenterResolvers";
import { reservationResolvers } from "./Reservation/reservationResolver";

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...serviceResolvers.Query,
    ...sportCenterResolvers.Query,
    ...reservationResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...sportCenterResolvers.Mutation,
    ...reservationResolvers.Mutation,
  },
};
export default resolvers;
