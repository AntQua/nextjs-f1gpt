'use client';

import Image from 'next/image';
import { useChat } from 'ai/react';
import { Message } from 'ai';
import F1GPTLogo from './assets/F1GPTLogo.webp';

const Home = () => {
  return (
    <main>
      <Image
        src={F1GPTLogo}
        alt="F1GPT logo"
        width="250"
      />
    </main>
  );
};

export default Home;
