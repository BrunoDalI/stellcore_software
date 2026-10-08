import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      id: 'faq-1',
      question: 'Quanto tempo leva para desenvolver um projeto?',
      answer: 'O tempo depende da complexidade do projeto. Projetos simples podem levar de 2-4 semanas, enquanto projetos mais complexos podem levar 2-6 meses. Fazemos uma análise detalhada e fornecemos um cronograma realista antes de começar.'
    },
    {
      id: 'faq-2',
      question: 'Qual é o processo de desenvolvimento?',
      answer: 'Usamos metodologia Agile/Scrum com sprints de 2 semanas. Começamos com levantamento de requisitos, prototipagem, desenvolvimento iterativo com demos semanais, testes e deploy. Mantemos comunicação constante com o cliente durante todo o processo.'
    },
    {
      id: 'faq-3',
      question: 'Vocês oferecem suporte após a entrega?',
      answer: 'Sim! Oferecemos pacotes de suporte e manutenção pós-entrega. Você pode escolher entre suporte básico (correção de bugs), suporte profissional (melhorias menores) ou suporte premium (24/7 com prioridade máxima).'
    },
    {
      id: 'faq-4',
      question: 'Como é realizada a comunicação durante o projeto?',
      answer: 'Realizamos reuniões semanais, mantemos um repositório compartilhado com código atualizado, usamos ferramentas de gerenciamento de projetos e comunicação (Slack, Teams, etc). Você terá acesso total ao progresso a qualquer momento.'
    },
    {
      id: 'faq-5',
      question: 'Quais tecnologias vocês trabalham?',
      answer: 'Trabalhamos com as principais tecnologias do mercado: React, Next.js, TypeScript, Node.js, Python, AWS, Google Cloud, Azure, Docker, Kubernetes, PostgreSQL, MongoDB e muitas outras. Recomendamos a stack mais adequada para seu projeto.'
    },
    {
      id: 'faq-6',
      question: 'O código desenvolvido é propriedade minha?',
      answer: 'Sim, 100% do código desenvolvido é sua propriedade. Fornecemos toda a documentação, acesso ao repositório Git e você pode migrar para outro desenvolvedor a qualquer momento. Não há lock-in.'
    },
    {
      id: 'faq-7',
      question: 'Como são estabelecidos os preços?',
      answer: 'Oferecemos diferentes modelos de precificação: projeto fechado (preço fixo), time dedicado (valor mensal) ou modelo híbrido. Fazemos uma proposta personalizada após entender seus requisitos. Sempre prezamos pela melhor relação custo-benefício.'
    },
    {
      id: 'faq-8',
      question: 'Vocês trabalham com startups e empresas pequenas?',
      answer: 'Sim! Trabalhamos com empresas de todos os tamanhos. Temos planos especiais para startups e pequenas empresas, oferecendo flexibilidade em pagamento e escopo. Entre em contato para discutir opções que se adequem ao seu orçamento.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-gray-200 dark:border-gray-800"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400 transition-colors">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Não encontrou sua dúvida? Entre em contato conosco!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
