# Builderly.tech

Marketing site for Builderly.

## Development

```bash
npm install
npm run dev
```

## Environment

Create a `.env.local` file:

```
WEBHOOK_URL=https://your-webhook-url
```

The contact form posts to `/api/contact`, which forwards the payload to `WEBHOOK_URL`.
