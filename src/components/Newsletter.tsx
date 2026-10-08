import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Email inválido');
      return;
    }

    setIsSubscribed(true);
    setEmail('');
    toast.success('Inscrição confirmada! Obrigado pela confiança.');

    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Receba nossas atualizações, dicas de desenvolvimento e notícias sobre tecnologia direto na sua caixa de entrada.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 bg-white/90 border-0 h-12 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={isSubscribed}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubscribed}
              className={`h-12 px-8 font-semibold transition-all ${
                isSubscribed
                  ? 'bg-green-500 hover:bg-green-500 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              {isSubscribed ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Inscrito
                </>
              ) : (
                'Inscrever'
              )}
            </Button>
          </form>

          <p className="text-blue-100 text-sm mt-4">
            ✓ Sem spam • ✓ Cancelar inscrição a qualquer momento • ✓ 100% seguro
          </p>
        </div>
      </div>
    </section>
  );
}
