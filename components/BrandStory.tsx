import { Gem, Scissors, CheckCircle } from "lucide-react";

export default function BrandStory() {
  const points = [
    {
      icon: <Gem className="w-8 h-8 text-gold-500 mb-4 stroke-[1.5]" />,
      title: "Kualitas Bahan Premium",
      desc: "Menggunakan material Katun Primis & Sutra pilihan yang sejuk dan jatuh dengan sempurna di badan."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gold-500 mb-4 stroke-[1.5]" />,
      title: "Motif Eksklusif",
      desc: "Koleksi limited edition yang memadukan pakem motif batik otentik dengan palet warna modern."
    },
    {
      icon: <Scissors className="w-8 h-8 text-gold-500 mb-4 stroke-[1.5]" />,
      title: "Jahitan Custom Fit",
      desc: "Dikerjakan oleh artisan berpengalaman, dilengkapi furing premium untuk kenyamanan ekstra."
    }
  ];

  return (
    <section className="py-32 bg-[#f3efc2] border-t border-gold-600/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-navy-950 mb-8">Filosofi Kami</h2>
        <p className="text-navy-800 max-w-3xl mx-auto mb-20 text-lg font-light leading-relaxed">
          "Kami percaya bahwa batik lebih dari sekadar pakaian. Ia adalah identitas, kualitas kain terbaik, pewarnaan presisi, serta dedikasi pada keaslian seni Nusantara."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/50 transition-colors border border-transparent hover:border-gold-600/20 duration-500">
              {point.icon}
              <h3 className="text-navy-950 text-xl font-serif mb-3">{point.title}</h3>
              <p className="text-navy-800 font-light text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}