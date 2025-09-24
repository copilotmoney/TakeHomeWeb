import type { PropsWithChildren } from 'react';

import { ApolloProvider } from '@apollo/client';

import { client } from '../lib/apollo';

const ApiProvider = ({ children }: PropsWithChildren) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApiProvider;
