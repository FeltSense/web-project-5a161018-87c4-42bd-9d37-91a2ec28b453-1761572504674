export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 text-sm font-medium text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Trusted by 47 Fortune 500 Companies
        </div>
        
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Transform Business Problems into 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Production AI Systems
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 leading-relaxed">
          We architect, build, and deploy custom machine learning solutions that solve real business challenges—from predictive analytics pipelines to computer vision systems and NLP applications.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-400">100%</div>
            <div className="text-sm text-slate-400">Models deployed to production within 6 months</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-400">23</div>
            <div className="text-sm text-slate-400">PhD researchers & ML engineers on staff</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-400">$2.4B</div>
            <div className="text-sm text-slate-400">Value generated for clients through AI optimization</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
            Schedule AI Strategy Session
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all">
            View Case Studies
          </button>
        </div>
      </div>
      
      <div className="relative lg:h-[600px] hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-2xl backdrop-blur-3xl"></div>
        <div className="absolute top-8 right-8 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-2xl max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold">Model Performance</div>
              <div className="text-xs text-slate-400">Real-time monitoring</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-300">Accuracy</span>
              <span className="text-sm font-bold text-emerald-400">98.7%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{width: '98.7%'}}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-300">Latency</span>
              <span className="text-sm font-bold text-blue-400">12ms</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-8 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-2xl max-w-xs">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold mb-1">Custom NLP Pipeline</div>
              <div className="text-xs text-slate-400 leading-relaxed">Processing 2M+ documents daily with 94% entity extraction accuracy for legal discovery</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  </div>
</section>
  );
}