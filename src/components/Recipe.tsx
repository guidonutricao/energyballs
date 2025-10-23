import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import ingredientsImage from "@/assets/ingredients.jpg";

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
            Receita{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Completa
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aprenda a fazer suas próprias Energy Balls em casa – versão clássica deliciosa!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Recipe Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardSpotlight>
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Energy Balls Clássicas</h3>
                
                <div>
                  <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                    <span className="text-2xl">🥄</span> Ingredientes:
                  </h4>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-start group">
                      <span className="text-primary mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                      <span>1 xícara de tâmaras (sem caroço)</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-primary mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                      <span>1/4 de xícara de farinha de amêndoas</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-primary mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                      <span>1/4 de xícara de cacau em pó</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-accent mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                      <span className="text-accent-foreground">(Opcional) 1 dose de whey protein</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-4 text-secondary flex items-center gap-2">
                    <span className="text-2xl">👨‍🍳</span> Modo de Preparo:
                  </h4>
                  <ol className="space-y-4 text-muted-foreground text-lg">
                    {[
                      "Processe as tâmaras até formar uma pasta",
                      "Adicione a farinha e o cacau",
                      "Misture até ficar homogêneo",
                      "Modele em bolinhas e armazene"
                    ].map((step, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <span className="font-bold text-secondary mr-4 text-xl min-w-[2rem] group-hover:scale-125 transition-transform">
                          {index + 1}.
                        </span>
                        <span>{step}</span>
                      </motion.li>
                    ))}
                  </ol>
                </div>

                <motion.div 
                  className="p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl border-l-4 border-accent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-xl">💡 Dica:</span> Armazene em pote fechado por até 7 dias ou na geladeira se preferir gelado.
                  </p>
                </motion.div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={ingredientsImage}
              alt="Ingredientes naturais para Energy Balls"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent group-hover:from-primary/50 transition-all duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
