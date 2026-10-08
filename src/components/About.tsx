import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Target } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Award,
      number: '50+',
      label: 'Projetos Entregues',
      description: 'Soluções desenvolvidas com excelência'
    },
    {
      icon: Users,
      number: '30+',
      label: 'Clientes Satisfeitos',
      description: 'Empresas que confiam em nosso trabalho'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Anos de Experiência',
      description: 'Expertise consolidada no mercado'
    },
    {
      icon: Target,
      number: '99%',
      label: 'Taxa de Sucesso',
      description: 'Projetos entregues no prazo'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre a <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">StellCore</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em desenvolvimento de software, 
            focada em entregar soluções inovadoras e de alta qualidade para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Nossa Missão</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Transformar ideias em realidade através de soluções tecnológicas inovadoras, 
              proporcionando aos nossos clientes ferramentas que impulsionem seus negócios 
              e os mantenham competitivos no mercado digital.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Acreditamos que a tecnologia deve ser acessível, eficiente e orientada aos
              resultados. Por isso, trabalhamos com metodologias ágeis e as mais modernas
              tecnologias do mercado.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Nossos Valores:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  <strong className="mr-2">Excelência:</strong> Comprometimento com a qualidade em cada projeto
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  <strong className="mr-2">Inovação:</strong> Sempre buscando as melhores soluções tecnológicas
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  <strong className="mr-2">Transparência:</strong> Comunicação clara e honesta com nossos clientes
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  <strong className="mr-2">Agilidade:</strong> Entregas rápidas sem comprometer a qualidade
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Por que escolher a StellCore?</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <strong>Equipe Especializada:</strong> Desenvolvedores experientes e certificados
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <strong>Tecnologias Modernas:</strong> Stack atualizado com as melhores práticas
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <strong>Suporte Contínuo:</strong> Acompanhamento pós-entrega e manutenção
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <strong>Preços Competitivos:</strong> Melhor custo-benefício do mercado
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 border-gray-200 dark:border-gray-800 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}