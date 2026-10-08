import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'João Silva',
      company: 'Tech Solutions Brasil',
      role: 'CEO',
      content: 'A StellCore entregou um sistema web robusto que transformou completamente nosso negócio. A qualidade do código e o suporte foram excepcionais.',
      rating: 5,
      avatar: 'JS'
    },
    {
      name: 'Maria Santos',
      company: 'E-commerce Inovador',
      role: 'Diretora de Projetos',
      content: 'Projeto entregue no prazo e dentro do orçamento. O time foi muito profissional e atencioso com nossas necessidades.',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'Carlos Oliveira',
      company: 'Startup Digital',
      role: 'CTO',
      content: 'A consultoria técnica nos ajudou a otimizar nossa arquitetura. Recomendo fortemente a StellCore para qualquer projeto.',
      rating: 5,
      avatar: 'CO'
    },
    {
      name: 'Ana Costa',
      company: 'Gestão Corporativa',
      role: 'Gerente de TI',
      content: 'Desenvolveram um sistema ERP customizado que superou nossas expectativas. Muito bom mesmo!',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Roberto Alves',
      company: 'Indústria Metalúrgica',
      role: 'Diretor Executivo',
      content: 'Equipe dedicada nos auxiliou na migração para cloud. Processos muito mais eficientes agora.',
      rating: 5,
      avatar: 'RA'
    },
    {
      name: 'Patricia Lima',
      company: 'Consultoria Financeira',
      role: 'Sócia-fundadora',
      content: 'A solução mobile desenvolvida pela StellCore melhorou muito nossa experiência com clientes.',
      rating: 5,
      avatar: 'PL'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            O que nossos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Confira os depoimentos de empresas que confiaram na StellCore para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 border-gray-200 dark:border-gray-800 shadow-lg bg-white dark:bg-gray-800"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
