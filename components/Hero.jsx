import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function Hero() {
  return (
    <section className=" bg-gray-200">
	<div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
  <div className="w-full max-w-md p-8 rounded-xl  ">
	<h1 className="text-3xl font-bold saira">Welcome Back</h1>
  <p className="pb-6 popins">Let's Start The Journey</p>
	<form novalidate="" action="" className="space-y-3 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<input type="text" name="username" id="username" placeholder="Write your e-mail" className="w-full px-4 py-3  bg-white" />
		</div>
		<div className="space-y-1 text-sm">
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3  " />
			<div className="flex justify-between pt-3">
			<div className="flex items-center pb-8">
				<input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm  focus:border-black focus:ring-2 accent-red-400" />
				<label for="remember" className="text-xs inter text-black">Remember next time</label>
			</div>
			<a className="text-xs text-red-500 inter" href="/">Forgot your password?</a>
		</div>
		</div>
		<button className="block w-full p-3  text-center bg-red-400">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-xs saira text-black"> Or Sign Up with</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4 pt-3">
		<button aria-label="Log in with Google" className="p-3 rounded-sm bg-white">
		<FaFacebookF color='#4092ff'/>
		</button>
		<button aria-label="Log in with Twitter" className="p-3 rounded-sm bg-white">
    <FcGoogle/>
		</button>
		<button aria-label="Log in with GitHub" className="p-3 rounded-sm bg-white">
			<FaApple/>
		</button>
	</div>
  <div className="flex items-center sm:pt-24 pt-12">
				<input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm  focus:border-black focus:ring-2 accent-red-400" />
				<label  className="text-xs inter text-black">Agreeing to our Privacy policy & Terms of use</label>
			</div>
  
</div>
		<img src="/img.png" alt="" className="hidden sm:block object-cover w-full xl:col-span-3" />
	</div>
</section>
  );
}

export default Hero;
