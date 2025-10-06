import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, Database, Cloud, Cog, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando as mais recentes tecnologias como React, Next.js, e TypeScript.',
      features: ['Single Page Applications', 'E-commerce', 'Dashboards', 'APIs RESTful']
    },
    {
      icon: Smartphone,
      title: 'Aplicações Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com foco na experiência do usuário.',
      features: ['React Native', 'Flutter', 'Progressive Web Apps', 'App Store Deploy']
    },
    {
      icon: Database,
      title: 'Sistemas Corporativos',
      description: 'Soluções empresariais robustas para gestão, automação e integração de processos.',
      features: ['ERPs Customizados', 'CRMs', 'Automação', 'Integrações']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Infraestrutura em nuvem, deploy automatizado e monitoramento de aplicações.',
      features: ['AWS/Azure/GCP', 'CI/CD', 'Docker/Kubernetes', 'Monitoramento']
    },
    {
      icon: Cog,
      title: 'Consultoria Técnica',
      description: 'Análise de arquitetura, otimização de performance e modernização de sistemas legados.',
      features: ['Code Review', 'Arquitetura', 'Performance', 'Migração']
    },
    {
      icon: Users,
      title: 'Equipes Dedicadas',
      description: 'Times especializados para trabalhar exclusivamente no seu projeto com metodologias ágeis.',
      features: ['Scrum/Kanban', 'Product Owner', 'Full Stack Teams', 'Suporte 24/7']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento de software, 
            desde a concepção até a implementação e manutenção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}