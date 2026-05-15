"use client"

import client from "@/services/apollo";
import { ApolloProvider } from "@apollo/client/react";

export default function AuthLayout({
        children,
    } : {
        children: React.ReactNode;
    }) {
        return <ApolloProvider client={client}> {children} </ApolloProvider>;
} 
