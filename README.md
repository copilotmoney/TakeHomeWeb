# Take Home Exercise

This is a take home exercise where we'll build an web app.

Your job is to take the following API and build an app that matches as **closely** as possible the
provided design spec.

The app will display a collection of birds along with some information, and when clicking on a bird,
a detail modal will appear, where users will be able to zoom in on the bird's image and also
register a note on that particular bird.

## Design specs

As part of the assignment, you'll get a link to a Figma document that shows the spec for the
project. A big consideration of the assignment is to recreate the design spec as **closely** as
possible. This aspect of the exercise will be looked at in special detail. Certain aspects of the
UX will be left to the candidate, such as animations. In case you have any questions, you are
encouraged to ask them.

## API and data model

The API will be [GraphQL](https://graphql.org) based and is hosted in
`https://takehome.graphql.copilot.money`. As part of the assignment, you'll get an access
token that you'll need to pass into the `Authorization` header as such:

- `"Authorization": "Bearer <accessToken>"`

The schema for the API is the following:

```graphql
type Query {
	birds: [Bird!]!
	bird(id: ID!): Bird
}

type Mutation {
	addNote(birdId: ID!, comment: String!, timestamp: Int!): ID
}

type Bird {
	id: ID!
	thumb_url: String!
	image_url: String!
	latin_name: String!
	english_name: String!
	notes: [Note!]!
}

type Note {
	id: ID!
	comment: String!
	timestamp: Int! # Milliseconds from epoch.
}
```

As a starting point, a [Vite](https://vite.dev/) app is provided along with a client that you can
use to query and mutate data. You are not required to use this app or client, feel free to
use a different React framework or querying library. If using the existing app feel free to move
the client creation code around for organization purposes, or any other changes you might want to
add. It is only provided for convenience.

## Image Watermarks

All images that will be shown on screen shall be watermarked. In order to watermark, you need to
invoke the following HTTP function:

`POST https://us-central1-copilot-take-home.cloudfunctions.net/watermark`

The body should contain the bytes of the image (should be jpeg, the original format of the bird
URLs), and the headers should contain the `application/octet-stream` Content-Type header, and the
number of bytes in the Content-Length header. The response will have the Content-Length header, the
Content-Type header with `image/jpeg`, and the body will be the bytes of a JPEG image.

Again, if you have any questions or issues, you are encouraged to ask the interviewer.

## Project dependencies

If you need them, feel free to use npm dependencies. Any dependency is also allowed (as long as
they don't abstract large portions of the assignment).

## Delivery

Please clone this repository and create a new private Github repository under your account, giving
read access to the interviewer (or create a public repository if you want to, this is up to you).

Please also send an email to the interviewer letting them know that you've finished the exercise.

## Evaluation points

- UI matches the design spec as closely as possible.
- Handle slow and failed downloads gracefully.
- App responsiveness (handle background tasks efficiently).

## Questions

Feel free to ask any questions to the interviewer throughout the process!
