This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies:
```bash
npm install
```

Build and run the application:

```bash
npm run build && npm run start
```

Ensure the API server is running.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

 - Uses Next.js to facilitate Server-Side Rendering, retrieving API data on the server, handling of building / bundling / ES6 transpilation / etc.
 - Uses [Axios](https://github.com/axios/axios) to perform API requests to easily facilitate caching of requests, and automatic retry on idempotent requests that return a 5xx status code.

## Thoughts for Improvement

 - Could use TypeScript to expose expected props for components and enable strict type-checking.
 - Could use Context API or State management library to hoist state (eg filters state) so that state is remembered across page navigations.
- Could add sorting / grouping options for files grid.
- Files grid could incorporate additional API fields, eg. `live`, `popularity`, `scheduled`, times, etc.
- API error reporting could be more explicit, but keeping it simple for the sake of this demo, and to demonstrate graceful handling of the dodgy users endpoint.
- Unit tests would be helpful.
