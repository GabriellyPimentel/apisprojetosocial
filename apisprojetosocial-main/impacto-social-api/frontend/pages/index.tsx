import React from 'react';
import Head from 'next/head';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Impacto Social - Transformando Vidas</title>
        <meta name="description" content="Descubra como nossos projetos sociais estão criando mudanças positivas e duradouras em comunidades ao redor do mundo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://impacto-social.com/" />
        <meta property="og:title" content="Impacto Social - Transformando Vidas" />
        <meta property="og:description" content="Descubra como nossos projetos sociais estão criando mudanças positivas e duradouras em comunidades ao redor do mundo." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://impacto-social.com/" />
        <meta property="twitter:title" content="Impacto Social - Transformando Vidas" />
        <meta property="twitter:description" content="Descubra como nossos projetos sociais estão criando mudanças positivas e duradouras em comunidades ao redor do mundo." />
      </Head>
      
      <LandingPage />
    </>
  );
}