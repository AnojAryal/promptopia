import '@styles/globals.css'

export const meta = { 
    title: 'Promptopia',
    description: 'Discover and share AI Prompts',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body> 
            <div className="main">
                <div className='gradient'/>

                <main className='app'>
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout