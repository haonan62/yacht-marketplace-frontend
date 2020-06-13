# Discovery Sailing Asia: Bareboat marketplace

## Quick start

If you just want to get the app running quickly to test it out, first install
[Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/), and follow along:

```sh
git clone https://github.com/haonan62/yacht-marketplace-frontend.git      # clone this repository
cd ftw-daily/                                          # change to the cloned directory
yarn install                                                   # install dependencies
yarn run config                                                # add the mandatory env vars to your local config
yarn run dev                                                   # start the dev server, this will open a browser in localhost:3000
```
**Note:** On certain windows platforms, yarn run config would return error due to system call fails, in that case, run the command in linux or mac environment and copy .env back to windows platform

## Deployment

**Note:** Common modes of deployment are public virtual machines, heroku app serives. If you are dealing
with a private server with only cpanel access, please contact system admin.


## Documentation

See the Backend Docs site: https://www.sharetribe.com/docs/

See also the [docs/](docs/) directory for some additional internal documentation.


## License

This project is licensed under the terms of the Apache-2.0 license.

See [LICENSE](LICENSE)
