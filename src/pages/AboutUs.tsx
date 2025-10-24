import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import ingredientsImg from "@/assets/ingredients.jpg";
import guidoImg from "@/assets/guido.jpg";
import felipeImg from "@/assets/felipe.jpg";
import raulImg from "@/assets/raul.jpg";
import tassisImg from "@/assets/tassis.jpg";
import isleneImg from "@/assets/islene.jpg";

const teamMembers = [
  { name: "Guido Bustos da Silva", photo: guidoImg },
  { name: "Felipe Barlofa Simões", photo: felipeImg },
  { name: "Raul Senna Aiello Moreno", photo: raulImg },
  { name: "Tassis Morais Oliveira", photo: tassisImg },
  { name: "Islene Pedro", photo: isleneImg },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Quem Somos"
        subtitle="Conheça a equipe por trás das Energy Balls"
        emoji="👥"
      />

      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CardSpotlight className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Quem{" "}
                      <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                        Somos?
                      </span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A curiosidade e o entusiasmo fizeram com que 5 estudantes de nutrição apaixonados por saúde,
                      nutrição e Atividade Física se unissem e pensassem em um alimento que fornecesse energia,
                      mas elaborado a partir de elementos simples, tais como tâmaras, cacau em pó e farinha de linhaça.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Nossos anos de estudo conversas e pesquisas, nos fez pensar e elaborar algo que fosse agradável
                      ao paladar, sem o exagero de açúcar adicionado dos doces encontrados nas prateleiras dos mercados
                      e que fornecesse energia para quando a exaustão te alcança na academia ou em situações naquelas
                      que surge a vontade de um docinho.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Criamos um alimento diferenciado sem adição de açúcar e gordura com apenas 3 ingredientes que
                      homogeneizados compõem o ENERGY BALLS.
                    </p>
                  </div>
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-2xl blur-2xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <img
                      src={ingredientsImg}
                      alt="Ingredientes naturais das Energy Balls"
                      className="relative rounded-2xl shadow-xl w-full object-cover"
                    />
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>

            {/* Team Members */}
            <div className="space-y-8">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Nosso{" "}
                <span className="bg-gradient-to-r from-primary via-amber-500 to-accent bg-clip-text text-transparent">
                  Time
                </span>
              </motion.h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CardSpotlight className="h-full">
                      <div className="flex flex-col items-center text-center space-y-4 p-6">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold text-lg">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Estudante de Nutrição - UNIP
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

export default AboutUs;
