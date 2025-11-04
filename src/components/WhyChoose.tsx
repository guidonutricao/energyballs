import { Leaf, Heart, Clock, Zap } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { motion } from "framer-motion";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sem conservantes, corantes ou açúcares refinados. Apenas ingredientes puros da natureza.",
  },
  {
    icon: Heart,
    title: "Rico em Nutrientes",
    description: "Proteínas, fibras, antioxidantes e gorduras boas em cada bolinha.",
  },
  {
    icon: Clock,
    title: "Prático e Rápido",
    description: "Pronto para consumir a qualquer hora, em qualquer lugar. Perfeito para o seu dia a dia.",
  },
  {
    icon: Zap,
    title: "Energia Duradoura",
    description: "Sacia a fome e mantém sua energia estável ao longo do dia.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Por que escolher{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Energy Balls?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group/card hover:shadow-2xl w-auto h-auto rounded-xl p-6 border border-border bg-card">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-foreground mb-4"
                  >
                    {feature.title}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="w-full mb-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;