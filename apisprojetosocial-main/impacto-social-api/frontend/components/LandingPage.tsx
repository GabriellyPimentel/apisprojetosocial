import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Award, 
  Calendar, 
  Target,
  ChevronDown,
  Star,
  Globe
} from 'lucide-react';

// Tipos TypeScript para os dados da API
interface Projeto {
  nome: string;
  objetivo: string;
  impacto: string;
}

interface ImpactoHistorico {
  ano: number;
  area: string;
  impacto: string;
}

interface Avaliacao {
  id: number;
  projeto: string;
  nota: number;
}

const LandingPage: React.FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [historico, setHistorico] = useState<ImpactoHistorico[]>([]);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para consumir a API
  const fetchData = async () => {
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      
      const [projetosRes, historicoRes, avaliacoesRes] = await Promise.all([
        fetch(`${API_BASE}/projetos-impacto`),
        fetch(`${API_BASE}/dados-impacto-historico`),
        fetch(`${API_BASE}/avaliacoes-projetos`)
      ]);

      // Verificar se as respostas são válidas
      if (!projetosRes.ok || !historicoRes.ok || !avaliacoesRes.ok) {
        throw new Error('Erro ao carregar dados da API');
      }

      const projetosData = await projetosRes.json();
      const historicoData = await historicoRes.json();
      const avaliacoesData = await avaliacoesRes.json();

      setProjetos(projetosData.projetos || []);
      setHistorico(historicoData.historico || []);
      setAvaliacoes(avaliacoesData.avaliacoes || []);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setError('Erro ao carregar dados. Verifique se a API está rodando.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Animações Framer Motion
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-600 font-medium">Carregando dados...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Erro de Conexão</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchData}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Impacto Social</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#projetos" className="text-gray-700 hover:text-blue-600 transition-colors">Projetos</a>
              <a href="#historico" className="text-gray-700 hover:text-blue-600 transition-colors">Histórico</a>
              <a href="#avaliacoes" className="text-gray-700 hover:text-blue-600 transition-colors">Avaliações</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <motion.h1 
              {...fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Transformando Vidas
              <br />
              <span className="text-blue-200">Através do Impacto Social</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            >
              Descubra como nossos projetos sociais estão criando mudanças positivas 
              e duradouras em comunidades ao redor do mundo.
            </motion.p>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span className="font-semibold">150M+ Pessoas Impactadas</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span className="font-semibold">3 Áreas Principais</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center space-x-2">
                <TrendingUp className="h-6 w-6" />
                <span className="font-semibold">Crescimento Contínuo</span>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <ChevronDown className="h-8 w-8 animate-bounce cursor-pointer" onClick={() => {
                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
              }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Projetos Sociais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Iniciativas que estão fazendo a diferença em educação, saúde e desenvolvimento social.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projetos.map((projeto, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    {index === 0 && <Target className="h-8 w-8 text-blue-600" />}
                    {index === 1 && <Heart className="h-8 w-8 text-blue-600" />}
                    {index === 2 && <Users className="h-8 w-8 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{projeto.nome}</h3>
                  <p className="text-gray-600 mb-4">{projeto.objetivo}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 font-semibold">{projeto.impacto}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Histórico Section */}
      <section id="historico" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Histórico de Impacto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acompanhe nossa evolução ao longo dos anos e o crescimento do nosso impacto social.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {historico.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{item.ano}</h3>
                      <p className="text-blue-600 font-semibold">{item.area}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold">{item.impacto}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section id="avaliacoes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avaliações dos Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja como nossos projetos são avaliados e reconhecidos pela comunidade.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {avaliacoes.map((avaliacao, index) => (
              <motion.div
                key={avaliacao.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{avaliacao.projeto}</h3>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(avaliacao.nota) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold text-blue-600">{avaliacao.nota}/5.0</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Impacto Social</span>
            </div>
            <p className="text-gray-400 mb-8">
              Transformando vidas através de projetos sociais inovadores e impactantes.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 Impacto Social API. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;