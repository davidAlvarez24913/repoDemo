import { User } from "../../db/Entities";
export const userResolvers = {
  Query: {
    usersCount: async () => (await User.find()).length,
    allUsers: async () => await User.find(),
    findUser: async (root: any, args: any) => {
      const { id } = args;
      return await User.findOneBy({ userId: id });
    },
  },

  Mutation: {
    createUser: async (root: any, { input }: any) => {
      const result = await User.insert(input);
      return { ...input, id: result.identifiers[0].id };
    },
    deleteUser: async (root: any, args: any) => {
      const result = await User.delete(args.id);
      if (result.affected === 1) return true;
      return false;
    },
    updateUser: async (root: any, { input }: any) => {
      const result = await User.update(
        { userId: input.id },
        {
          name: input.name,
        }
      );
      if (result.affected === 1) return { ...input };
      return false;
    },
  },
};
