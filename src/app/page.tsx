import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const projects = [
  {
    title: "Public Sector Auditing: digital tools to increase efficiency and effectiveness",
    description: "Public auditing lacks methodological innovation. Developed pioneering research on performance audits with emerging technologies. Was nominated for the best research award by the European Court of Auditors.",
    tags: ["Blockchain", "Auditing", "AI"],
    link: "https://www.agora-parl.org/sites/default/files/palop-publications/PALOP-TL%202022%20Volume%20II.pdf",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fauditoria-publica.png&w=1200&q=75"
  },
  {
    title: "European Conference on Banking and Economy 2024",
    description: "More dialogue about emerging fintechs is needed. Participated as a guest speaker at ECOBATE 2024, held at the University of Winchester and organized by the Association for Research on Banking and the Economy (ARBE) and the Centre for Banking, Finance and Sustainable Development (CBFSD) of the University of Southampton.",
    tags: ["Fintech", "Banking", "Economy"],
    link: "https://www.linkedin.com/posts/university-of-winchester%5Finternational-names-in-banking-and-finance-activity-7173608537435189248-D4ZD/",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fecobate.png&w=1200&q=75"
  },
  {
    title: "International Scientific Conference on Blockchain 2023",
    description: "The potential of blockchain in public governance deserves more attention. Presented his ideas at the International Scientific Conference on Blockchain in Manchester organized by the British Blockchain Association (BBA).",
    tags: ["Blockchain", "Auditing", "AI"],
    link: "https://jbba.scholasticahq.com/article/74923-conference-proceedings-5th-blockchain-international-scientific-conference-ics2023",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fisc-2023.png&w=1200&q=75"
  },
  {
    title: "Anglia Ruskin University Recognitions",
    description: "Among 133 thousand alumni, the university monthly distinguishes those who stand out globally. Was named Alumni of the Month for March 2024 and is nominated for Alumni of the Year.",
    tags: ["Alumni of the Month", "ARU", "Master's"],
    link: "https://www.aru.ac.uk/graduation-and-alumni/alumni-stories/alumni-of-the-month/2024/carlos-alberto-da-conceicao-araujo",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Faru.png&w=1200&q=75"
  },
  {
    title: "Author",
    description: "There are few Angolan voices in technical debates about economics. Wrote three opinion articles for CINVESTEC. They were read by about 4,600 people.",
    tags: ["Public Finance", "Entrepreneurship", "Banking"],
    link: "https://www.cinvestec.com/author/carlos-araujo/",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fcinvestec.png&w=1200&q=75"
  },
  {
    title: "Emerging Tech 2035",
    description: "Few in Africa discuss the technological future with clarity. Created an infographic with his vision of technologies that will be common in 10 years, and shared it with everyone.",
    tags: ["Robotics", "AI", "Futurism"],
    link: "https://carlos.goat.africa/images/emerging-tech-2035-carlos.png",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Femerging-tech.png&w=1200&q=75"
  },
  {
    title: "Chat Bull - chat.bull.africa",
    description: "Due to the lack of accessible tools for AI startups in Africa, created a modern, free and open-source chatbot, with local storage, internet search and ability to read responses aloud. Has already impacted thousands of people.",
    tags: ["Next.js", "AI", "Cloudflare"],
    link: "https://chat.bull.africa",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fchat-bull.png&w=1200&q=75"
  },
  {
    title: "Chat GOAT - chat.goat.africa",
    description: "To build a truly useful AI assistant, created Pingo AI: a complete application, with authentication and own database, capable of responding, reasoning, translating, generating documents and programming. It is used by 3 thousand people per month.",
    tags: ["Next.js", "AI", "Vercel"],
    link: "https://chat.goat.africa",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fchat-goat.png&w=1200&q=75"
  },
  {
    title: "Nota Bene – nb.bull.africa",
    description: "Cloud solutions compromise the privacy of research notes. Developed an app that stores everything locally, on the user's device, without using the cloud. Data stays more secure, private — and the code is open.",
    tags: ["React", "Vite", "TipTap", "Cloudflare"],
    link: "https://nb.bull.africa",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fnota-bene.png&w=1200&q=75"
  },
  {
    title: "HTML Editor - html.bull.africa",
    description: "Depended on an online editor full of ads. Created his own version: clean, functional and open-source, without ads and with total transparency.",
    tags: ["HTML5", "CSS3", "JavaScript", "Cloudflare"],
    link: "https://github.com/dreemrworld/html-wysiwyg",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Feditor-html.png&w=1200&q=75"
  },
  {
    title: "History of Finance: from Medici to BTC",
    description: "Predicting crises requires understanding historical cycles. Created an infographic that maps financial bubbles throughout the centuries — to facilitate more informed predictions.",
    tags: ["History", "Finance", "Bubbles"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7390346332034650112/",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fhistory-finance.png&w=1200&q=75"
  },
  {
    title: "Currency Converter",
    description: "In Angola, monitoring exchange rate fluctuations is essential but many tools are slow or paid. Created a lightweight and free app that shows more than 100 currencies in real time, with historical charts for quick and informed analysis.",
    tags: ["Vibe Coding", "Exchange APIs", "Interactive Charts"],
    link: "https://currency-converter-pro.pages.dev/",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fcurrency.png&w=1200&q=75"
  },
  {
    title: "Smart Dictionary",
    description: "Needed a fast dictionary that went beyond definitions. Developed an app where anyone can look up words, see synonyms, antonyms and hear correct pronunciation — all in one place.",
    tags: ["Vibe Coding", "Lexicography", "Web Audio"],
    link: "https://dict-5qo.pages.dev/",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fdictionary.png&w=1200&q=75"
  },
  {
    title: "ISC: Guardians of Gender Equality",
    description: "There was a lack of practical documentation on gender auditing in the Higher Control Institutions of PALOP. Prepared a research report adopted in an international meeting between Angola and other Lusophone countries, promoting female empowerment in public governance.",
    tags: ["Gender Auditing", "International Cooperation", "Public Policies"],
    link: "https://tca-es5.pages.dev/",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fisc-genero.png&w=1200&q=75"
  },
  {
    title: "Technology Online Store",
    description: "Due to the lack of simple, complete and free e-commerce templates for emerging markets, created a functional demo store with HTML, CSS, JavaScript and integrated API — including realistic checkout page. It's a ready-to-use model for any entrepreneur who wants to sell products online without depending on paid platforms.",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://shopgoat.pages.dev",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Floja.png&w=1200&q=75"
  },
  {
    title: "Digital Catalog - shop.goat.africa",
    description: "Managing a product catalog in Angola is challenging without accessible solutions. Developed a catalog website that updates automatically from a Google Sheets spreadsheet. Just edit the table for the site to reflect changes in real time, making it ideal for small businesses in resource-constrained contexts.",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://shop.goat.africa",
    image: "https://carlos.goat.africa/_next/image?url=%2Fimages%2Fcatalogo.png&w=1200&q=75"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold">Carlos Araújo's Project Dashboard</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive previews of all my web applications and services
          </p>
        </div>
      </header>

      {/* Project Previews Dashboard */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Project Dashboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bento-style showcase of all my innovative web applications and projects
            </p>
          </div>

          <BentoGrid className="max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <BentoCard
                key={index}
                name={project.title}
                className={
                  (index === 0 || index === 6 || index === 12) ? "col-span-3" :
                  (index % 4 === 1 || index === 7) ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" :
                  index % 3 === 0 ? "col-span-1" :
                  "col-span-1"
                }
                background={
                  <div
                    className="h-full w-full bg-gradient-to-br from-primary/20 via-secondary/10 to-muted bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})`, backgroundBlendMode: 'overlay' }}
                  />
                }
                Icon={() => <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">{project.title.charAt(0)}</div>}
                description={project.description.length > 100 ? project.description.substring(0, 100) + "..." : project.description}
                href={project.link}
                cta="View Live"
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 IA Goat Promo Series. Built with Next.js and deployed on Vercel.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
