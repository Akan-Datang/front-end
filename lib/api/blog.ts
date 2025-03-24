export interface BlogPost {
    id: string;
    title: string;
    category: string;
    date: string;
    imageUrl: string;
    content: string;
  }
  
  // Helper function to convert title to slug
  export function titleToSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }
  
  // Sample blog posts data with content
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Membangun Marketplace Jual Beli Website dengan Teknologi Modern",
      category: "Web Development",
      date: "March 18, 2025",
      imageUrl: "/blog/cb1.png",
      content: `
        <h1>Membangun Marketplace Jual Beli Website dengan Teknologi Modern</h1>
        
        <h2>Pendahuluan</h2>
        <p>Dalam era digital ini, semakin banyak orang tertarik untuk membeli dan menjual website. Bisnis jual beli website menjadi peluang besar, baik bagi pengembang, investor, maupun pemilik bisnis online. Artikel ini akan membahas secara mendalam bagaimana membangun marketplace jual beli website dengan teknologi modern seperti React, Next.js, dan berbagai tools lainnya.</p>
        
        <h2>Mengapa Bisnis Jual Beli Website?</h2>
        <p>Website adalah aset digital yang dapat menghasilkan pendapatan pasif, sehingga banyak orang tertarik untuk membeli website yang sudah berjalan. Marketplace jual beli website memungkinkan pemilik website untuk menjual bisnis mereka dengan mudah, dan investor dapat membeli website yang sudah memiliki audiens serta penghasilan stabil.</p>
        
        <h2>Teknologi yang Digunakan</h2>
        <h3>1. Frontend: React dan Next.js</h3>
        <p>React dan Next.js memberikan kecepatan dan fleksibilitas tinggi dalam membangun UI interaktif dan SEO-friendly.</p>
        
        <h3>2. Backend: Node.js dan Express</h3>
        <p>Backend yang scalable dengan Node.js dan Express memungkinkan pengelolaan data pengguna dan transaksi dengan efisien.</p>
        
        <h3>3. Database: PostgreSQL atau MongoDB</h3>
        <p>PostgreSQL untuk data terstruktur dan MongoDB untuk fleksibilitas data listing website yang dijual.</p>
        
        <h3>4. Payment Gateway</h3>
        <p>Integrasi dengan Stripe atau Midtrans untuk memudahkan transaksi pembelian website.</p>
        
        <h2>Fitur Utama dalam Marketplace Jual Beli Website</h2>
        <ul>
            <li>Dashboard pengguna untuk mengelola listing dan transaksi.</li>
            <li>Sistem escrow untuk menjamin keamanan transaksi.</li>
            <li>Filter pencarian website berdasarkan niche, traffic, dan pendapatan.</li>
            <li>Verifikasi dan rating penjual untuk meningkatkan kepercayaan.</li>
        </ul>
        
        <h2>SEO dan Digital Marketing untuk Marketplace</h2>
        <p>Untuk meningkatkan visibilitas marketplace jual beli website, strategi SEO seperti optimasi on-page, backlink building, dan pemasaran konten sangat diperlukan.</p>
        
        <h2>Kesimpulan</h2>
        <p>Membangun marketplace jual beli website membutuhkan teknologi yang handal, fitur keamanan yang baik, serta strategi pemasaran yang tepat agar sukses di pasar digital.</p>
      `,
    },
    {
      id: "2",
      title: "Kecepatan dan Keuntungan React & Next.js dalam Web Development",
      category: "Web Development",
      date: "March 18, 2025",
      imageUrl: "/blog/cb2.png",
      content: `
        <h1>Kecepatan dan Keuntungan React & Next.js dalam Web Development</h1>
        
        <h2>Pendahuluan</h2>
        <p>Dalam dunia pengembangan web modern, kecepatan adalah faktor penting. Pengguna menginginkan pengalaman yang cepat dan responsif saat menjelajahi website. React dan Next.js adalah dua teknologi yang banyak digunakan untuk membangun aplikasi web yang cepat dan efisien.</p>
        
        <h2>Mengapa React dan Next.js?</h2>
        <p>React dan Next.js merupakan dua teknologi populer yang digunakan dalam pengembangan aplikasi web modern. React adalah pustaka JavaScript yang dibuat oleh Facebook untuk membangun antarmuka pengguna (UI), sedangkan Next.js adalah framework berbasis React yang menawarkan fitur tambahan seperti server-side rendering (SSR) dan static site generation (SSG).</p>
        
        <h2>Keunggulan React</h2>
        <ul>
            <li><strong>Komponen Reusable:</strong> React memungkinkan pengembang membangun UI dengan komponen yang dapat digunakan kembali.</li>
            <li><strong>Virtual DOM:</strong> React menggunakan Virtual DOM untuk meningkatkan performa dan kecepatan rendering.</li>
            <li><strong>Ekosistem yang Kuat:</strong> React memiliki komunitas yang besar dan dukungan library yang luas.</li>
        </ul>
        
        <h2>Keunggulan Next.js</h2>
        <ul>
            <li><strong>Server-Side Rendering (SSR):</strong> Memungkinkan halaman dirender di server sebelum dikirim ke pengguna, meningkatkan kecepatan loading.</li>
            <li><strong>Static Site Generation (SSG):</strong> Membantu menghasilkan halaman statis yang lebih cepat diakses.</li>
            <li><strong>Optimasi Performa:</strong> Next.js dilengkapi dengan fitur otomatis seperti optimasi gambar dan pengaturan cache.</li>
        </ul>
        
        <h2>Kecepatan dalam Pengembangan</h2>
        <p>Dengan React dan Next.js, pengembang dapat membangun aplikasi lebih cepat berkat fitur seperti hot reloading, TypeScript support, dan API routes dalam Next.js.</p>
        
        <h2>Kesimpulan</h2>
        <p>React dan Next.js menawarkan banyak keuntungan dalam pengembangan web modern, baik dari segi kecepatan, performa, maupun efisiensi pengembangan. Jika Anda ingin membangun aplikasi web yang cepat dan responsif, React dan Next.js adalah pilihan yang tepat.</p>
      `,
    },
    {
      id: "3",
      title: "Kecepatan dan Keuntungan Menggunakan React & Next.js",
      category: "Web Development",
      date: "March 15, 2025",
      imageUrl: "/blog/cb6.png",
      content: `
        <h1>Kecepatan dan Keuntungan Menggunakan React & Next.js</h1>
    
    <h2>Pendahuluan</h2>
    <p>Dalam dunia pengembangan web modern, kecepatan dan efisiensi merupakan faktor utama dalam membangun aplikasi yang optimal. Dua teknologi yang sering digunakan adalah <strong>React</strong> dan <strong>Next.js</strong>. Artikel ini akan membahas kecepatan pengembangan serta keuntungan dari React dan Next.js.</p>
    
    <h2>Apa Itu React?</h2>
    <p>React adalah pustaka JavaScript yang dikembangkan oleh Facebook untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Dengan konsep <em>component-based architecture</em>, React memungkinkan pengembang untuk membuat UI yang dapat digunakan kembali.</p>
    
    <h2>Apa Itu Next.js?</h2>
    <p>Next.js adalah framework berbasis React yang menyediakan fitur-fitur tambahan seperti <em>server-side rendering (SSR)</em>, <em>static site generation (SSG)</em>, dan optimasi performa yang lebih baik.</p>
    
    <h2>Kecepatan Pengembangan dengan React & Next.js</h2>
    <ul>
        <li><strong>Reusable Components:</strong> Komponen yang dapat digunakan kembali mempercepat pengembangan.</li>
        <li><strong>Hot Reloading:</strong> Perubahan kode dapat langsung terlihat tanpa harus me-refresh halaman.</li>
        <li><strong>Optimasi Otomatis:</strong> Next.js secara otomatis mengoptimalkan bundling dan kinerja halaman.</li>
    </ul>
    
    <h2>Keuntungan Menggunakan React</h2>
    <ol>
        <li><strong>Virtual DOM:</strong> Mempercepat rendering halaman dengan pembaruan hanya pada elemen yang berubah.</li>
        <li><strong>Komunitas Besar:</strong> Banyaknya dukungan dari komunitas dan pustaka tambahan.</li>
        <li><strong>SEO Friendly (dengan Next.js):</strong> Next.js meningkatkan SEO dengan SSR dan SSG.</li>
    </ol>
    
    <h2>Keuntungan Menggunakan Next.js</h2>
    <ol>
        <li><strong>Server-Side Rendering (SSR):</strong> Meningkatkan kecepatan loading pertama dan SEO.</li>
        <li><strong>Static Site Generation (SSG):</strong> Menghasilkan halaman statis yang lebih cepat.</li>
        <li><strong>Image Optimization:</strong> Next.js secara otomatis mengoptimalkan gambar untuk performa yang lebih baik.</li>
    </ol>
    
    <h2>Kesimpulan</h2>
    <p>React dan Next.js merupakan kombinasi yang sangat kuat untuk membangun aplikasi web modern. Dengan kecepatan pengembangan yang tinggi, optimasi performa yang luar biasa, serta kemudahan dalam pengelolaan UI, kedua teknologi ini menjadi pilihan utama bagi banyak pengembang.</p>
      `,
    },
    {
      id: "5",
      title: "Keamanan Siber: Tantangan dan Solusi di Era Digital",
      category: "Cyber Security",
      date: "March 12, 2025",
      imageUrl: "/blog/cb4.jpeg",
      content: `
        <h1>Keamanan Siber: Tantangan dan Solusi di Era Digital</h1>
        
        <h2>Pendahuluan</h2>
        <p>Keamanan siber semakin menjadi perhatian utama di era digital. Dengan meningkatnya ancaman siber, organisasi dan individu harus memahami tantangan serta solusi untuk melindungi data dan sistem mereka.</p>
        
        <h2>Apa Itu Keamanan Siber?</h2>
        <p>Keamanan siber adalah praktik melindungi sistem, jaringan, dan data dari serangan digital. Tujuannya adalah untuk mencegah akses yang tidak sah, pencurian data, serta kerusakan sistem.</p>
        
        <h2>Ancaman Siber yang Umum</h2>
        <h3>1. Malware</h3>
        <p>Malware adalah perangkat lunak berbahaya yang dirancang untuk merusak atau mencuri data. Contohnya termasuk virus, worm, dan ransomware.</p>
        
        <h3>2. Phishing</h3>
        <p>Phishing adalah metode penipuan di mana penyerang mencoba mencuri informasi pribadi dengan menyamar sebagai entitas tepercaya.</p>
        
        <h3>3. Serangan DDoS</h3>
        <p>Distributed Denial-of-Service (DDoS) adalah serangan yang membanjiri server dengan lalu lintas berlebihan hingga tidak dapat diakses.</p>
        
        <h3>4. Ransomware</h3>
        <p>Ransomware mengenkripsi data korban dan meminta tebusan untuk mendapatkan kembali akses.</p>
        
        <h3>5. Serangan Man-in-the-Middle</h3>
        <p>Dalam serangan ini, penyerang mencegat komunikasi antara dua pihak untuk mencuri atau mengubah data.</p>
        
        <h2>Strategi Keamanan Siber</h2>
        <h3>1. Gunakan Firewall dan Antivirus</h3>
        <p>Firewall dan antivirus membantu mencegah akses yang tidak sah dan mendeteksi ancaman sebelum merusak sistem.</p>
        
        <h3>2. Gunakan Autentikasi Multi-Faktor (MFA)</h3>
        <p>MFA menambahkan lapisan keamanan dengan memerlukan lebih dari satu bentuk verifikasi saat login.</p>
        
        <h3>3. Backup Data Secara Berkala</h3>
        <p>Membuat cadangan data secara berkala membantu mengurangi dampak serangan seperti ransomware.</p>
        
        <h3>4. Edukasi Pengguna</h3>
        <p>Kesadaran tentang praktik keamanan, seperti mengenali email phishing, dapat mengurangi risiko serangan.</p>
        
        <h3>5. Enkripsi Data</h3>
        <p>Enkripsi memastikan bahwa data hanya dapat dibaca oleh pihak yang memiliki akses yang sah.</p>
        
        <h2>Masa Depan Keamanan Siber</h2>
        <p>Teknologi seperti kecerdasan buatan (AI) dan blockchain semakin digunakan untuk meningkatkan keamanan siber. Sistem deteksi ancaman berbasis AI dapat mengidentifikasi pola serangan lebih cepat, sementara blockchain membantu dalam menjaga integritas data.</p>
        
        <h2>Kesimpulan</h2>
        <p>Keamanan siber adalah aspek krusial dalam era digital yang terus berkembang. Dengan menerapkan strategi yang tepat, individu dan organisasi dapat mengurangi risiko serangan siber dan melindungi data mereka.</p>
      `,
    },
    {
      id: "6",
      title: "Tantangan Global, Strategi Perlindungan, dan Masa Depan Keamanan Digital dalam Menghadapi Ancaman Dunia Maya",
      category: "Cyber Security",
      date: "March 10, 2025",
      imageUrl: "/blog/cb5.jpeg",
      content: `
        
        <h2>Pendahuluan</h2>
        <p>Keamanan siber merupakan aspek krusial dalam dunia digital modern. Dengan meningkatnya ketergantungan pada teknologi, serangan siber menjadi ancaman yang nyata bagi individu, bisnis, dan pemerintah. Artikel ini akan membahas berbagai aspek keamanan siber, dari jenis ancaman hingga strategi perlindungan dan perkembangan teknologi terbaru.</p>
        
        <h2>Apa Itu Keamanan Siber?</h2>
        <p>Keamanan siber adalah praktik melindungi sistem, jaringan, dan data dari ancaman digital. Tujuan utamanya adalah mencegah akses yang tidak sah, pencurian data, serta kerusakan sistem.</p>
        
        <h2>Jenis Ancaman Siber</h2>
        <h3>1. Malware</h3>
        <p>Malware adalah perangkat lunak berbahaya seperti virus, worm, trojan, dan ransomware yang dirancang untuk mencuri, merusak, atau mengganggu sistem komputer.</p>
        
        <h3>2. Phishing</h3>
        <p>Phishing adalah metode penipuan yang digunakan untuk mencuri informasi sensitif dengan menyamar sebagai entitas tepercaya.</p>
        
        <h3>3. Serangan DDoS</h3>
        <p>Distributed Denial-of-Service (DDoS) adalah serangan yang membanjiri server dengan lalu lintas berlebihan sehingga tidak dapat diakses.</p>
        
        <h3>4. Zero-Day Exploit</h3>
        <p>Serangan ini mengeksploitasi kerentanan dalam perangkat lunak yang belum diperbaiki oleh pengembang.</p>
        
        <h3>5. Insider Threat</h3>
        <p>Ancaman yang berasal dari orang dalam organisasi yang menyalahgunakan akses untuk mencuri atau merusak data.</p>
        
        <h2>Strategi Keamanan Siber</h2>
        <h3>1. Firewall dan Antivirus</h3>
        <p>Perlindungan dasar untuk mendeteksi dan mencegah ancaman sebelum merusak sistem.</p>
        
        <h3>2. Enkripsi Data</h3>
        <p>Memastikan bahwa data hanya dapat dibaca oleh pihak yang memiliki akses sah.</p>
        
        <h3>3. Autentikasi Multi-Faktor (MFA)</h3>
        <p>Menambahkan lapisan keamanan dengan memerlukan lebih dari satu metode verifikasi saat login.</p>
        
        <h3>4. Pelatihan Kesadaran Keamanan</h3>
        <p>Mengedukasi karyawan dan pengguna tentang ancaman siber dapat mengurangi risiko serangan.</p>
        
        <h3>5. Backup Data Secara Berkala</h3>
        <p>Cadangan data membantu pemulihan jika terjadi serangan seperti ransomware.</p>
        
        <h2>Peran Ethical Hacking</h2>
        <p>Ethical hackers atau "white hat" hackers membantu mengidentifikasi celah keamanan sebelum dieksploitasi oleh pihak jahat.</p>
        
        <h2>Regulasi dan Kepatuhan</h2>
        <p>Hukum dan regulasi seperti GDPR, HIPAA, dan UU Perlindungan Data di Indonesia membantu mengatur standar keamanan siber.</p>
        
        <h2>Teknologi Masa Depan dalam Keamanan Siber</h2>
        <h3>1. Artificial Intelligence (AI) dan Machine Learning</h3>
        <p>AI digunakan untuk mendeteksi ancaman secara real-time dan mempercepat respons terhadap serangan.</p>
        
        <h3>2. Blockchain</h3>
        <p>Blockchain meningkatkan transparansi dan keamanan dalam transaksi digital.</p>
        
        <h3>3. Zero Trust Architecture</h3>
        <p>Model keamanan yang tidak mempercayai perangkat atau pengguna secara default, tetapi terus memverifikasi mereka.</p>
        
        <h2>Kesimpulan</h2>
        <p>Keamanan siber adalah aspek penting dalam dunia digital yang berkembang pesat. Dengan menerapkan strategi yang tepat dan mengikuti perkembangan teknologi, individu dan organisasi dapat mengurangi risiko serangan siber dan melindungi aset digital mereka.</p>
      `,
    },
  ]
  
  // Function to get all blog posts
