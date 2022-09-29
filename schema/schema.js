const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType,
       GraphQLString,
       GraphQLInt,
       GraphQLSchema} = graphql

const users = [
    {"id": "10", "firstName":"Viswa", "age":24},
    {"id": "11", "firstName":"Swarna", "age":25},
    {"id": "12", "firstName":"Beni", "age":24},
    {"id": "13", "firstName":"Jagan", "age":22},
    {"id": "14", "firstName":"Janani", "age":33},
    {"id": "15", "firstName":"Sai", "age":23}
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id:{type: GraphQLString},
        firstName:{type: GraphQLString},
        age:{type: GraphQLInt}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue, args){
                return _.find(users,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})