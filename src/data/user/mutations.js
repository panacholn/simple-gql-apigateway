import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';
import {UserModel, UserType, UserInput} from './models';

const UserCreate = {
  description: "Create new user",
  type: GraphQLBoolean,
  args: {
    data: {
      name: "data",
      type: new GraphQLNonNull(UserInput)
    }
  },
  async resolve (root, params, options) {
    const userModel = new UserModel(params.data);
    const newUser = await userModel.save();
    if (!newUser) {
      throw new Error('Error adding new user');
    }
    return true;
  }
};

const UserUpdate = {
  description: "Update existing user",
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: "data",
      type: new GraphQLNonNull(UserInput)
    }
  },
  async resolve (root, params, options) {
    const updateUser = await UserModel
      .findOneAndUpdate({ _id: params.id }, params.data)
      .exec();  // return JSON
    if (!updateUser) {
      throw new Error('Error update user');
    }
    return true;
  }
};

const UserDelete = {
  description: "Delete user",
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const deleteUser = await UserModel
      .findByIdAndRemove(params.id)
      .exec();  // return JSON
    if (!deleteUser) {
      throw new Error('Error delete user');
    }
    return true;
  }
};

export default {
  UserCreate: UserCreate,
  UserUpdate: UserUpdate,
  UserDelete: UserDelete,
}
