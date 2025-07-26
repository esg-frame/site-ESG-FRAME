"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Brain,
  Target,
  Zap,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  Calendar,
  Menu,
  X,
  Sparkles,
  Rocket,
  Award,
  Building,
  Bot,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-900 via-blue-900 to-slate-900"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"
        />
      </motion.div>
    )}
  </AnimatePresence>
)

const GlassmorphismCard = ({ children, className = "", ...props }: any) => (
  <motion.div
    className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl ${className}`}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white shadow-lg border-b border-slate-200"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.05 }}>
            <img
              src="/images/esg-frame-logo-full.png"
              alt="ESG|Frame - Sustainability, Simplified"
              className="h-12 w-auto"
            />
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {["400 Agentes IA", "Crescimento", "vs Tradicionais"].map((item, index) => (
              <motion.a
                key={item}
                href={`#section-${index + 1}`}
                className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white shadow-lg font-semibold"
              onClick={() => window.open("https://app.frame2.work/#/acesso/login", "_blank")}
            >
              Portal Login
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-200 bg-white"
            >
              <div className="container mx-auto px-6 py-4">
                <nav className="flex flex-col gap-4">
                  {["400 Agentes IA", "Crescimento", "vs Tradicionais"].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#section-${index + 1}`}
                      className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors py-2 border-b border-slate-100 last:border-b-0"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white shadow-lg font-semibold"
                      onClick={() => {
                        window.open("https://app.frame2.work/#/acesso/login", "_blank")
                        setIsMenuOpen(false)
                      }}
                    >
                      Portal Login
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

const HeroSection = ({ setIsChatOpen }: { setIsChatOpen: any }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-blue-900 to-slate-900 pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white/5 to-transparent animate-pulse" />
        </div>
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold text-sm mb-12"
          >
            <Sparkles className="w-4 h-4" />
            Primeira Arquitetura AaaS (Agent as a Service) Global
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
            A{" "}
            <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-purple-500 bg-clip-text text-transparent">
              Revolução AaaS
            </span>
            <br />
            Chegou: 400 Consultores ESG Digitais 24/7
          </motion.h1>

          {/* Botão Growth Specialist com animação suave */}
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white font-bold text-sm lg:text-lg px-4 lg:px-8 py-3 lg:py-4 rounded-full shadow-2xl border-2 border-white/20"
                onClick={() => setIsChatOpen(true)}
              >
                <Bot className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                <span className="text-center">Falar com Growth Specialist Agora</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Enquanto o mundo usa <strong>SaaS + Big4 Consulting</strong>, nós desenvolvemos uma arquitetura{" "}
            <strong>AaaS (Agent as a Service)</strong> - 400 especialistas digitais que executam compliance ESG para
            você. <strong>Não é ferramenta. É um time completo.</strong>
          </motion.p>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Brain, number: "AaaS", label: "Primeira Arquitetura\nAgent as a Service" },
              { icon: Users, number: "400", label: "Consultores Digitais\nEspecializados ESG" },
              { icon: Zap, number: "24/7", label: "Disponibilidade\nSem Pausas" },
              { icon: Globe, number: "$30T", label: "Mercado ESG Global\nEm Expansão" },
            ].map((metric, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <GlassmorphismCard className="p-6 text-center">
                  <metric.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">{metric.number}</div>
                  <div className="text-sm text-white/80 whitespace-pre-line">{metric.label}</div>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <GlassmorphismCard className="p-8 border-amber-500/30">
              <div className="text-amber-400 font-bold text-xl mb-6">
                ⚡ Janela de Oportunidade Histórica - Regulações Vigentes
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  { region: "🇪🇺 Europa (CSRD/VSME)", status: "VIGENTE 2025" },
                  { region: "🇺🇸 Estados Unidos (SEC Climate)", status: "VIGENTE 2025" },
                  { region: "🇧🇷 Brasil (Lei 14.030/FEBRABAN)", status: "OBRIGATÓRIO 2025" },
                  { region: "🌍 Taxonomia Verde Global", status: "EXPANSÃO 2025-2027" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-white font-medium">{item.region}</span>
                    <span className="text-amber-400 font-bold text-sm">{item.status}</span>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* Apenas o botão de diagnóstico centralizado */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-white/90 font-bold text-sm lg:text-lg px-4 lg:px-8 py-3 lg:py-4 rounded-full shadow-2xl"
              onClick={() => window.open("https://calendly.com/contact-esgframe", "_blank")}
            >
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              <span className="text-center">Solicitar Diagnóstico Executivo Gratuito</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const AgentsArchitecture = ({ setIsChatOpen }: { setIsChatOpen: any }) => {
  return (
    <section id="section-1" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-sm rounded-full mb-6">
            REVOLUÇÃO TECNOLÓGICA
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            Como Criamos a Primeira Arquitetura de 400 Agentes ESG do Mundo
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            3 anos, $8 milhões investidos e <strong>+50 especialistas ESG internacionais</strong> trabalhando para
            resolver o maior desafio do compliance empresarial: contextualização inteligente com time completo de
            consultores digitais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: "Pesquisa",
              description:
                "Durante 18 meses, nossa equipe de especialistas ESG analisou por que 95% das organizações falhavam em compliance ESG. A resposta: falta de contextualização e expertise especializada.",
              features: [
                "Consultoria tradicional usa templates genéricos",
                "Cada organização tem realidade única de setor, porte e região",
                "Frameworks ESG precisam ser interpretados especificamente",
                "Stakeholders diferentes requerem abordagens diferentes",
                "Incidentes de compliance precisam de especialistas dedicados",
              ],
            },
            {
              icon: Target,
              title: "Desenvolvimento",
              description:
                "Desenvolvemos 400 agentes especializados: 1 para Declaração ESG + 49 Temáticos + 350 para Resolução de Incidentes. Todos aprendem automaticamente sobre qualquer empresa e colaboram entre si.",
              features: [
                "Machine Learning contextual para ESG",
                "Base de conhecimento de 500+ frameworks globais",
                "Integração com dados organizacionais em tempo real",
                "Coordenação colaborativa automática entre 400 agentes",
                "Especialistas dedicados para cada tipo de incidente",
              ],
            },
            {
              icon: Award,
              title: "Validação",
              description:
                "50+ especialistas ESG de consultorias líderes mundiais validaram nossa metodologia. O resultado: primeira arquitetura de IA que realmente funciona como team de consultores especializados.",
              features: [
                "Validação por ex-Big4 e especialistas certificados",
                "Teste em 12 setores diferentes simultaneamente",
                "Aprovação metodológica para GRI, SASB e TCFD",
                "Certificação anti-greenwashing rigorosa",
                "Benchmark vs. consultores humanos: 10x mais rápido",
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-0 shadow-2xl bg-white/80 backdrop-blur-xl hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-bold text-emerald-700 uppercase text-sm tracking-wide">
                      {index === 0
                        ? "O Problema que Descobrimos"
                        : index === 1
                          ? "A Arquitetura Revolucionária de 400 Agentes"
                          : "Testado por Especialistas Globais"}
                    </h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <Zap className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-12 text-center bg-gradient-to-br from-blue-50/80 to-emerald-50/80 border-blue-200/50 shadow-2xl">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              🧠 Inteligência Contextual: O Diferencial Que Nenhum Concorrente Tem
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-bold">
                Arquitetura de 400 Agentes ESG Especializados
              </span>{" "}
              - O primeiro e único time de consultores digitais ESG do mundo. Cada{" "}
              <strong>agente domina frameworks específicos</strong> e se contextualiza automaticamente com sua
              organização. <strong>Juntos, formam a inteligência ESG mais avançada da história.</strong>
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

const GrowthOpportunities = ({ setIsChatOpen }: { setIsChatOpen: any }) => {
  return (
    <section id="section-2" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold text-sm rounded-full mb-6">
            CRESCIMENTO EXPONENCIAL
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            ESG Como Growth Engine: $30 Trilhões em Oportunidades
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Enquanto empresas veem ESG como custo de compliance, pioneiros transformam sustentabilidade em{" "}
            <strong>vantagem competitiva duradoura</strong>. Acesso a mercados premium, funding mais barato e
            posicionamento de liderança.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              icon: Building,
              title: "Acesso Capital Verde",
              value: "Funding 1.5-2% Mais Barato",
              description:
                "Green bonds, ESG funds e investidores sustentáveis oferecem capital com taxa preferencial para empresas audit-ready. Vantagem financeira imediata.",
              benefits: [
                "Green bonds 1.5-2% juros menores",
                "ESG funds acesso preferencial",
                "Valuation premium 15-25%",
                "Risk rating melhor (S&P, Moody's)",
                "Insurance premiums 10-20% menores",
              ],
            },
            {
              icon: Globe,
              title: "Mercados Premium Globais",
              value: "Pricing 15-25% Superior",
              description:
                "União Europeia, mercados desenvolvidos e grandes corporações pagam premium por fornecedores ESG-compliant. Diferenciação que gera pricing power.",
              benefits: [
                "UE compliance = acesso R$ 12bi+ mercados",
                "Supply chain preferred partner status",
                "Premium pricing 15-25% produtos",
                "Contratos long-term exclusivos",
                "Export certification automática",
              ],
            },
            {
              icon: Rocket,
              title: "Vantagem Competitiva",
              value: "Market Leadership Sustentável",
              description:
                "ESG excellence cria moat defensável contra concorrentes. Atração top talent, partnerships estratégicas e positioning de liderança setorial.",
              benefits: [
                "Top talent attraction 3x mais efetivo",
                "Customer loyalty + brand premium",
                "Partnerships estratégicas exclusivas",
                "Regulatory advantage early adopter",
                "Crisis resilience + reputation protection",
              ],
            },
            {
              icon: TrendingUp,
              title: "Eficiência Operacional",
              value: "15-30% Redução Custos",
              description:
                "ESG implementation gera eficiência energética, waste reduction, process optimization e productivity gains. Sustentabilidade que gera bottom line impact imediato.",
              benefits: [
                "Energy efficiency 20-40% savings",
                "Waste reduction + circular economy",
                "Process optimization automation",
                "Productivity gains + employee engagement",
                "Supply chain resilience + cost stability",
              ],
            },
          ].map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-slate-50 to-emerald-50 hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <opportunity.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{opportunity.title}</h3>
                      <div className="text-amber-600 font-bold">{opportunity.value}</div>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">{opportunity.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-bold text-emerald-700 uppercase text-sm tracking-wide">
                      Benefícios Principais
                    </h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ComparisonSection = ({ setIsChatOpen }: { setIsChatOpen: any }) => {
  return (
    <section id="section-3" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-slate-700 to-blue-600 text-white font-bold text-sm rounded-full mb-6">
            COMPARAÇÃO TECNOLÓGICA
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            Por Que AaaS Supera Qualquer Concorrente Global
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Não é que consultores sejam inadequados.{" "}
            <strong>
              É que nossa arquitetura de 400 agentes especializados é exponencialmente superior em velocidade
            </strong>
            , consistência e capacidade de processamento. Os números falam por si.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 text-center bg-red-50/80 border-red-200/50 shadow-2xl">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-red-700 mb-2">Métodos Tradicionais</h3>
              <p className="text-red-600">Consultoria + Software Básico</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-black text-2xl">VS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 text-center bg-emerald-50/80 border-emerald-200/50 shadow-2xl">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">400 Agentes AaaS</h3>
              <p className="text-emerald-600">Primeira arquitetura AaaS do mundo</p>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-12">
          {[
            {
              title: "⚡ Velocidade de Análise Completa",
              traditional: { value: "2-4 semanas", detail: "Para análise básica" },
              ai: { value: "15 minutos", detail: "Análise completa 400 agentes" },
            },
            {
              title: "🎯 Consistência de Qualidade",
              traditional: { value: "Variável", detail: "Depende do consultor" },
              ai: { value: "100%", detail: "Sempre o melhor padrão" },
            },
            {
              title: "👨‍💼 Especialistas Simultâneos",
              traditional: { value: "3-5", detail: "Consultores por projeto" },
              ai: { value: "400", detail: "Agentes especializados 24/7" },
            },
            {
              title: "📊 Capacidade Simultânea",
              traditional: { value: "1 projeto", detail: "Por consultor/tempo" },
              ai: { value: "Ilimitada", detail: "Milhares simultâneos" },
            },
            {
              title: "💰 Custo por Hora de 400 Especialistas",
              traditional: { value: "$200k", detail: "400 consultores Big4/hora" },
              ai: { value: "$12", detail: "400 agentes/hora" },
            },
          ].map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{comparison.title}</h3>
              </div>
              <div className="grid lg:grid-cols-5 gap-4 items-center">
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg bg-red-50/80">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-black text-red-600 mb-4">{comparison.traditional.value}</div>
                      <div className="text-red-700">{comparison.traditional.detail}</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">VS</span>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg bg-emerald-50/80">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-black text-emerald-600 mb-4">{comparison.ai.value}</div>
                      <div className="text-emerald-700">{comparison.ai.detail}</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="p-12 text-center bg-gradient-to-br from-emerald-50/80 to-blue-50/80 border-emerald-200/50 shadow-2xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              🏆 Revolução Tecnológica: Por Que Nenhum Concorrente Tem AaaS?
            </h3>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Enquanto o mercado global ainda depende de consultores humanos e templates genéricos,{" "}
              <strong>ESG|Frame criou a primeira arquitetura de IA verdadeiramente especializada</strong> que funciona
              como um time de 400 consultores digitais trabalhando 24/7 na sua empresa.
            </p>
            <ul className="text-left max-w-3xl mx-auto space-y-4 mb-8">
              {[
                "Vantagem Tecnológica: Anos à frente da concorrência global",
                "Competitive Moat: Impossível de replicar sem $8MM+ investimento",
                "Market Timing: Pioneiros capturam vantagem duradoura",
                "ROI Comprovado: 650-8.000% retorno primeiro ano",
                "Global Scalability: Pronto para expansão internacional",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50/80 border border-blue-200/50 rounded-2xl p-6">
              <p className="text-blue-800 font-bold text-xl">
                ⚡ Por isso somos os únicos com AaaS: barreira impossível de replicar. Você contrata 400 consultores por
                fração do custo de 1 consultor tradicional.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

const FinalCTA = ({ setIsChatOpen }: { setIsChatOpen: any }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-8">Transforme ESG em Vantagem Competitiva Hoje</h2>
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            <strong>Última janela de oportunidade:</strong> Regulações vigentes + $30 trilhões em investimento ESG +
            competitive window aberto = momento histórico para market leadership. Enquanto concorrentes ainda usam
            métodos tradicionais, você pode ter 400 consultores digitais especializados trabalhando na sua vantagem
            competitiva.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center px-4">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-white/90 font-bold text-sm lg:text-xl px-6 lg:px-12 py-4 lg:py-6 rounded-full shadow-2xl"
              onClick={() => window.open("https://calendly.com/contact-esgframe", "_blank")}
            >
              <Calendar className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
              <span className="text-center">Agendar Diagnóstico Executivo (30 min)</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-emerald-900 font-semibold text-sm lg:text-xl px-6 lg:px-12 py-4 lg:py-6 rounded-full backdrop-blur-xl transition-all duration-300"
              onClick={() => setIsChatOpen(true)}
            >
              <Bot className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
              <span className="text-center">Falar com Growth Specialist</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/esg-frame-logo-full.png"
                alt="ESG|Frame - Sustainability, Simplified"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              A primeira e única plataforma global com 400 agentes de IA ESG especializados que se contextualizam
              automaticamente com sua empresa, setor e desafios específicos.
            </p>
            <div className="text-blue-400 font-semibold">
              🚀 Powered by Frame2.work Technology
              <br />
              <span className="text-sm text-slate-500">F2W LLC - Florida, USA | ESG Division</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-3">
              {["400 Agentes IA", "Crescimento ESG", "vs Concorrentes", "Portal Login"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@esgframe.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Contact@esgframe.com
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-slate-500 mb-4">
            <p>
              &copy; 2025 ESG|Frame® by F2W LLC. Todos os direitos reservados. | Primeira plataforma global com 400
              agentes IA ESG especializados.
            </p>
          </div>
          <div className="text-center text-xs text-slate-600">
            <p className="mb-2">
              <strong>ESG|Frame®</strong> é marca registrada da F2W LLC.
              <span className="mx-2">•</span>
              <strong>AaaS (Agent as a Service)®</strong> é tecnologia proprietária.
            </p>
            <p className="text-slate-700">
              🚀 <span className="font-semibold">Operação - ESG - Division</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function ESGLandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isChatLoading, setIsChatLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleChatOpen = () => {
    setIsChatOpen(true)
    setIsChatLoading(true)
    // Simular tempo de carregamento do iframe
    setTimeout(() => {
      setIsChatLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <HeroSection setIsChatOpen={handleChatOpen} />
      <AgentsArchitecture setIsChatOpen={handleChatOpen} />
      <GrowthOpportunities setIsChatOpen={handleChatOpen} />
      <ComparisonSection setIsChatOpen={handleChatOpen} />
      <FinalCTA setIsChatOpen={handleChatOpen} />
      <Footer />
      {/* Modal do Chatbot com Loading Personalizado */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] m-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">Growth Specialist</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsChatOpen(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="relative h-full">
                {/* Loading personalizado */}
                {isChatLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full mb-6"
                    />
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-slate-800 mb-2">🚀 Conectando com Growth Specialist</h4>
                      <p className="text-slate-600 mb-4">
                        Preparando sua sessão personalizada com nosso especialista em crescimento ESG...
                      </p>
                      <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Carregando sistema de 400 agentes
                      </div>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://app.frame2.online/chatbot/O3ffieGRDiMuciLs"
                  style={{ width: "100%", height: "100%", minHeight: "700px" }}
                  frameBorder="0"
                  allow="microphone"
                  title="Growth Specialist"
                  onLoad={() => setIsChatLoading(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
