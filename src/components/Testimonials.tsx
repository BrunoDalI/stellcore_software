import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const testimonials = [
    { name: 'João Silva', company: 'Tech Solutions', role: 'CEO', content: 'Excelente trabalho! Superou nossas expectativas.', rating: 5, avatar: 'JS' },
    { name: 'Maria Santos', company: 'E-commerce Co', role: 'Diretora', content: 'Projeto entregue no prazo com qualidade excelente.', rating: 5, avatar: 'MS' },
    { name: 'Carlos Oliveira', company: 'Startup Digital', role: 'CTO', content: 'Recomendo fortemente a StellCore!', rating: 5, avatar: 'CO' },
    { name: 'Ana Costa', company: 'Gestão Corp', role: 'Gerente TI', content: 'Muito profissional e atencioso.', rating: 5, avatar: 'AC' },
    { name: 'Roberto Alves', company: 'Indústria Metal', role: 'Diretor', content: 'Cloud migration perfeita!', rating: 5, avatar: 'RA' },
    { name: 'Patricia Lima', company: 'Consultoria Fin', role: 'Sócia', content: 'App mobile de primeira qualidade.', rating: 5, avatar: 'PL' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            O que nossos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">clientes</span> dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
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
