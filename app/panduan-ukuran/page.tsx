import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Komponen Card untuk setiap Panduan Ukuran
function SizeCard({ title, imageSrc, tableHeaders, tableRows }: { 
  title: string, 
  imageSrc: string, 
  tableHeaders: string[], 
  tableRows: (string | number)[][] 
}) {
  return (
    <div className="bg-white border border-gold-600/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Gambar Produk */}
        <div className="md:w-2/5 relative aspect-square md:aspect-auto">
          <img 
            src={`/image/${imageSrc}`} 
            alt={`Panduan ukuran ${title}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tabel Ukuran */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-serif text-2xl text-navy-950 mb-6 pb-4 border-b border-gold-600/30">
            {title}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-navy-800">
              <thead className="text-xs uppercase bg-[#f3efc2]/50 text-navy-950">
                <tr>
                  {tableHeaders.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 font-medium tracking-wider">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className={`px-4 py-3 ${cellIdx === 0 ? 'font-medium text-navy-950' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-gray-400 mt-4 italic">*Ukuran dalam sentimeter (cm). Toleransi jahitan 1-2 cm.</p>
        </div>
      </div>
    </div>
  );
}

export default function PanduanUkuranPage() {
  return (
    <main className="bg-[#f3efc2] min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl text-navy-950 mb-6">Panduan Ukuran</h1>
          <div className="w-16 h-[2px] bg-gold-600 mx-auto mb-6"></div>
          <p className="text-navy-800 font-light max-w-2xl mx-auto">
            Temukan ukuran yang paling sempurna untuk Anda. Koleksi BatiQyunik dikerjakan dengan presisi untuk memastikan kenyamanan dan potongan yang elegan.
          </p>
        </div>

        <div className="space-y-12">
          <SizeCard 
            title="Gamis Premium"
            imageSrc="uk-gamis-premium.jpg"
            tableHeaders={["Ukuran", "Bahu", "L. Dada", "L. Pinggang", "L. Pinggul", "P. Inner", "P. Outer"]}
            tableRows={[
              ["S", "37", "96", "86", "106", "135", "120"],
              ["M", "38", "100", "90", "110", "135", "120"],
              ["L", "39", "104", "94", "114", "135", "120"],
              ["XL", "40", "108", "98", "116", "135", "120"],
              ["2XL", "40", "112", "102", "120", "135", "120"]
            ]}
          />

          <SizeCard 
            title="Kebaya 130"
            imageSrc="uk-kebaya-130.jpg"
            tableHeaders={["Ukuran", "Bahu", "L. Dada", "L. Pinggang", "L. Pinggul", "P. Baju"]}
            tableRows={[
              ["S", "37", "96", "86", "106", "130"],
              ["M", "38", "100", "90", "110", "130"],
              ["L", "39", "104", "94", "114", "130"],
              ["XL", "40", "108", "98", "116", "130"],
              ["2XL", "40", "112", "102", "120", "130"]
            ]}
          />

          <SizeCard 
            title="Kebaya Baru"
            imageSrc="uk-kebaya-baru.jpg"
            tableHeaders={["Ukuran", "Bahu", "L. Dada", "L. Pinggang", "L. Pinggul", "P. Baju"]}
            tableRows={[
              ["S", "37", "96", "86", "106", "120"],
              ["M", "38", "100", "90", "110", "120"],
              ["L", "39", "104", "94", "114", "120"],
              ["XL", "40", "108", "98", "116", "120"],
              ["2XL", "40", "112", "102", "120", "120"]
            ]}
          />

          <SizeCard 
            title="Kebaya Gantung"
            imageSrc="uk-kebaya-gantung.jpg"
            tableHeaders={["Ukuran", "L. Dada", "P. Tangan", "P. Inner", "P. Outer"]}
            tableRows={[
              ["S", "96", "48", "-", "-"],
              ["M", "100", "50", "-", "-"],
              ["L", "104", "50", "60", "70"],
              ["XL", "108", "51", "-", "-"],
              ["2XL", "112", "51", "-", "-"]
            ]}
          />
          
          <SizeCard 
            title="Kebaya Panjang 80"
            imageSrc="uk-kebaya-panjang-80.jpg"
            tableHeaders={["Ukuran", "Bahu", "L. Dada", "L. Pinggang", "L. Pinggul", "P. Baju"]}
            tableRows={[
              ["S", "37", "96", "86", "106", "80"],
              ["M", "38", "100", "90", "110", "80"],
              ["L", "39", "104", "94", "114", "80"],
              ["XL", "40", "108", "98", "116", "80"],
              ["2XL", "40", "112", "102", "120", "80"]
            ]}
          />

          <SizeCard 
            title="Kebaya Panjang 95"
            imageSrc="uk-kebaya-panjang-95.jpg"
            tableHeaders={["Ukuran", "Bahu", "L. Dada", "L. Pinggang", "L. Pinggul", "P. Baju"]}
            tableRows={[
              ["S", "37", "96", "106", "86", "95"],
              ["M", "38", "100", "110", "90", "95"],
              ["L", "39", "104", "94", "114", "95"],
              ["XL", "40", "108", "116", "98", "95"],
              ["2XL", "40", "112", "102", "120", "95"]
            ]}
          />

          <SizeCard 
            title="Rok Jeans Panjang"
            imageSrc="uk-rok-jeans-panjang.jpg"
            tableHeaders={["Ukuran", "L. Pinggang", "L. Pinggul", "P. Rok"]}
            tableRows={[
              ["S", "70-74", "80-84", "92"],
              ["M", "74-78", "84-88", "95"],
              ["L", "78-82", "88-92", "95"],
              ["XL", "82-90", "92-96", "95"],
              ["2XL", "90-100", "96-104", "95"],
              ["3XL", "100-106", "104-112", "95"],
              ["4XL", "106-112", "112-120", "95"],
              ["5XL", "112-118", "120-128", "95"],
              ["6XL", "118-124", "128-136", "95"]
            ]}
          />

          <SizeCard 
            title="Rok Jeans Mini"
            imageSrc="uk-rok-jeans-mini.jpg"
            tableHeaders={["Ukuran", "L. Pinggang", "L. Pinggul", "P. Rok"]}
            tableRows={[
              ["S", "72-76", "82-86", "55"],
              ["M", "76-80", "86-90", "60"],
              ["L", "80-84", "90-94", "60"],
              ["XL", "84-88", "94-98", "60"]
            ]}
          />

          <SizeCard 
            title="Kulot Jeans"
            imageSrc="uk-kulot-jeans.jpg"
            tableHeaders={["Ukuran", "L. Pinggang", "L. Pinggul", "P. Kulot"]}
            tableRows={[
              ["S", "65-69", "82", "100"],
              ["M", "70-74", "86", "100"],
              ["L", "75-79", "90", "100"],
              ["XL", "80-84", "94", "100"],
              ["2XL", "85-89", "100", "100"],
              ["3XL", "90-94", "104", "100"]
            ]}
          />

        </div>
      </div>
      
      <Footer />
    </main>
  );
}