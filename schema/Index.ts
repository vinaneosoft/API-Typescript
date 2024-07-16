import 'graphql-import-node';
import {makeExecutableSchema} from '@graphql-tools/schema'
import  { resolvers } from './resolvers';
import typeDefs from "./schema.graphql";

export const userschema=makeExecutableSchema({
        typeDefs,
        resolvers
    })