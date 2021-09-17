import { FacebookIcon, FacebookShareButton } from 'next-share'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-black py-2">
      <Head>
        <title>Monatopia</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
    <main className="bg-white p-12 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white">
     <div class="header-card flex justify-between font-semibold">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl">
          <a className="text-black text">
           Mona Kaji 
          </a>
        </h1>

        <h2>"✌"

        <FacebookShareButton
          url={'https://github.com/next-share'}
          quote={'next-share is a social share buttons for your next React apps.'}
          hashtag={'#nextshare'}
        >
            <FacebookIcon size={32} round />
            </FacebookShareButton>
        </h2>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
            href="/about"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-transparent"
          >
            <h3 className="text-2xl font-bold">Bio 🦁</h3>
            <p className="mt-4 text-xl">
              About Me
            </p>
          </a>


          <a
            href="/experience"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold">Experience / CV 🦄</h3>
            <p className="mt-4 text-xl">
              school {'&'} work {'&'} exhibition
            </p>
          </a>

          <a
            href="/projects"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold"B>Projects 🚀</h3>
            <p className="mt-4 text-xl">
              Add soon
            </p>
          </a>

          <a
            href="/portfolio"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold">Portfolio 🎨</h3>
            <p className="mt-3 text-xl">
              My artworks
            </p>
          </a>

          <a
            href="/blog"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold">Blog 📖</h3>
            <p className="mt-3 text-xl">
              Add later
            </p>
          </a>

          <a
            href="/goal"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold">Goal 👾</h3>
            <p className="mt-4 text-xl">
            Add later
            </p>
          </a>

          
        </div>
        
       </div>
      </div>
  
    </main>

    

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-1" />
        </a>
      </footer> */}
    </div>
  )
}
