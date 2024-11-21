import Image from "next/image"

export function AboutMe() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-400 animate-gradient-x"></div>
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">Your Name</h1>
        <h2 className="text-2xl md:text-3xl mb-6">Full-Stack Engineer</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
        &quot;To doubt everything or to believe everything are two equally convenient solutions; both dispense with the necessity of reflection.&quot; - Henri Poincaré 
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  )
}

