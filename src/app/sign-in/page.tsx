const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* SIGN IN */}
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-500">BIO</span>MS
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>

              {/* USERNAME PASSWORD */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full md:w-auto bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

              <div className='flex justify-between w-64 mb-5'>
                <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Remember me</label>
                <a href="#" className="text-xs">Forgot Password?</a>
              
              </div>
              <button type="submit" className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white">Sign In
                </button>
              </div>
            </div>
          </div>
          {/* SIGN UP SECTION */}
          <div className="hidden md: xl:block w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">BIOMS</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Fill up personal information</p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
