# Deploy To AWS

This project runs as a single Node.js service that serves both API and frontend.

## Option 1: AWS App Runner (Source Deploy)

1. Push this repository to GitHub.
2. In AWS Console, open App Runner and create a service from source repository.
3. Select this repository and branch.
4. App Runner will use `apprunner.yaml` automatically.
5. Add environment variables in App Runner:
   - `NODE_ENV=production`
   - `PORT=5000`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `EMAIL_PASSWORD`
   - `DATABASE_URL` (only if your runtime path uses DB)
6. Deploy.

Use `.env.example` as the reference for required keys. Do not upload `.env`.

## Option 2: AWS App Runner (Container Deploy)

1. Build and test container locally:
   - `docker build -t reyd-security-systems .`
   - `docker run --rm -p 5000:5000 --env-file .env reyd-security-systems`
2. Push image to Amazon ECR.
3. Create App Runner service from ECR image.
4. Set container port to `5000` and add the same environment variables.

## Health Check Suggestion

Set App Runner health check path to `/`.

## Security

- Do not commit secrets to git.
- Store sensitive values in AWS Secrets Manager and reference them from App Runner.
- Rotate any credentials currently present in local `.env`.

## Quick Validation

- Build: `npm run build`
- Start: `npm run start`
- Probe: `http://localhost:5000`
