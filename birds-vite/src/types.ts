export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Bird = {
  __typename?: 'Bird';
  english_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image_url: Scalars['String']['output'];
  latin_name: Scalars['String']['output'];
  notes: Array<Note>;
  thumb_url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNote?: Maybe<Scalars['ID']['output']>;
};

export type MutationAddNoteArgs = {
  birdId: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  timestamp: Scalars['Int']['input'];
};

export type Note = {
  __typename?: 'Note';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  bird?: Maybe<Bird>;
  birds: Array<Bird>;
};

export type QueryBirdArgs = {
  id: Scalars['ID']['input'];
};
