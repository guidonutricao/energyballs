import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import { Zap, Heart, Leaf, Clock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Energia Natural",
    description: "Fornece energia rápida e sustentada através de carboidratos naturais das tâmaras",
  },
  {
    icon: Heart,
    title: "Sem Açúcar Adicionado",
    description: "Adoçado naturalmente apenas com tâmaras, sem açúcares refinados",
  },
  {
    icon: Leaf,
    title: "Ingredientes Simples",
    description: "Apenas 3 ingredientes: tâmaras, cacau em pó e farinha de linhaça",
  },
  {
    icon: Clock,
    title: "Prático e Rápido",
    description: "Perfeito para levar na bolsa e consumir antes ou depois do treino",
  },
];

const AboutProduct = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Conheça o Energy Balls"
        subtitle="O snack natural que vai revolucionar sua energia"
        emoji="⚡"
      />

      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CardSpotlight className="p-8 md:p-12">
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Veja o{" "}
                      <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                        Energy Balls
                      </span>{" "}
                      em ação
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Assista ao vídeo e descubra como nosso produto pode transformar sua rotina
                    </p>
                  </div>

                  {/* Video Container */}
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-muted">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg"
                    >
                      <source src="/videos/energy-balls-promo.mp4" type="video/mp4" />
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>

            {/* Product Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CardSpotlight className="p-12">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    O que é o{" "}
                    <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                      Energy Balls?
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Energy Balls é um snack energético natural, desenvolvido por estudantes de nutrição 
                    apaixonados por saúde e bem-estar. Criado com apenas 3 ingredientes simples e nutritivos, 
                    é a alternativa perfeita para quem busca energia sem abrir mão da qualidade.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Diferente dos doces industrializados cheios de açúcar e gorduras trans, o Energy Balls 
                    oferece energia natural através das tâmaras, antioxidantes do cacau e os benefícios 
                    da linhaça, tudo em uma bolinha deliciosa e prática.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Perfeito para consumir antes ou depois do treino, como lanche da tarde, ou sempre 
                    que você precisar de uma dose extra de energia de forma saudável e saborosa.
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>

            {/* Benefits Grid */}
            <div className="space-y-8">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Por que escolher{" "}
                <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                  Energy Balls?
                </span>
              </motion.h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CardSpotlight className="h-full">
                      <div className="p-8 space-y-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold">{benefit.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </CardSpotlight>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutProduct;
