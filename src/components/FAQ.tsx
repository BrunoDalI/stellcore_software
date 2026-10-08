import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    { id: 'faq-1', q: 'Quanto tempo leva para desenvolver um projeto?', a: 'Depende da complexidade. Projetos simples: 2-4 semanas. Complexos: 2-6 meses. Fazemos análise detalhada e fornecemos cronograma realista.' },
    { id: 'faq-2', q: 'Qual é o processo de desenvolvimento?', a: 'Usamos Agile/Scrum com sprints de 2 semanas. Levantamento → Prototipagem → Desenvolvimento iterativo → Testes → Deploy.' },
    { id: 'faq-3', q: 'Vocês oferecem suporte após a entrega?', a: 'Sim! Oferecemos pacotes de suporte: básico (bugs), profissional (melhorias), premium (24/7).' },
    { id: 'faq-4', q: 'Como é a comunicação durante o projeto?', a: 'Reuniões semanais, repositório compartilhado, ferramentas de colaboração (Slack/Teams), acesso total ao progresso.' },
    { id: 'faq-5', q: 'Quais tecnologias vocês trabalham?', a: 'React, Next.js, TypeScript, Node.js, Python, AWS, Google Cloud, Azure, Docker, Kubernetes, PostgreSQL, MongoDB e mais.' },
    { id: 'faq-6', q: 'O código é minha propriedade?', a: 'Sim, 100%! Documentação, repositório Git, e sem lock-in. Você pode migrar quando quiser.' },
    { id: 'faq-7', q: 'Como são os preços?', a: 'Oferecemos: projeto fechado (preço fixo), time dedicado (valor mensal), ou híbrido. Proposta personalizada.' },
    { id: 'faq-8', q: 'Vocês trabalham com startups?', a: 'Sim! Planos especiais com flexibilidade em pagamento e escopo para pequenas empresas e startups.' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200 dark:border-gray-800">
                <AccordionTrigger className="text-left hover:no-underline py-4 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
