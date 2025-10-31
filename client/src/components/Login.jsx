import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;
    const handleGoogleLogin = () => {
        try {
             setIsLoading(true);
             const googleLoginUrl = `${apiUrl}/auth/google`;
             window.location.href = googleLoginUrl;
        } catch (error) {
            console.error('error login with google', error)
        }finally{
            setIsLoading(false)
        }
    }
    const handleGithubLogin = () => {
        try {
             setIsLoading(true);
             const githubLoginUrl = `${apiUrl}/auth/github`;
             window.location.href = githubLoginUrl;
        } catch (error) {
            console.error('error login with github', error)
        }finally{
            setIsLoading(false)
        }
    }

    const userData = localStorage.getItem('user')

    useEffect(() => {
    if(userData) {
        navigate('/')
    } else{
        navigate('/login')
    }
    }, [userData])
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
        <div className='bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full'>
              <div className='bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center'>
                  <h1 className='text-3xl font-bold text-white'>Welcome Back!</h1>
                  <p className='text-blue-100 mt-2'>Sign in to access your account</p>
              </div>

              <div className='p-6'>

                <div className='mt-6'>
                   <button
                   onClick={handleGoogleLogin}
                   disabled={isLoading}
                    className='w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition'
                   >

                    <div className='mr-2 flex items-center justify-center'>
                        <div className='relative h-5 w-5'>
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <span className='flex h-full w-full items-center justify-center rounded-full bg-white'>
                                    <span className='h-3.5 w-3.5 rounded-full border-2 border-t-blue-500 border-r-red-500 border-b-yellow-500 border-l-green-500'>

                                    </span>
                                </span>

                            </div>

                        </div>

                    </div>
                     Sign in with Google
                   </button>

                <button
  onClick={handleGithubLogin}
  disabled={isLoading}
  className="w-full flex items-center justify-center gap-3 px-4 py-2 
             rounded-lg shadow-md border border-gray-200 
             bg-gray-900 text-white font-medium text-sm 
             hover:bg-gray-800 active:scale-95 transition duration-200 
             disabled:opacity-50"
>
  {/* GitHub Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M12 .5C5.65.5.5 5.65.5 12a11.48 11.48 0 007.85 10.93c.58.1.79-.25.79-.56v-2.02c-3.19.69-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.97.1-.76.4-1.26.73-1.55-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.18a10.92 10.92 0 015.72 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.76.12 3.05.73.8 1.16 1.82 1.16 3.07 0 4.4-2.69 5.35-5.26 5.63.42.36.8 1.09.8 2.21v3.28c0 .32.21.67.8.56A11.48 11.48 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
      clipRule="evenodd"
    />
  </svg>

  {isLoading ? "Signing in..." : "Sign in with GitHub"}
</button>

                </div>

              </div>
        </div>
    </div>
  )
}

export default Login
