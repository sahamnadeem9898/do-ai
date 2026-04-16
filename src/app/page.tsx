export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhhNWNmNiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
              </span>
              Now Available
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Your AI Assistant for
              <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Everything
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Do AI streamlines your workflow with intelligent automation. Handle multiple operations seamlessly—from scheduling to analytics—all in one powerful platform.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
              >
                Get Started Free
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-neutral-600 bg-neutral-800/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-neutral-800"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-purple-600">Trusted by Teams</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Join thousands of professionals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center transition-all hover:border-purple-200 hover:shadow-lg">
              <div className="mb-4 text-4xl font-bold text-purple-600">50K+</div>
              <div className="text-sm font-medium uppercase tracking-wide text-neutral-500">Active Users</div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center transition-all hover:border-purple-200 hover:shadow-lg">
              <div className="mb-4 text-4xl font-bold text-purple-600">99.9%</div>
              <div className="text-sm font-medium uppercase tracking-wide text-neutral-500">Uptime</div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center transition-all hover:border-purple-200 hover:shadow-lg">
              <div className="mb-4 text-4xl font-bold text-purple-600">10M+</div>
              <div className="text-sm font-medium uppercase tracking-wide text-neutral-500">Tasks Automated</div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center transition-all hover:border-purple-200 hover:shadow-lg">
              <div className="mb-4 text-4xl font-bold text-purple-600">4.9/5</div>
              <div className="text-sm font-medium uppercase tracking-wide text-neutral-500">User Rating</div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-8">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-neutral-700">"Do AI has transformed how we handle day-to-day operations. The automation is seamless and saves us hours every week."</p>
              <div className="font-semibold text-neutral-900">Sarah Chen</div>
              <div className="text-sm text-neutral-500">Operations Manager, TechCorp</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-8">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-neutral-700">"The best AI assistant I've used. Intuitive, powerful, and actually understands what I need. Highly recommended!"</p>
              <div className="font-semibold text-neutral-900">Marcus Rodriguez</div>
              <div className="text-sm text-neutral-500">Founder, StartupHub</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-8">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-neutral-700">"Game changer for our team. We've automated workflows we didn't even know could be automated. Absolutely brilliant!"</p>
              <div className="font-semibold text-neutral-900">Emily Parker</div>
              <div className="text-sm text-neutral-500">Product Lead, InnovateLabs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
