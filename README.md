# Valor public website

The request, contact, and emergency forms submit to `POST /api/v1/public/website-enquiries`. A successful response includes a reference code, and administrators review submissions under **Communication → Website Enquiries**.

For local development, start the Backend on port 8081 and Gateway on port 8080, then run `npm run dev`. Vite proxies `/api` to the Gateway. To host the website on a different origin, set `VITE_API_BASE_URL` to the Gateway origin when building and include the website origin in the Backend CORS configuration. A same-origin production host must route `/api/**` to the Gateway.

Run `npm run build` before serving the site.
