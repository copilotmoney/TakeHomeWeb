import { gql } from '@apollo/client';
import { useEffect } from 'react';

import { client } from './lib/apollo';

const App = () => {
	useEffect(() => {
		client
			.query({
				query: gql`
					query Birds {
						birds {
							id
							english_name
						}
					}
				`,
			})
			.then((result) => console.log(result.data));
	}, []);

	return <div />;
};

export default App;
