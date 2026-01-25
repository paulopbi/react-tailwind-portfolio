import { aboutHighlights } from '../constants/aboutHighlights'

function About() {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre Mim
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Mais do que código
              <span className="font-serif italic font-normal text-white">
                {' '}
                minha jornada.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Minha paixão por desenvolvimento começou de forma inusitada:
                customizando temas de blogs aos 15 anos. O que era apenas um
                hobby para personalizar meu espaço online rapidamente se
                transformou em uma fascinação por entender como as coisas
                funcionam por trás das interfaces. Foi essa curiosidade que me
                guiou até a graduação em Sistemas de Informação e,
                posteriormente, ao universo do desenvolvimento front-end.
              </p>
              <p>
                Nos últimos anos, tenho me dedicado especialmente ao ecossistema
                React. O que mais me encanta nessa biblioteca é a filosofia de
                componentes reutilizáveis - uma metáfora perfeita para como
                enxergo a solução de problemas: dividindo desafios complexos em
                partes gerenciáveis que, quando bem orquestradas, criam algo
                maior e mais funcional.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                Fora do ambiente de desenvolvimento, sou um entusiasta da
                fotografia de arquitetura urbana - hobby que,
                surpreendentemente, aprimora minha percepção de layout,
                proporção e harmonia visual, habilidades que traduzo diretamente
                para a construção de interfaces.
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {aboutHighlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index + 1 * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  {<item.icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
