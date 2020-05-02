# Infinite Figthing

A simple static webpage that use nuxt and Vue to display image stored on a cdn ( cloudinary ) side by side in an  infinite vertical scrolling .

The interessting part are that :

- this is a static website that can be deploy on cheap host (github or netfly are good candidate )
- it use image stored on cloudinary, or other cdn, meaning you got a scalable solution


## Setup

Create a .env file from the [.env.example file](.env.example) and fill it up

This setup use a [cloudinary account](https://cloudinary.com/users/register/free) ( google drive api **W.I.P.**). The free plan is enough for most of us.
The image must be  stored in the galleries/monsters folder. Other wiser change it in your .env

The deploy command is set up to deploy on gh-pages but feel free to make your own

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

To deploy on github :

```
yarn deploy
```
