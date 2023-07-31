

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-8">
        <div className="bg-gradient-to-r from-green-400 via-violet-600 to-pink-500 shadow-2xl px-4 py-4">
          <p className="mainpage-title">Добро пожаловать на сайт Максима</p>
          <a href="https://github.com/ninja-code1212" className="my-button text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Github</a> 
          <a href="#" type="button" className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Docs</a>
        </div>
      </div>
    </main>
  )
}
