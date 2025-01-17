import './App.css'

function App() {

  return (
    <>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'><span className='text-red-600'>PH</span>Tube</h1>
        <button className="btn btn-neutral">Sort by View</button>
        <button className="btn btn-error">Blog</button>
      </div>
      <div className='flex gap-x-4 justify-center align-center mt-8'>
      <button className="btn btn-error">All</button>
      <button className="btn btn-outline">Music</button>
      <button className="btn btn-outline">Comedy</button>
      <button className="btn btn-outline">Drawing</button>
      </div>
    </>
  )
}

export default App
