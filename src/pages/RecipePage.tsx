import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ChefHat } from "lucide-react";
import energyBallsImg from "@/assets/energy-balls-hero.jpg";
import { toast } from "@/hooks/use-toast";

const ingredients = [
  { name: "Tâmaras", amount: "200g" },
  { name: "Pasta de amendoim", amount: "100g" },
  { name: "Farinha de amêndoas", amount: "50g" },
  { name: "Cacau em pó", amount: "30g" },
  { name: "Mel", amount: "2 colheres de sopa" },
  { name: "Aveia em flocos", amount: "50g" },
];

const steps = [
  "Deixe as tâmaras de molho em água morna por 10 minutos para amolecer.",
  "No processador, adicione as tâmaras escorridas, pasta de amendoim, farinha de amêndoas, cacau em pó e mel.",
  "Processe até obter uma massa homogênea e pegajosa.",
  "Adicione a aveia em flocos e pulse algumas vezes para incorporar.",
  "Com as mãos ligeiramente umedecidas, modele bolinhas de aproximadamente 3cm de diâmetro.",
  "Passe as bolinhas no cacau em pó ou coco ralado para finalizar.",
  "Refrigere por pelo menos 1 hora antes de servir. Conserve na geladeira por até 7 dias.",
];

const tips = [
  "Use tâmaras bem maduras para uma massa mais doce e maleável",
  "Se a massa ficar muito seca, adicione 1-2 colheres de água",
  "Experimente variar o recheio com nibs de cacau ou castanhas picadas",
  "Para versão sem amendoim, substitua por pasta de amêndoas ou castanha de caju",
];

const RecipePage = () => {
  const handleDownloadPDF = () => {
    try {
      // Cria um link temporário para download
      const link = document.createElement('a');
      link.href = '/receita_energy_balls_atualizado.pdf';
      link.download = 'receita_energy_balls_atualizado.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download iniciado!",
        description: "A receita está sendo baixada.",
      });
    } catch (error) {
      toast({
        title: "Erro no download",
        description: "Não foi possível baixar o PDF. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Receita das Energy Balls"
        subtitle="Aprenda a fazer suas próprias Energy Balls em casa"
        emoji="🍫"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hero Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-accent/40 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src={energyBallsImg}
                alt="Energy Balls prontas para consumo"
                className="relative w-full h-[400px] object-cover"
              />
            </motion.div>

            {/* Ingredients & Steps */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ingredients */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <CardSpotlight className="h-full">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <ChefHat className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">Ingredientes</h3>
                    </div>
                    <div className="space-y-4">
                      {ingredients.map((ingredient, index) => (
                        <motion.div
                          key={ingredient.name}
                          className="flex justify-between items-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <span className="font-medium">{ingredient.name}</span>
                          <span className="text-primary font-bold">{ingredient.amount}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Steps */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <CardSpotlight className="h-full">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">Modo de Preparo</h3>
                    <div className="space-y-4">
                      {steps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="flex space-x-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white">
                            {index + 1}
                          </div>
                          <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CardSpotlight>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">
                    Dicas{" "}
                    <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                      Especiais
                    </span>
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tips.map((tip, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          💡 {tip}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>

            {/* Download CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--primary-glow)/0.5)] transition-all duration-300 text-lg px-10 py-6"
              >
                <Download className="mr-2" />
                Baixar Receita em PDF
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecipePage;
