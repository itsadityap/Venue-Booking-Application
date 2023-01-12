import Head from 'next/head'
import Homepage from '../components/homepage';
import Navbar from '../components/navbar';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>JUIT Venue Booking</title>
        <meta
          name="description"
          content="Venue Booking"
        />
      </Head>
        <Navbar />
        <Homepage />
        <Features />
        <Footer />
      </>
	);
}
