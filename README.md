A boilerplate API app written in Typescript to learn [Koa.js](https://koajs.com/)

While it didn't start out this way, this project eventually morphed into a clone of [koalerplate](https://github.com/dbalas/koalerplate), except that I'm using Typescript.

## Development

1. Clone the repo
1. `yarn` to install packages
1. Copy `.env.example` to `.env` and fill out the `PORT`
1. `yarn dev` to run. The command uses `tsc-watch`, which will only start the server if the typescript compiles without errors.
