import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'
import { GetServerSideProps } from 'next'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string
    amount:number
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News About the <span>React</span> world.</h1>
          <p>
            Get Access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="girl coding"/>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1OoFdxDVc7oAE6KZKj3kuotg')
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
  }

  return {
    props: {
      product
    }
  }
}