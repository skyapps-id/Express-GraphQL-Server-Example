const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    address: { type: AddressType },
    company: { type: CompanyType },
  })
});

const AddressType = new GraphQLObjectType({
  name: 'address',
  fields: () => ({
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString },
    geo: { type: GeoType },
  })
});

const CompanyType = new GraphQLObjectType({
  name: 'company',
  fields: () => ({
    name: { type: GraphQLString },
    catchPhrase: { type: GraphQLString },
    bs: { type: GraphQLString },
  })
});

const GeoType = new GraphQLObjectType({
  name: 'geo',
  fields: () => ({
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  })
});

// Main Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RpptQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => res.data);
      }
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${args.id}`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});