export function getAllBlogPosts(sortBy: "date" | "title" = "date"): BlogPost[] {
    return [...blogPosts].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }
  
  // Function to get blog posts by category
  export function getBlogPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter((post) => post.category === category);
  }
  
  // Function to get all unique categories
  export function getAllCategories(): string[] {
    const categories = new Set(blogPosts.map((post) => post.category));
    return Array.from(categories);
  }
  
  // Function to group blog posts by category
  export function getBlogPostsGroupedByCategory(): Record<string, BlogPost[]> {
    return blogPosts.reduce((acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);
      return acc;
    }, {} as Record<string, BlogPost[]>);
  }
  
  // Function to get a blog post by its title slug
  export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => titleToSlug(post.title) === slug);
  }
  
  // Function to get a blog post by ID
  export function getBlogPostById(id: string): BlogPost | undefined {
    return blogPosts.find((post) => post.id === id);
  }
  
  // Function to search blog posts
  export function searchBlogPosts(query: string): BlogPost[] {
    const lowerCaseQuery = query.toLowerCase();
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.content.toLowerCase().includes(lowerCaseQuery)
    );
  }
  
  // Function to get related posts
  export function getRelatedPosts(postId: string, limit: number = 3): BlogPost[] {
    const post = getBlogPostById(postId);
    if (!post) return [];
  
    return blogPosts
      .filter((p) => p.id !== postId && p.category === post.category)
      .slice(0, limit);
  }
  
  // Function to get recent posts
  export function getRecentPosts(limit: number = 5): BlogPost[] {
    return getAllBlogPosts()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }