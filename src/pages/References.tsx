import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const references = [
  {
    citation: "Brasil. Ministério da Saúde. Guia Alimentar para a População Brasileira, 2014.",
    description: "Diretrizes oficiais sobre alimentação saudável no Brasil",
    link: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf",
  },
  {
    citation: "UNIVERSIDADE DE SÃO PAULO. Tabela Brasileira de Composição de Alimentos (TBCA). Versão 7.2. São Paulo: Food Research Center (FoRC), 2022. Disponível em: https://www.tbca.net.br/. Acesso em: 23 out. 2024.",
    description: "Tabela oficial de composição nutricional de alimentos brasileiros",
    link: "https://www.tbca.net.br/",
    linkText: "Acessar plataforma da TBCA",
  },
];

const References = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Referências Científicas"
        subtitle="Fundamentação científica do nosso projeto"
        emoji="📚"
      />

      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <motion.p
              className="text-center text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nosso projeto é fundamentado em pesquisas científicas e diretrizes oficiais de nutrição. 
              Confira as principais referências utilizadas:
            </motion.p>

            <div className="space-y-6">
              {references.map((reference, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardSpotlight className="hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-3">
                        <p className="text-foreground font-medium leading-relaxed">
                          {reference.citation}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {reference.description}
                        </p>
                        {reference.link && (
                          <a
                            href={reference.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                          >
                            <span>{reference.linkText || "Acessar documento"}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>

            {/* Additional Note */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CardSpotlight className="bg-muted/20">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                      Nota Importante
                    </span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Este projeto foi desenvolvido como parte da formação acadêmica em Nutrição na UNIP. 
                    As Energy Balls foram criadas seguindo princípios de alimentação saudável e funcional, 
                    respeitando as diretrizes do Ministério da Saúde para a população brasileira.
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default References;
