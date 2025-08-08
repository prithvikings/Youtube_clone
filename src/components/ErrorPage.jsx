import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const err=useRouteError();
  return (
     <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-6xl'>Oops❗</h1>
      <h2 className='text-4xl'>Something went wrong❗</h2>
      <h3 className='text-2xl'>
        {err.status}: {err.statusText}
      </h3>
    </div>
  )
}

export default ErrorPage