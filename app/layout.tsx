import Header from '@/components/Header';
import '../styles/globals.css';
import PromptInput from '@/components/PromptInput';
import ClientProvider from '../components/ClientProvider';

export const metadata = {
  title: 'Dall-E',
  description: 'Generated Dall-E, Chat-GPT, AI Image',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Header />

          <PromptInput />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
