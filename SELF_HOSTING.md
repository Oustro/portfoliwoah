## Self Hosting
We're so glad you want to self host Portfoliwoah! Here are the steps to get started.

1. Create a [Vercel](https://vercel.com) account
2. Create a [Supabase](https://supabase.io) account or another Postgres database
3. Create a [Upstash](https://upstash.com) account
4. Create a [Vercel Blob](https://vercel.com/docs/storage) bucket
5. Fork this repo
6. Clone your forked repo to your local machine
7. Run `yarn` to install all the packages
8. Run `yarn dev` to start the server
9. Create a `.env` file in the root of the project
10. Add the following to your `.env` file:

```
// You can use Resend, Postmark, Sendgrid, etc.
NEXT_PUBLIC_EMAIL_SERVER_USER=[SMTP username]
NEXT_PUBLIC_MAIL_SERVER_PASSWORD=[SMTP password]
NEXT_PUBLIC_EMAIL_SERVER_HOST=[SMTP host]
NEXT_PUBLIC_EMAIL_SERVER_PORT=[SMTP port]
NEXT_PUBLIC_EMAIL_FROM=[Email address to send emails from]

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=[Random string]

DATABASE_URL=[Postgres URL from Supabase]

UPSTASH_URL=[Upstash URL]
UPSTASH_TOKEN=[Upstash token]

BLOB_READ_WRITE_TOKEN=[Vercel Blob token]
```
