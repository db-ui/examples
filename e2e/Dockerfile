FROM mcr.microsoft.com/playwright:v1.50.1 as playwright

COPY e2e /e2e
COPY build/ build/

WORKDIR /e2e

# Run playwright test
CMD [ "npm", "run", "test" ]
