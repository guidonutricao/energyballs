import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import tabelaNutricional from "@/assets/tabela-nutricional.png";

const Recipe = () => {
  return (
    <section id="receita" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Informação{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Nutricional
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça os valores nutricionais das nossas Energy Balls
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardSpotlight>
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-center">Tabela Nutricional - Energy Ball</h3>

                {/* Tabela Nutricional Image */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={tabelaNutricional}
                    alt="Tabela Nutricional - Energy Ball"
                    className="w-full h-auto"
                  />
                </motion.div>

                {/* Informações Adicionais */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-primary flex items-center gap-2">
                      <span className="text-2xl">📦</span> Porções
                    </h4>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">20 porções</span> por embalagem<br />
                      Porção: <span className="font-semibold">10g (1 unidade)</span>
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-accent flex items-center gap-2">
                      <span className="text-2xl">⚡</span> Energia
                    </h4>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-2xl">35 kcal</span><br />
                      por unidade
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="p-6 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl border-l-4 border-secondary"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-xl">💡 Destaque:</span> Produto com <span className="font-semibold text-primary">0g de açúcares adicionados</span>, <span className="font-semibold text-primary">0g de gorduras trans</span> e <span className="font-semibold text-primary">0mg de sódio</span>. Rico em fibras alimentares!
                  </p>
                </motion.div>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
