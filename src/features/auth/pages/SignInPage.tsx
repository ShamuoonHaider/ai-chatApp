import wallhavenImage from "@/assets/wallhaven-gwz7ol.png";

export function SignInPage() {
  return (
    <section className="grid w-full max-w-230 overflow-hidden rounded-2xl border border-gray-200 bg-white md:min-h-155 md:grid-cols-2">
      <aside className="relative min-h-75 md:min-h-full">
        <img
          src={wallhavenImage}
          alt="Abstract blue background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-9 bottom-9 text-white">
          <h2 className="mb-2 text-5xl font-semibold leading-[1.05]">
            Create your Account
          </h2>
          <p className="text-xl">
            Share you Ideas and Get a Beautifull Cover Letter For Your Job
            Proposal
          </p>
        </div>
      </aside>

      <div className="grid content-center p-5 md:p-12">
        <h2 className="mb-6 text-center text-4xl font-semibold text-black">
          Sign In
        </h2>

        <form className="grid gap-3">
          <label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-[15px] text-gray-900 outline-none focus:border-gray-500"
            />
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-[15px] text-gray-900 outline-none focus:border-gray-500"
            />
          </label>

          <label className="mt-0.5 flex items-center gap-2 text-xs text-black">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-gray-300 text-black focus:ring-0"
            />
            Accept Terms &amp; Conditions
          </label>

          <button
            type="submit"
            className="mt-1 rounded-lg bg-blue-800 px-4 py-2.5 text-sm font-medium text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
