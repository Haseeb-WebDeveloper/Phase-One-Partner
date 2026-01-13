"use client";

export default function BrandSection() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                We guide you through<br />
                <span className="text-primary">every phase of the process.</span>
              </h2>
              
              <h3 className="text-xl md:text-2xl text-black-foreground font-medium">
                Exiting a business can feel overwhelming, but you don't need to go through it alone.
              </h3>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              With PhaseOne, every stage is structured, managed, and supported, so you can focus on running your business while we handle the complexities.
            </p>
          </div>

          {/* Right Column - Animated Vector */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md h-96">
              {/* Main animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute w-80 h-80 border-2 border-primary/20 rounded-full animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary rounded-full"></div>
                </div>
                
                {/* Middle ring */}
                <div className="absolute w-64 h-64 border-2 border-secondary/30 rounded-full animate-spin-reverse">
                  <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                
                {/* Inner ring */}
                <div className="absolute w-48 h-48 border-2 border-primary/40 rounded-full animate-spin-slow">
                  <div className="absolute bottom-0 left-0 transform -translate-x-1 translate-y-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>
                
                {/* Center element */}
                <div className="relative w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-6 h-6 bg-primary/60 rounded-full animate-bounce-slow"></div>
              <div className="absolute top-16 right-12 w-4 h-4 bg-secondary/70 rounded-full animate-bounce-slow-delayed"></div>
              <div className="absolute bottom-12 left-16 w-5 h-5 bg-primary/50 rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-secondary/60 rounded-full animate-bounce-slow-delayed"></div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 100 100 Q 200 50 300 100"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M 100 300 Q 200 350 300 300"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
