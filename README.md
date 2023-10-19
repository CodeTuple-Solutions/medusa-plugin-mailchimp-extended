# medusa-plugin-mailchimp-extended

Control newsletter registrations in your e-commerce system through Mailchimp.

[Documentation] (https://github.com/CodeTuple-Solutions/medusa-plugin-mailchimp-extended)

If you are not familiar with Medusa, you can learn more on [the project web site](https://www.medusajs.com/).

> Medusa is a set of commerce modules and tools that allow you to build rich, reliable, and performant commerce applications without reinventing core commerce logic. The modules can be customized and used to build advanced ecommerce stores, marketplaces, or any product that needs foundational commerce primitives. All modules are open-source and freely available on npm.

### This plugin is under development and should be considered experimental.

Breaking changes are very likely to occur.

## Features

- Enable customers to opt-in for your newsletter.
- Offer tailored services and endpoints to empower developers in implementing newsletter subscriptions flexibly.

---

## Prerequisites

- [Medusa backend](https://docs.medusajs.com/development/backend/install)
- [Mailchimp account](https://mailchimp.com/signup)

## How to Install

1\. Run the following command in the directory of the Medusa backend:

```bash
npm install medusa-plugin-mailchimp-extended
yarn add medusa-plugin-mailchimp-extended
```

2\. Set the following environment variables in `.env`:

````bash
MAILCHIMP_API_KEY=<YOUR_API_KEY>
MAILCHIMP_NEWSLETTER_LIST_ID=<YOUR_NEWSLETTER_LIST_ID>

## Add Plugin Configuration

3\. To pass a plugin its configurations on a Medusa backend, you have to add it to the _plugins_ array in `medusa-config.js`:

```js
const plugins = [
  // ...,
  {
    resolve: `medusa-plugin-mailchimp-extended`,
    options: {
      api_key: process.env.MAILCHIMP_API_KEY,
      newsletter_list_id: process.env.MAILCHIMP_NEWSLETTER_LIST_ID,
    },
  },
]
````
