import { CodegenConfig } from '@graphql-codegen/cli';

const token = process.env.VITE_ACCESS_TOKEN || 'Go0HmtHPjDq077CIYGKs';
const endpoint = process.env.GRAPHQL_ENDPOINT;
console.log(token, endpoint);

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:5173/api/graphql': {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  ],
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
