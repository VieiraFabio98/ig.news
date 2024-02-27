import Stripe from 'stripe'

const stripeApiKey = process.env.STRIPE_API_KEY || '' // Set a default value if STRIPE_API_KEY is undefined

export const stripe = new Stripe(
  stripeApiKey,
  {
    apiVersion: '2023-10-16',
    appInfo: {
      name: 'ignews',
      version: '0.1.0'
    }
  }
)