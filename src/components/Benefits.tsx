import { Check } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";

const benefits = [
  "Rico em fibras e antioxidantes",
  "Fonte de energia de liberação lenta",
  "Sem glúten e sem lactose",
  "Ajuda no controle da saciedade",
  "Substitui doces comuns de forma saudável",
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Benefícios{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Nutricionais
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardSpotlight className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-foreground text-lg leading-relaxed">{benefit}</p>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;