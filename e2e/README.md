# Playwright testing

This directory provides `docker-compose.yml` to test or regenerate screenshots.

-   run `npm run build` from all examples
-   run either one of those commands:
    -   testing: `docker-compose -f ./e2e/docker-compose.yml up`
    -   update screenshots (all): `docker-compose -f ./e2e/docker-compose.regenerate.yml up`


## Update Playwright Version and rebuild

-   run `docker-compose -f ./e2e/docker-compose.yml build`

