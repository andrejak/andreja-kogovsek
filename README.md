# Andreja Kogovsek's personal website

Hi 👋

This website is intended to serve as a CV, portfolio, blog and generally one's own personal space on the internet. Most of my content is hosted on Contenful rather than being hardcoded in here, so if you want you should be able to reuse most the code, as long as you model your data similarly.

It's still a work in progress, and you can find the roadmap on [Notion](https://www.notion.so/b1854fd57b39482a97377c25d3920ce7?v=53df3eeabf764d3580837468c1049794).

## Implementation

Sure, my CV used to just live in a Google Doc, but where's the fun in that? This is purposefully a little bit overengineered for what it is so I can play with some different technologies. You can now find it [here](https://andreja-kogovsek.now.sh/).

This is a [Next.js](https://nextjs.org/) ([React](https://reactjs.org/)-based framework) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and written in [TypeScript](https://www.typescriptlang.org/). It's deployed with [Vercel](https://vercel.com). The content is hosted on [Contentful](https://www.contentful.com/) and has a webhook that automatically triggers rebuilds on update.

It uses [ThemeUI](https://theme-ui.com/) for styling and [React Spring](https://www.react-spring.io/) for animations. It's (at least partially) tested using [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library#readme). The code is formatted using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
