import { Code2, Figma, Lightbulb, Smartphone } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Criação de Sites',
    description: 'Crio sites interativos e bonitos',
  },
  {
    icon: Figma,
    title: 'Criação de UI Design',
    description:
      'Optimizing for speed and delivering lightning-fast user experiences.',
  },
  {
    icon: Smartphone,
    title: 'Responsívidade',
    description: 'Sites responsívos adaptados para vários tipos de telas.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Staying ahead with the latest technologies and best practices.',
  },
]

function About() {
  return (
    <section className="py-32 relative overflow-hidden" id="sobre">
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
              Construindo interfaces,
              <span className="font-serif italic font-normal text-white">
                {' '}
                um componente por vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                perspiciatis quo architecto error odio, voluptatem, quibusdam
                aliquam ducimus doloribus aperiam nesciunt itaque praesentium
                sequi reiciendis vitae officiis explicabo rerum asperiores.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate, laudantium! Mollitia sint quis autem dicta quod ipsum
                quibusdam accusantium, tenetur nemo aliquid laborum provident
                eligendi iste! Voluptatum voluptates id amet.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus cupiditate, itaque inventore possimus quas voluptas
                architecto recusandae, odit alias eius, ex culpa. Libero magni
                maxime debitis perspiciatis natus sapiente quisquam.
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
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
