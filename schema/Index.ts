import 'graphql-import-node';
import {makeExecutableSchema} from '@graphql-tools/schema'
import  { resolvers } from './queryresolvers';
import typeDefs from "./schema.graphql";

export const userschema=makeExecutableSchema({
        typeDefs,
        resolvers
    })