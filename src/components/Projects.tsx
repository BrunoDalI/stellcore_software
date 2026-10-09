import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import flexa from '@/images/projects/flexa.svg';
import orcamentos from '@/images/projects/orcamentos-online.svg';
import estofaria from '@/images/projects/estofaria-cardoso.svg';
import unique from '@/images/projects/unique-combinations.svg';
import stock from '@/images/projects/stock-regulator.svg';

type ProjectLink = { label: string; href: string; icon: typeof ExternalLink };

const projects: { name: string; image: string; description: string; tags: string[]; links: ProjectLink[] }[] = [
  {
    name: 'Stock Regulator',
    image: stock,
    description:
      'App Android de gestão de estoque com leitura de código de barras e QR Code, cadastro de produtos, importação/exportação em Excel e ordens de serviço em PDF, além da landing page.',
    tags: ['Mobile', 'Android', 'Landing page'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.stock_regulator', icon: Play },
      { label: 'Site', href: 'https://bruno-dall.github.io/stock-regulator-webpage/', icon: ExternalLink },
      { label: 'Código', href: 'https://github.com/bruno-dall/stock-regulator-webpage', icon: Github },
    ],
  },
  {
    name: 'Unique Combinations',
    image: unique,
    description:
      'Landing page comercial do Unique Combinations, app Windows que ajuda empresas a melhorar seus resultados com estatísticas precisas.',
    tags: ['Web', 'Landing page'],
    links: [
      { label: 'Site', href: 'https://gmcfromhell.github.io/unique-combinations-webpage/', icon: ExternalLink },
      { label: 'Código', href: 'https://github.com/GMCfromhell/unique-combinations-webpage', icon: Github },
    ],
  },
  {
    name: 'Flexa',
    image: flexa,
    description:
      'App de gestão para estúdios de Pilates e assessoria de corrida: alunos, agenda com aulas recorrentes, financeiro, múltiplos estúdios e controle de acesso por perfil.',
    tags: ['Mobile', 'Sistema de gestão'],
    links: [],
  },
  {
    name: 'Orçamentos Online',
    image: orcamentos,
    description:
      'App Flutter para cadastrar clientes e dados da empresa e gerar orçamentos em PDF, prontos para imprimir ou compartilhar.',
    tags: ['Mobile', 'Flutter'],
    links: [],
  },
  {
    name: 'Estofaria Cardoso',
    image: estofaria,
    description:
      'Site institucional em Flutter Web para uma estofaria de Curitiba, com seções em parallax e formulário de contato.',
    tags: ['Web', 'Site institucional'],
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projetos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">entregues</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Apps e sites que desenvolvemos e estão em uso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-gray-800"
            >
              <img src={project.image} alt={project.name} loading="lazy" className="w-full aspect-[3/2] object-cover" />
              <CardContent className="pt-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.links.map(({ label, href, icon: Icon }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
