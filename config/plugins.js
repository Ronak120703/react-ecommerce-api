module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('STRIPE_KEY'),
        },
        settings: {
          defaultFrom: 'patelronak7766@gmail.com',
          defaultReplyTo: 'patelronak7766@gmail.com',
        },
      },
    },
    // ...
  });