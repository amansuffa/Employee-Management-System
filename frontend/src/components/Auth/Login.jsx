import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password); 
      setEmail('');
      setPassword('');
      setError(null);
    } catch (err) {
      toast.error('Login failed! Please try again.');
      setError('Login failed');
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg3.jpg')" }}
    >
      <div className="w-full h-full bg-black/40 flex items-center justify-center p-4">
        <div className="w-[90vw] max-w-[1000px] flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-2xl min-h-[50vh]">
          
          {/* Left Panel */}
          <div className="flex-1 p-8 md:p-10 text-white bg-black/40 flex flex-col justify-center">
            <h1 className="text-4xl font-bold">
              WEL<span className="text-[#1e90ff]">C</span>OME
            </h1>
            <h2 className="text-2xl mt-3 font-bold">EXPLORE HORIZONS</h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-200">
              Where Your Dream Destinations Become Reality.
              <br />
              Embark on a journey where every corner of the world is within your reach.
            </p>
          </div>

          {/* Right Panel */}
          <div className="flex-1 p-8 md:p-10 bg-white/20 text-white flex flex-col justify-center">
            <h1 className="mb-6 text-2xl font-semibold text-center">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="p-3 border-b border-white bg-transparent text-white text-sm placeholder-gray-300 focus:outline-none"
              />

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full p-3 border-b border-white bg-transparent text-white text-sm placeholder-gray-300 focus:outline-none pr-10"
                />
                <div
                  className="absolute right-2 top-[50%] translate-y-[-50%] text-white cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>

              <button
                type="submit"
                className="p-3 mt-2 rounded font-bold bg-[#1e90ff] hover:bg-[#097ded] text-white transition"
              >
                SIGN IN
              </button>
            </form>

            {/* Optional error message below the form */}
            {error && <p className="text-red-300 text-sm text-center mt-4">{error}</p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
