import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const SensoryAnalysis = () => {
  const ratings = [
    { label: "Doçura", value: 4.5, emoji: "🍯" },
    { label: "Textura", value: 4.7, emoji: "✨" },
    { label: "Sabor Geral", value: 4.8, emoji: "😋" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Teste Sensorial –{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Escala Hedônica
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Avaliamos a aceitação das Energy Balls com base em uma escala de 1 a 5 pontos 
              (1 = desgostei muito, 5 = gostei muito).
            </p>
          </motion.div>

          <CardSpotlight className="p-10">
            <div className="space-y-10">
              {ratings.map((rating, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{rating.emoji}</span>
                      <span className="font-bold text-2xl">{rating.label}</span>
                    </div>
                    <span className="text-primary font-bold text-2xl">{rating.value}/5</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.15 + star * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star
                          className={`w-8 h-8 transition-all duration-300 ${
                            star <= Math.floor(rating.value)
                              ? "fill-accent text-accent drop-shadow-lg"
                              : star - 0.5 <= rating.value
                              ? "fill-accent/50 text-accent"
                              : "fill-none text-muted-foreground"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="h-4 bg-muted rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary via-primary-glow to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(rating.value / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1, 
                        delay: index * 0.15 + 0.3,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 p-8 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-accent/20 rounded-2xl border-2 border-primary/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-center font-bold text-xl leading-relaxed">
                <span className="text-primary text-2xl">✅ Conclusão:</span>
                <br />
                <span className="text-foreground">
                  Produto bem aceito, com ótimo equilíbrio entre sabor e valor nutricional.
                </span>
              </p>
            </motion.div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default SensoryAnalysis;
