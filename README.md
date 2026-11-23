# aditinair.in portfolio

- `site/` is the published website (plain static files). Cloudflare deploys this folder.
- `source/` holds the app source used to generate `site/`.
- `wrangler.jsonc` tells Cloudflare the Worker name and the folder to publish.

Every change pushed to `main` goes live automatically.
