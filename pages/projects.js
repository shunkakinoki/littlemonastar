import Link from 'next/link'
import React from 'react'

const Button = React.forwardRef(({ onClick, href }, ref) =>{
    return(
        <a href={href} onClick={onClick} ref={ref}>
        ⬅　Back
        </a>
    )
})



function Projects(){
    return <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-black py-2">
        <main className="bg-white p-12 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white">
        <div class="text-4xl font-semibold">Projects</div>
        <p class="text-xl mt-4 max-w-lg">
            <a className="mt-6 text-xl font-semibold underline" href="https://littlemonastar.github.io/art101/final/">KATHARSIS</a>
        <h3 className="mt-3 text-sm font-mono">2020. School project.  
        </h3>
        </p>
        <br/ >
        <p class="text-xl mt-4 max-w-lg">
            <a className="mt-6 text-xl font-semibold underline" href="https://www.mosh.lol/ja">Mosh DAO</a>
        <h3 className="mt-3 text-sm font-mono">2021.   
        </h3>
        </p>

        <br />
        <Link href="/" class="mt-4 p-12" passHref>
             <Button />
        </Link> 
    </main>







    </div>
}

export default Projects