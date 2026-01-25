import AnimatedBorderButton from '@/components/AnimatedBorderButton'
import Button from '@/components/Button'
import { skills } from '@/constants/skills'
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
} from 'lucide-react'
import { useEffect, useState } from 'react'

function Hero() {
  const [dots, setDots] = useState([])

  useEffect(() => {
    const generatedDots = [...Array(30)].map(() => ({
      left: Math.ceil(Math.random() * 100),
      top: Math.ceil(Math.random() * 100),
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }))
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDots(generatedDots)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Background image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="absolite inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: '#20b2a6',
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Programador Fullstack
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Criador de{' '}
                <span className="text-primary glow-text">Experiências</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  Digitais.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Me chamo Paulo sou um desenvolvedor especializado em React com
                foco em performance e UX. Transformo conceitos em código limpo e
                interfaces responsivas que encantam usuários. Em constante
                evolução, sempre em busca dos próximos desafios que unam
                tecnologia e criatividade.
              </p>
            </div>
            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contato <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="size-5" />
                Baixar Currículo
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Redes Sociais:{' '}
              </span>
              {[
                { icon: Github, href: 'https://github.com/paulopbi' },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/paulopbi/',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* right column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/10 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/paulo.jpg"
                  alt="Foto de perfil"
                  className="w-full aspect-4/5 rounded-2xl object-cover"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Disponível para trabalhos
                    </span>
                  </div>
                </div>
                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-400">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    anos de experiência
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tecnologias que utilizo
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors text-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero
