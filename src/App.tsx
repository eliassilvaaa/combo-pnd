import React, { useEffect, useState } from 'react';
import { BookOpen, CheckCircle, Users, Award, Shield, Star, Clock, Download, Zap, ArrowRight, Target, TrendingUp, Brain, Lightbulb, Play, Volume2, Lock, Unlock, MessageCircle, FileText, Calendar, UserCheck, Phone, CreditCard, ChevronDown, AlertCircle, Tag } from 'lucide-react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Timer de 10 minutos que reinicia a cada acesso
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          // Reinicia para 10 minutos
          return { minutes: 10, seconds: 0 };
        } else if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: prev.minutes, seconds: prev.seconds - 1 };
        }
      });
      
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToCheckout = () => {
    window.open('https://www.ggcheckout.com/checkout/v2/decdhgxd0xhc1zUzNGyG', '_blank');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "O Combo é atualizado para a banca HABED?",
      answer: "Sim, todo o material é elaborado seguindo exatamente o perfil da banca HABED e as diretrizes mais recentes do INEP para a PND."
    },
    {
      question: "Vai funcionar mesmo se eu estiver começando agora?",
      answer: "Sim! O material é pensado para quem quer estudar de forma direta e objetiva, sem perder tempo com conteúdo desnecessário."
    },
    {
      question: "É tudo digital? Terei acesso na hora?",
      answer: "Sim, é 100% digital. Após a confirmação do pagamento, você recebe o acesso imediatamente no seu e-mail."
    },
    {
      question: "E se eu não gostar? Tem garantia?",
      answer: "Garantia total de 7 dias. Se não gostar, devolvemos 100% do valor sem perguntas ou burocracias."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Barra de Urgência Fixa */}
      <div className="bg-red-600 text-white py-2 px-4 shadow-lg" style={{ backgroundColor: '#BD2323' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center space-y-1 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <Tag className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-semibold text-sm sm:text-base">VÁLIDO ATÉ HOJE {formatDate(currentTime)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm sm:text-base">🔥</span>
            <span className="font-semibold text-sm sm:text-base">OFERTA ACABA EM</span>
            <div className="bg-black text-white px-2 py-1 rounded text-xs font-mono">
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headlines */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 leading-tight text-slate-900 px-2">
            Passe na PND com o material que acerta exatamente o que o INEP vai cobrar
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 lg:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
            Estude certo, sem enrolação, e conquiste sua vaga com o conteúdo que realmente importa.
          </p>

          {/* VSL - Video Sales Letter */}
          <div className="mb-6 lg:mb-8 max-w-xs sm:max-w-sm mx-auto">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-[9/16] w-full">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/lv7f6wulzn?videoFoam=true" 
                  title="PND Combo Essencial"
                  allow="autoplay; fullscreen" 
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </div>
            
            {/* Texto abaixo do vídeo */}
            <div className="text-center mt-4">
              <p className="text-sm sm:text-base text-slate-600 font-medium px-4">
                Assista ao vídeo e descubra como conquistar sua aprovação na PND
              </p>
            </div>
          </div>

          {/* Botão Principal */}
          <button 
            onClick={() => scrollToSection('bonus')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 mb-8 lg:mb-12"
          >
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Garantir meu Combo com Desconto</span>
          </button>
        </div>
      </section>

      {/* O Segredo por Trás do Sucesso */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Conteúdo */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-slate-900 leading-tight">
                Por que milhares de professores já <span className="text-green-600">escolheram esse combo?</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-700 mb-6 lg:mb-8 leading-relaxed font-medium">
                Você não precisa estudar 100 PDFs ou adivinhar o que vai cair.<br className="hidden sm:block" />
                Com nosso método, você foca exatamente no estilo da banca HABED e estuda o que realmente importa para a PND.
              </p>

              <button 
                onClick={() => scrollToSection('bonus')}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Quero garantir meu combo agora</span>
              </button>
            </div>

            {/* Imagem */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="https://i.imgur.com/diWKx5b.png" 
                  alt="Combo PND Essencial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Nosso Método é Imbatível */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-slate-900 leading-tight">
              Por que nosso método <span className="text-green-600">funciona de verdade?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-green-50 rounded-xl p-6 lg:p-8 text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl lg:text-2xl font-bold">01</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-slate-800">Estudo Direto ao Ponto</h3>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">Chega de conteúdo genérico. Aqui você foca no que o INEP realmente cobra.</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 lg:p-8 text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl lg:text-2xl font-bold">02</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-slate-800">Método Testado por Quem Já Passou</h3>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">Mais de 4 mil professores já usaram esse combo para conquistar suas vagas.</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 lg:p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl lg:text-2xl font-bold">03</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-slate-800">O Mais Completo por Menos de R$30</h3>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">Questões comentadas, simulados e bônus — tudo pronto para você usar.</p>
            </div>
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <button 
              onClick={() => scrollToSection('bonus')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Quero garantir meu combo agora</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bônus Exclusivos */}
      <section id="bonus" className="py-8 sm:py-12 lg:py-16 px-4 bg-green-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white leading-tight">
              Bônus exclusivos disponíveis somente hoje
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bônus 1 */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg text-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-xl flex items-center justify-center mx-auto mb-6 overflow-hidden bg-blue-50">
                <img 
                  src="https://i.imgur.com/JfrHR16.png" 
                  alt="Simulados"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-blue-600 mb-4">Simulados no Estilo ENADE</h3>
              <p className="text-sm lg:text-base font-medium text-slate-700 leading-relaxed">3 simulados completos com gabarito. Prontos para revisar do jeito certo.</p>
            </div>

            {/* Bônus 2 */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg text-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-xl flex items-center justify-center mx-auto mb-6 overflow-hidden bg-purple-50">
                <img 
                  src="https://i.imgur.com/x4ZXQd7.png" 
                  alt="LDB"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-purple-600 mb-4">LDB Completa e Direta</h3>
              <p className="text-sm lg:text-base font-medium text-slate-700 leading-relaxed">Explicada sem juridiquês, em PDF pronto para revisão rápida.</p>
            </div>
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <button 
              onClick={() => scrollToSection('oferta')}
              className="bg-lime-400 hover:bg-lime-300 text-green-800 font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white inline-flex items-center space-x-2"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Garantir meu Combo com Desconto</span>
            </button>
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section id="oferta" className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 sm:p-8 lg:p-12 border-2 border-green-200">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-slate-900 leading-tight">
              Receba tudo isso por menos do que <span className="text-green-600">custa um lanche</span>
            </h2>
            
            <div className="mb-6 lg:mb-8 space-y-3">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                De <span className="relative inline-block">
                  <span className="text-gray-500 font-medium text-lg sm:text-xl">R$97,00</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-500 transform rotate-12"></div>
                  </div>
                </span> por apenas <span className="text-green-600 font-bold text-2xl sm:text-3xl">R$27,00</span>
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Valor simbólico para liberar acesso<br className="hidden sm:block" />
                Você garante o Combo Essencial completo com mais de 500 questões e materiais extras.
              </p>
            </div>
            
            <button 
              onClick={goToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Garantir minha aprovação agora</span>
            </button>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Selo de Garantia - Centralizado */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/1VeuZf3.png" 
                  alt="Garantia 7 dias - 100% do dinheiro de volta"
                  className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain"
                />
              </div>
            </div>
            
            {/* Conteúdo da Garantia */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-slate-900 leading-tight">
                <span className="text-green-600">Garantia</span> incondicional de <span className="font-extrabold">7 dias</span>
              </h2>
              
              <p className="text-base sm:text-lg mb-6 lg:mb-8 text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
                Se não gostar do material ou achar que não vale a pena, devolvemos 100% do valor.<br />
                Sem perguntas. Sem enrolação.<br />
                Você só perde se não tentar.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8 max-w-2xl mx-auto">
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  <span className="text-xs lg:text-sm text-slate-700 text-center font-medium">Compra 100% segura</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  <span className="text-xs lg:text-sm text-slate-700 text-center font-medium">7 dias de garantia</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  <span className="text-xs lg:text-sm text-slate-700 text-center font-medium">Reembolso garantido</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  <span className="text-xs lg:text-sm text-slate-700 text-center font-medium">Qualidade garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comentários do Facebook */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200">
            {/* Header dos comentários */}
            <div className="mb-4 lg:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">24 Comentários</h3>
              <div className="h-px bg-gray-200"></div>
            </div>

            {/* Comentários */}
            <div className="space-y-4 lg:space-y-5">
              {/* Comentário 1 */}
              <div className="flex space-x-3">
                <img 
                  src="https://i.imgur.com/HKVpeO5.jpeg" 
                  alt="Emilia Yager"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-semibold text-blue-600 text-sm">Emilia Yager disse:</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 mb-2 leading-relaxed">
                    Recebi o material na hora, super organizado. Já comecei os simulados e estou impressionada com a qualidade das questões!
                  </p>
                  <div className="text-xs text-gray-500">
                    Responder · Curtir · Seguir · 3 min
                  </div>
                </div>
              </div>

              {/* Comentário 2 */}
              <div className="flex space-x-3">
                <img 
                  src="https://i.imgur.com/riHQyQP.jpeg" 
                  alt="Juliana Aparecida"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-semibold text-blue-600 text-sm">Juliana Aparecida disse:</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 mb-2 leading-relaxed">
                    Usei só esse combo pra revisar e acertei várias da LDB. Obrigada! O material é direto ao ponto mesmo.
                  </p>
                  <div className="text-xs text-gray-500">
                    Responder · Curtir · Seguir · 4 min
                  </div>
                </div>
              </div>

              {/* Comentário 3 */}
              <div className="flex space-x-3">
                <img 
                  src="https://i.imgur.com/AzYbQmv.jpeg" 
                  alt="Maria do Rosário"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-semibold text-blue-600 text-sm">Maria do Rosário disse:</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 mb-2 leading-relaxed">
                    Vale muito mais que o preço. Direto ao ponto e fácil de entender. Recomendo!
                  </p>
                  <div className="text-xs text-gray-500">
                    Responder · Curtir · Seguir · 5 min
                  </div>
                </div>
              </div>

              {/* Comentário 4 */}
              <div className="flex space-x-3">
                <img 
                  src="https://i.imgur.com/LoDBtUX.jpeg" 
                  alt="Rosana Almeida"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-semibold text-blue-600 text-sm">Rosana Almeida disse:</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 mb-2 leading-relaxed">
                    Professor recomendou esse e eu adorei. Tem tudo mastigado mesmo, sem enrolação.
                  </p>
                  <div className="text-xs text-gray-500">
                    Responder · Curtir · Seguir · 10 min
                  </div>
                </div>
              </div>

              {/* Comentário 5 */}
              <div className="flex space-x-3">
                <img 
                  src="https://i.imgur.com/enBNUWk.jpeg" 
                  alt="Maíra Laura"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-semibold text-blue-600 text-sm">Maíra Laura disse:</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 mb-2 leading-relaxed">
                    Amei o estilo de perguntas, bate certinho com a banca mesmo. Tava sem direção e isso aqui clareou tudo!
                  </p>
                  <div className="text-xs text-gray-500">
                    Responder · Curtir · Seguir · 16 min
                  </div>
                </div>
              </div>

              {/* Comentário 6 */}
              <div className="flex space-x-3">
                <img 
                  src="https://i.imgur.com/sdHIxFA.jpeg" 
                  alt="Amanda Lima"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-semibold text-blue-600 text-sm">Amanda Lima disse:</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 mb-2 leading-relaxed">
                    Gratidão! Finalmente um material que não me faz perder tempo com coisas desnecessárias. Foco total no que importa.
                  </p>
                  <div className="text-xs text-gray-500">
                    Responder · Curtir · Seguir · 14 min
                  </div>
                </div>
              </div>
            </div>

            {/* Footer dos comentários */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">f</span>
                </div>
                <span>Plug-in social do Facebook</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <button 
              onClick={() => scrollToSection('oferta')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Quero garantir meu combo agora</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-slate-900">
              Dúvidas Frequentes
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-green-600 transition-transform duration-200 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © 2025 PND Combo Essencial. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}