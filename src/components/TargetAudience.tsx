import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import productJar from "@/assets/product-jar.png";

const audiences = [
  {
    emoji: "🥛",
    title: "Intolerantes à Lactose",
    text: "Delicie-se sem desconfortos — 100% livres de lactose, com ingredientes naturais.",
  },
  {
    emoji: "🌾",
    title: "Intolerantes ao Glúten",
    text: "Feitas com farinha de amêndoas, naturalmente livres de glúten e cheias de sabor.",
  },
  {
    emoji: "💪",
    title: "Atletas e Esportistas",
    text: "Fonte de energia natural para treinos intensos, com proteínas e carboidratos de qualidade.",
  },
  {
    emoji: "🍫",
    title: "Amantes de Chocolate",
    text: "Sabor rico de cacau sem açúcar refinado, para quem não abre mão de um doce delicioso.",
  },
];

const TargetAudience = () => {
  const scrollToRecipe = () => {
    const element = document.getElementById("receita");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50/30 via-background to-background dark:from-zinc-950/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Para Quem São as{" "}
            <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
              Energy Balls?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Criadas especialmente para quem não quer abrir mão do prazer de um doce, 
            mas valoriza saúde e bem-estar.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Column */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="absolute -inset-6 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={productJar}
                alt="Energy Balls - Produto Natural"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Cards Column */}
            <div className="space-y-6 order-1 lg:order-2">
              {audiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-6xl md:text-8xl"
                      whileHover={{ rotate: 12, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {audience.emoji}
                    </motion.div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {audience.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {audience.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToRecipe}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--primary-glow)/0.5)] transition-all duration-300 text-lg px-10 py-6 rounded-full"
            >
              Quero experimentar! 🎉
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;