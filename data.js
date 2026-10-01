// data.js - 3. Sınıf Müfredat İçerikleri (Konu Özetleri ve Sorular)

const CURRICULUM_DATA = {
    // ==========================================
    // FEN BİLİMLERİ
    // ==========================================
    'science_living': {
        title: '🌱 Canlılar Dünyasına Yolculuk',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">🔬 Canlıların Sınıflandırılması</h3>
            <p>Canlılar dünyasını daha iyi anlamak için onları benzer özelliklerine göre 4 gruba ayırırız:</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>🦠 Mikroskobik Canlılar:</strong> Gözle görülemeyecek kadar küçük olan ve sadece <em>mikroskopla</em> incelenebilen canlılardır (Örn: Bakteriler). Bazıları hastalık yaparken, bazıları yoğurt yapımında görev alır.</li>
                <li><strong>🍄 Mantarlar:</strong> Kendi besinini üretemeyen, genellikle nemli yerlerde yaşayan canlılardır. Şapkalı mantarlar, küf ve maya mantarları vardır. Besin üretemedikleri için <em>bitki değillerdir</em>.</li>
                <li><strong>🌲 Bitkiler:</strong> Güneş ışığı, su ve toprak yardımıyla <em>kendi besinini üretebilen</em> ve doğaya oksijen sağlayan canlılardır.</li>
                <li><strong>🦁 Hayvanlar:</strong> Kendi besinini üretemeyen, dışarıdan beslenen canlılardır. Karada, suda veya havada yaşayabilirler ve hareket kabiliyetleri gelişmiştir.</li>
            </ul>
        `,
        questions: [
            { v: '📚', q: 'Canlıları benzer özelliklerine göre gruplara ayırmaya ne ad verilir?', a: 'Sınıflandırma', o: ['Beslenme', 'Solunum'] },
            { v: '🔬', q: 'Gözle görülemeyecek kadar küçük olan ve mikroskopla incelenebilen canlılara ne ad verilir?', a: 'Mikroskobik Canlılar', o: ['Mantarlar', 'Bitkiler'] },
            { v: '🌲', q: 'Kendi besinini üretebilen ve doğaya oksijen sağlayan canlı grubu hangisidir?', a: 'Bitkiler', o: ['Hayvanlar', 'Mantarlar'] },
            { v: '🍄', q: 'Kendi besinini üretemediği için bitki sınıfında yer almayan canlı grubu hangisidir?', a: 'Mantarlar', o: ['Bitkiler', 'Hayvanlar'] },
            { v: '🧬', q: 'Canlıların genetik özelliklerini inceleyerek etiketleme yaparken ne kullanılır?', a: 'DNA Analizi', o: ['Morfolojik Analiz', 'Fotosentez'] },
            { v: '👁️', q: 'Çevremizdeki varlıkları, renkleri ve şekilleri algılamamızı sağlayan duyu organımız hangisidir?', a: 'Göz', o: ['Kulak', 'Burun'] },
            { v: '👃', q: 'Çiçeklerin, yemeklerin veya tehlikeli dumanların kokusunu algılayan organımız nedir?', a: 'Burun', o: ['Dil', 'Göz'] },
            { v: '👂', q: 'Etrafımızdaki sesleri, konuşmaları ve tehlike alarmlarını duymamızı sağlayan organımız hangisidir?', a: 'Kulak', o: ['Deri', 'Burun'] },
            { v: '👅', q: 'Yediğimiz yiyeceklerin acı, tatlı veya ekşi olduğunu anlamamızı sağlayan organımız nedir?', a: 'Dil', o: ['Burun', 'Deri'] },
            { v: '🖐️', q: 'Sıcağı, soğuğu, sertliği ve yumuşaklığı hissetmemizi sağlayan, tüm vücudumuzu kaplayan organımız hangisidir?', a: 'Deri', o: ['Göz', 'Kulak'] },
            { v: '🌱➡️🌳', q: 'Bir tohumun toprağa düşüp çimlenerek büyümesi ve tekrar tohum vermesi hangi canlı grubunun yaşam döngüsüdür?', a: 'Bitkiler', o: ['Hayvanlar', 'Mantarlar'] },
            { v: '🐛➡️🦋', q: 'Bir tırtılın zamanla kelebeğe dönüşerek gelişimini tamamlaması olayına genel olarak ne ad verilir?', a: 'Yaşam Döngüsü', o: ['Beslenme', 'Solunum'] }
        ]
    },
    'science_matter': {
        title: '🧊 Maddeyi Tanıyalım',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Madde Nedir?</h3>
            <p>Çevremizde gördüğümüz, boşlukta yer kaplayan ve bir kütlesi olan her şeye <strong>madde</strong> denir. Maddeler doğada üç farklı fiziksel hâlde bulunurlar:</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>🪨 Katı Maddeler:</strong> Belirli bir şekilleri vardır. Dışarıdan bir etki (kuvvet) olmadıkça şekilleri değişmez. (Örnek: Taş, masa, kalem, buz)</li>
                <li><strong>💧 Sıvı Maddeler:</strong> Belirli bir şekilleri yoktur. Konuldukları kabın şeklini alırlar ve akışkandırlar. (Örnek: Su, süt, zeytinyağı, meyve suyu)</li>
                <li><strong>☁️ Gaz Maddeler:</strong> Belirli bir şekilleri yoktur. Bulundukları ortama tamamen yayılırlar. Gözle görülmeleri genellikle zordur. (Örnek: Hava, su buharı, doğalgaz)</li>
            </ul>
        `,
        questions: [
            { v: '💧', q: 'Suyun fiziksel hâli nedir?', a: 'Sıvı', o: ['Katı', 'Gaz'] },
            { v: '🪨', q: 'Taşın fiziksel hâli nedir?', a: 'Katı', o: ['Sıvı', 'Gaz'] },
            { v: '☁️', q: 'Su buharının fiziksel hâli nedir?', a: 'Gaz', o: ['Katı', 'Sıvı'] },
            { v: 'Belirli bir şekli vardır', q: 'Bu hangi maddedir?', a: 'Katı', o: ['Sıvı', 'Gaz'] },
            { v: 'Bulunduğu kabın şeklini alır', q: 'Bu hangi maddedir?', a: 'Sıvı', o: ['Katı', 'Gaz (Uçar gider)'] },
            { v: 'Akışkandır', q: 'Hangi madde grubu akışkandır?', a: 'Sıvılar', o: ['Katılar', 'Sadece gazlar'] },
            { v: 'Ortama tamamen yayılır', q: 'Hangi madde grubu bulunduğu ortama yayılır?', a: 'Gazlar', o: ['Katılar', 'Sıvılar'] }
        ]
    },
    'science_force': {
        title: '🏃 Kuvveti Keşfedelim',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">İtme ve Çekme Kuvveti</h3>
            <p>Cisimleri hareket ettirmek, durdurmak, hızlandırmak, yavaşlatmak veya şekillerini değiştirmek için onlara <strong>kuvvet</strong> uygularız.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>👉 İtme Kuvveti:</strong> Bir cismi kendimizden uzaklaştırmak için uyguladığımız kuvvettir. (Örnek: Market arabasını sürmek, topa vurmak, kapıyı kapatmak)</li>
                <li><strong>👈 Çekme Kuvveti:</strong> Bir cismi kendimize doğru yaklaştırmak için uyguladığımız kuvvettir. (Örnek: Kapıyı açmak, halat çekme yarışı oynamak, çantayı yerden kaldırmak)</li>
                <li><strong>⚠️ Dikkat:</strong> Hareket halindeki cisimleri durdurmaya çalışmak (örneğin hızla gelen bir topu tutmak) tehlikeli olabilir.</li>
            </ul>
        `,
        questions: [
            { v: '🚪 Kapıyı açmak', q: 'Kendine doğru çekerken hangi kuvvet uygulanır?', a: 'Çekme Kuvveti', o: ['İtme Kuvveti', 'Durdurma Kuvveti'] },
            { v: '🛒 Arabayı sürmek', q: 'Market arabasını ileri doğru götürürken hangi kuvvet uygulanır?', a: 'İtme Kuvveti', o: ['Çekme Kuvveti', 'Yavaşlatma Kuvveti'] },
            { v: '⚽ Topa vurmak', q: 'Duran topu hareket ettirmek için ne uygulanır?', a: 'İtme Kuvveti', o: ['Çekme Kuvveti', 'Şekil Değiştirme'] },
            { v: '🧲 Mıknatıs demiri...', q: 'Cümleyi tamamla!', a: 'Çeker', o: ['İter', 'Durdurur'] },
            { v: '🧳 Çantayı kaldırmak', q: 'Yerdeki çantayı havaya kaldırmak için hangi kuvvet uygulanır?', a: 'Çekme Kuvveti', o: ['İtme Kuvveti', 'Yön Değiştirme'] }
        ]
    },
    'science_earth': {
        title: '🌍 Gezegenimizi Tanıyalım',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Dünya'nın Şekli ve Yapısı</h3>
            <p>Üzerinde yaşadığımız gezegen olan Dünya'nın şekli <strong>küreye</strong> (topa) benzer. Geçmişte insanlar Dünya'nın düz olduğuna inanırlardı fakat bilim insanları (Macellan, Galileo) Dünya'nın yuvarlak olduğunu kanıtlamıştır.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Dünya'nın Katmanları (Dıştan İçe):</strong> Hava Tabakası (Atmosfer) ➔ Su Tabakası ➔ Kara Tabakası (Yer Kabuğu) ➔ Magma (Ateş Küre) ➔ Çekirdek (Ağır Küre).</li>
                <li><strong>Su ve Kara:</strong> Dünya yüzeyinin büyük bir kısmı (yaklaşık 4'te 3'ü) sularla kaplıdır. Uzaydan bakıldığında bu yüzden mavi görünür ("Mavi Gezegen").</li>
            </ul>
        `,
        questions: [
            { v: '🌍', q: 'Dünya\'nın şekli neye benzer?', a: 'Küreye', o: ['Tepsiye', 'Kareye'] },
            { v: '💧', q: 'Dünya yüzeyinde hangisi daha fazla yer kaplar?', a: 'Sular', o: ['Karalar', 'Ormanlar'] },
            { v: '🔥', q: 'Dünya\'nın en sıcak katmanı hangisidir?', a: 'Çekirdek', o: ['Su Tabakası', 'Hava Tabakası'] },
            { v: '☁️', q: 'Nefes aldığımız havayı oluşturan katman hangisidir?', a: 'Atmosfer', o: ['Magma', 'Kara Tabakası'] },
            { v: '⛴️', q: 'Sürekli hep aynı yöne giden bir gemi nereye ulaşır?', a: 'Başladığı yere', o: ['Dünyanın sonuna', 'Uzaya'] }
        ]
    },
    'science_light_sound': {
        title: '💡 Işık ve Sesler',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Çevremizdeki Işık ve Ses Kaynakları</h3>
            <p>Varlıkları görebilmemiz için <strong>ışığa</strong>, sesleri duyabilmemiz için ise bir <strong>ses kaynağına</strong> ihtiyacımız vardır.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Doğal Işık Kaynakları:</strong> Kendiliğinden ışık yayan, insanlar tarafından yapılmamış kaynaklardır. En büyük ışık kaynağımız <em>Güneş</em>'tir. Yıldızlar, şimşek, ateş böceği doğal ışık kaynağıdır.</li>
                <li><strong>Yapay Işık Kaynakları:</strong> İnsanların icat ettiği kaynaklardır. Ampul, mum, el feneri, trafik lambası. (Not: Ay, ışık kaynağı değildir, Güneşten aldığı ışığı yansıtır).</li>
                <li><strong>Ses Kaynakları:</strong> Sesin çıktığı her şeye ses kaynağı denir. Doğal (insan, kuş, rüzgar) ve yapay (televizyon, gitar, araba kornası) olarak ikiye ayrılır.</li>
            </ul>
        `,
        questions: [
            { v: '☀️', q: 'En büyük doğal ışık kaynağımız hangisidir?', a: 'Güneş', o: ['Ampul', 'Ay'] },
            { v: '🌙', q: 'Ay bir ışık kaynağı mıdır?', a: 'Hayır, yansıtıcıdır', o: ['Evet, yapaydır', 'Evet, doğaldır'] },
            { v: '🕯️', q: 'Mum nasıl bir ışık kaynağıdır?', a: 'Yapay', o: ['Doğal', 'Işık kaynağı değildir'] },
            { v: '🐦', q: 'Kuş sesi nasıl bir ses kaynağıdır?', a: 'Doğal ses kaynağı', o: ['Yapay ses kaynağı', 'Suni ses kaynağı'] },
            { v: '🚗', q: 'Araba kornası nasıl bir ses kaynağıdır?', a: 'Yapay ses kaynağı', o: ['Doğal ses kaynağı', 'Çevresel ses'] }
        ]
    },
    'science_electric': {
        title: '🔌 Elektrikli Araçlar',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Hayatımızdaki Elektrik</h3>
            <p>Elektrik, günlük hayatımızı kolaylaştıran çok önemli bir enerji türüdür. Elektrikli araçlar elektrik enerjisiyle çalışır.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Elektrik Kaynakları:</strong> Şehir elektriği (prizlerdeki elektrik), piller (kumanda, saat), bataryalar (cep telefonu, bilgisayar) ve aküler (otomobiller).</li>
                <li><strong>Güvenli Kullanım:</strong> Elektrik çok tehlikeli olabilir. Islak elle fişlere dokunmamalıyız. Yıpranmış kabloları kullanmamalı ve prizlere yabancı cisimler sokmamalıyız.</li>
                <li><strong>Pil Atıkları:</strong> Biten pilleri çöpe veya toprağa atmamalıyız, doğayı çok kirletir. Atık pil kutularına atmalıyız.</li>
            </ul>
        `,
        questions: [
            { v: '📱', q: 'Cep telefonları hangi elektrik kaynağı ile çalışır?', a: 'Batarya', o: ['Şehir elektriği', 'Akü'] },
            { v: '🚗', q: 'Arabaların çalışmasını sağlayan elektrik kaynağı hangisidir?', a: 'Akü', o: ['Pil', 'Priz'] },
            { v: '🔋', q: 'Biten pilleri nereye atmalıyız?', a: 'Atık pil kutusuna', o: ['Çöpe', 'Toprağa veya denize'] },
            { v: '🔌', q: 'Aşağıdakilerden hangisi tehlikeli bir davranıştır?', a: 'Islak elle prize dokunmak', o: ['Televizyonu kumandayla kapatmak', 'Şarj aletini dikkatlice çekmek'] },
            { v: '📺', q: 'Televizyon ve buzdolabı genellikle hangi elektrik kaynağıyla çalışır?', a: 'Şehir elektriği (Priz)', o: ['Pil', 'Akü'] }
        ]
    },

    // ==========================================
    // MATEMATİK
    // ==========================================
    'fractions': {
        title: '🍕 Kesirleri Öğrenelim',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Bütün, Yarım ve Çeyrek</h3>
            <p>Bir nesnenin parçalara ayrılmamış tam haline <strong>Bütün</strong> denir. Eğer bir bütünü eş (eşit) parçalara ayırırsak kesirleri elde ederiz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Bütün (Tam):</strong> Hiç parçalanmamış, eksiksiz nesnedir. (1/1)</li>
                <li><strong>Yarım:</strong> Bir bütünün <em>iki eşit</em> parçasından her birine denir. 1 Bütün = 2 Yarım eder. (1/2)</li>
                <li><strong>Çeyrek:</strong> Bir bütünün <em>dört eşit</em> parçasından her birine denir. 1 Bütün = 4 Çeyrek eder. (1/4)</li>
                <li><strong>Kesir Gösterimi:</strong> Üstteki sayıya Pay (alınan parça), ortadaki çizgiye Kesir Çizgisi, alttaki sayıya Payda (toplam parça sayısı) denir.</li>
            </ul>
        `,
        questions: [
            { v: '🟢🟢⚪⚪', q: 'Taralı alan hangi kesri ifade eder?', a: 'Yarım (1/2)', o: ['Çeyrek (1/4)', 'Bütün (1)'] },
            { v: '🔴⚪⚪⚪', q: 'Taralı alan hangi kesri ifade eder?', a: 'Çeyrek (1/4)', o: ['Yarım (1/2)', 'Bütün (1)'] },
            { v: '🔵🔵🔵🔵', q: 'Taralı alan hangi kesri ifade eder?', a: 'Bütün (1)', o: ['Çeyrek (1/4)', 'Yarım (1/2)'] },
            { v: '🟠🟠🟠⚪', q: 'Taralı alan hangi kesri ifade eder?', a: '3/4', o: ['1/2', '1/4'] },
            { v: '1 Bütün = ?', q: 'Bir bütün kaç yarım eder?', a: '2 Yarım', o: ['4 Yarım', '3 Yarım'] },
            { v: '1 Bütün = ?', q: 'Bir bütün kaç çeyrek eder?', a: '4 Çeyrek', o: ['2 Çeyrek', '3 Çeyrek'] }
        ]
    },
    'subtraction': {
        title: '➖ Onluk Bozarak Çıkarma',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Onluk Bozma Nedir?</h3>
            <p>Çıkarma işlemi yaparken birler basamağındaki sayıdan alttaki sayıyı çıkaramadığımızda komşuya gidip <strong>bir onluk</strong> alırız. Buna onluk bozarak çıkarma işlemi denir.</p>
            <p><strong>Örnek: 54 - 27 işlemi nasıl yapılır?</strong></p>
            <ol style="margin-left: 20px; margin-bottom:15px;">
                <li>Önce birler basamağına bakarız: 4'ten 7 çıkmaz.</li>
                <li>Onlar basamağındaki 5'ten bir onluk alırız (Orada 4 kalır).</li>
                <li>Aldığımız 10'u birler basamağındaki 4'e ekleriz, sayı 14 olur.</li>
                <li>Şimdi çıkarabiliriz: 14 - 7 = 7 (Birler basamağı).</li>
                <li>Onlar basamağında 4 kalmıştı: 4 - 2 = 2. Cevap: <strong>27</strong></li>
            </ol>
        `,
        questions: [
            { v: '54 - 27', q: 'İşleminin sonucu kaçtır?', a: '27', o: ['37', '17'] },
            { v: '76 - 39', q: 'İşleminin sonucu kaçtır?', a: '37', o: ['27', '47'] },
            { v: '82 - 45', q: 'İşleminin sonucu kaçtır?', a: '37', o: ['47', '27'] },
            { v: '61 - 18', q: 'İşleminin sonucu kaçtır?', a: '43', o: ['53', '33'] },
            { v: '90 - 25', q: 'İşleminin sonucu kaçtır?', a: '65', o: ['75', '55'] }
        ]
    },
    'time': {
        title: '🕐 Zamanı Okuma',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Saatler ve Takvim</h3>
            <p>Zamanı ölçmek için saat ve takvim kullanırız.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Saat:</strong> 1 Gün = 24 Saat, 1 Saat = 60 Dakika. Akrep (kısa çubuk) saati, Yelkovan (uzun çubuk) dakikayı gösterir.</li>
                <li><strong>Takvim:</strong> 1 Yıl = 12 Ay = 52 Hafta = 365 Gün. 1 Hafta = 7 Gündür.</li>
                <li><strong>Öğleden Önce / Sonra:</strong> Saat 12:00'den sonra dijital saatler 13, 14, 15 diye saymaya devam eder. Örneğin 14:00, öğleden sonra saat 2 demektir.</li>
            </ul>
        `,
        questions: [
            { v: '🕒', q: 'Saat kaçtır?', a: '03:00', o: ['15:30', '03:30'] },
            { v: '🕤', q: 'Saat kaçtır?', a: '09:30', o: ['10:30', '09:00'] },
            { v: '🕧', q: 'Saat kaçtır?', a: '12:30', o: ['01:30', '12:00'] },
            { v: '14:00', q: 'Bu saatin okunuşu nedir?', a: 'Öğleden sonra iki', o: ['Öğleden önce iki', 'Gece iki'] },
            { v: '📅', q: 'Bir yılda kaç ay vardır?', a: '12 Ay', o: ['10 Ay', '52 Ay'] },
            { v: '🗓️', q: 'Bir ayda ortalama kaç gün vardır?', a: '30 Gün', o: ['7 Gün', '365 Gün'] }
        ]
    },
    'money': {
        title: '🪙 Paralarımız',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Lira ve Kuruş</h3>
            <p>Alışveriş yaparken kullandığımız paralarımız kağıt ve madeni (bozuk) paralardır.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Temel Kural:</strong> 1 Türk Lirası (TL) = 100 Kuruş (Kr).</li>
                <li><strong>Madeni Paralar:</strong> 1 Kr, 5 Kr, 10 Kr, 25 Kr, 50 Kr, 1 TL.</li>
                <li><strong>Örnek:</strong> İki tane 50 Kuruş, 1 Lira eder (50+50=100 Kr = 1 TL). Dört tane 25 Kuruş, 1 Lira eder (25+25+25+25=100 Kr = 1 TL).</li>
            </ul>
        `,
        questions: [
            { v: '💵 5 TL + 🪙 50 Kr + 50 Kr', q: 'Toplam kaç lira eder?', a: '6 TL', o: ['5 TL', '7 TL'] },
            { v: '💵 10 TL - 🪙 25 Kr - 25 Kr - 25 Kr - 25 Kr', q: '10 TL verip 1 TL lik bisküvi alırsam ne kalır?', a: '9 TL', o: ['8 TL', '10 TL'] },
            { v: '1 TL = ?', q: '1 Lira kaç kuruş eder?', a: '100 Kuruş', o: ['50 Kuruş', '10 Kuruş'] },
            { v: '🪙 50 Kr + 25 Kr', q: 'Toplam kaç kuruş eder?', a: '75 Kuruş', o: ['65 Kuruş', '100 Kuruş'] }
        ]
    },
    'geometry': {
        title: '🔺 Geometri',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Cisimler ve Şekiller</h3>
            <p>Çevremizdeki nesnelerin şekillerini inceleriz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Üçgen:</strong> 3 kenarı ve 3 köşesi vardır. (Örnek: Trafik uyarı levhaları, dilim pizza)</li>
                <li><strong>Kare:</strong> 4 kenarı ve 4 köşesi vardır. <em>Bütün kenar uzunlukları birbirine eşittir.</em></li>
                <li><strong>Dikdörtgen:</strong> 4 kenarı ve 4 köşesi vardır. <em>Karşılıklı kenarları</em> birbirine eşittir (İki uzun, iki kısa kenar).</li>
                <li><strong>Çember:</strong> Köşesi ve kenarı yoktur. Yuvarlaktır. (Örnek: Simit, yüzük, madeni para)</li>
            </ul>
        `,
        questions: [
            { v: '🔺', q: 'Bu şeklin adı nedir?', a: 'Üçgen', o: ['Kare', 'Dikdörtgen'] },
            { v: '⬛', q: 'Bu şeklin adı nedir?', a: 'Kare', o: ['Çember', 'Üçgen'] },
            { v: '3 köşesi ve 3 kenarı vardır.', q: 'Bu hangi şekildir?', a: 'Üçgen', o: ['Kare', 'Çember'] },
            { v: 'Tüm kenarları eşittir ve 4 köşesi vardır.', q: 'Bu hangi şekildir?', a: 'Kare', o: ['Dikdörtgen', 'Üçgen'] },
            { v: 'Karşılıklı kenarları eşittir.', q: 'Bu hangi şekildir?', a: 'Dikdörtgen', o: ['Kare', 'Çember'] },
            { v: 'Köşesi ve kenarı yoktur.', q: 'Bu hangi şekildir?', a: 'Çember', o: ['Kare', 'Üçgen'] }
        ]
    },
    'symmetry': {
        title: '🦋 Simetri',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Simetri Nedir?</h3>
            <p>Bir şeklin ortasından hayali bir çizgi (simetri doğrusu) çizildiğinde, çizginin iki tarafı birbirinin <strong>birebir aynısı (ayna görüntüsü)</strong> ise bu şekle simetrik şekil denir.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Dikey Simetri:</strong> Yukarıdan aşağıya çizilen çizgiyle iki eş parçaya ayrılabilen şekillerdir. (Örnek: A harfi, Kelebek)</li>
                <li><strong>Yatay Simetri:</strong> Sağdan sola çizilen çizgiyle iki eş parçaya ayrılabilen şekillerdir. (Örnek: B, E harfleri)</li>
                <li>Bazı harflerin (örneğin H ve O) hem yatay hem de dikey simetrisi vardır. Bazılarının (F, G, J) ise hiçbir simetrisi yoktur.</li>
            </ul>
        `,
        questions: [
            { v: 'A', q: 'Bu harfin simetri doğrusu nasıldır?', a: 'Dikey simetri', o: ['Yatay simetri', 'Simetrisi yok'] },
            { v: 'B', q: 'Bu harfin simetri doğrusu nasıldır?', a: 'Yatay simetri', o: ['Dikey simetri', 'Simetrisi yok'] },
            { v: 'F', q: 'Bu harfin simetri doğrusu nasıldır?', a: 'Simetrisi yok', o: ['Dikey simetri', 'Yatay simetri'] },
            { v: 'H', q: 'Bu harfin simetri doğrusu nasıldır?', a: 'Hem dikey hem yatay', o: ['Sadece dikey', 'Sadece yatay'] },
            { v: '🦋', q: 'Kelebeğin kanatları nasıldır?', a: 'Simetriktir', o: ['Simetrik değildir', 'Sadece sağ kanat simetriktir'] }
        ]
    },
    'data': {
        title: '📊 Veri Grafikleri',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Çetele ve Sıklık Tablosu</h3>
            <p>Topladığımız bilgileri (verileri) düzenli bir şekilde göstermek için tablo ve grafikler kullanırız.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Çetele Tablosu:</strong> Sayıları çizgiler çizerek gösterdiğimiz tablodur. 4 dik çizgi çizilip üstüne 1 yatay çizgi atılarak 5'li gruplar yapılır (IIII).</li>
                <li><strong>Sıklık Tablosu:</strong> Çetele tablosundaki çizgilerin sayı (rakam) olarak yazıldığı tablodur. (Örnek: Elma: 5, Armut: 3)</li>
                <li>Grafik okurken resimlerin altındaki notlara çok dikkat etmeliyiz. Bazen "Her şekil 2 meyveyi gösterir" gibi kurallar olabilir.</li>
            </ul>
        `,
        questions: [
            { v: 'IIII II', q: 'Bu çetele tablosu hangi sayıyı ifade eder?', a: '7', o: ['5', '6'] },
            { v: 'IIII IIII', q: 'Bu çetele tablosu hangi sayıyı ifade eder?', a: '10', o: ['8', '9'] },
            { v: 'Not: Her ikon 2 kişiyi gösterir. 🍎🍎🍎', q: 'Kaç kişi elma seviyor?', a: '6', o: ['3', '5'] },
            { v: 'Elma: 5, Muz: 3', q: 'Elmalar, muzlardan kaç fazladır?', a: '2', o: ['8', '5'] }
        ]
    },

    // ==========================================
    // TÜRKÇE & HAYAT BİLGİSİ
    // ==========================================
    'turkish_reading': {
        title: '📖 Okuma ve Yazma Kuralları',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Okuma ve Yazma Kuralları</h3>
            <p>Doğru okumak ve yazmak iletişim için çok önemlidir.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Okuma Kuralları:</strong> Sesli okuma yaparken noktalama işaretlerine dikkat etmeliyiz. Noktada duraklamalı, virgül ve diğer işaretlerde ses tonumuzu ayarlamalıyız. Metni hecelemeden, akıcı okumaya çalışmalıyız.</li>
                <li><strong>Yazma Kuralları:</strong> Cümleye <em>büyük harfle</em> başlamalıyız. Özel isimlerin (insan, şehir isimleri) ilk harfi büyük yazılır. Kelimeler arasında uygun boşluk bırakmalıyız. Sayfa düzenine ve yazı güzelliğine dikkat etmeliyiz.</li>
            </ul>
        `,
        questions: [
            { v: 'ali bugün ankara\'ya gidecek.', q: 'Bu cümlede hangi kelimelerin yazımı YANLIŞTIR?', a: 'ali, ankara (Büyük harf olmalı)', o: ['bugün, gidecek', 'Hiçbiri, doğru yazılmış'] },
            { v: 'Cümleye başlarken...', q: 'Cümleye başlarken hangi harfle başlarız?', a: 'Büyük harfle', o: ['Küçük harfle', 'Sayılarla'] },
            { v: '🗣️ Sesli okuma yaparken...', q: 'Aşağıdakilerden hangisi yanlıştır?', a: 'Çok hızlı ve nefes almadan okumalıyız', o: ['Noktalama işaretlerine dikkat etmeliyiz', 'Kelimeleri doğru telaffuz etmeliyiz'] },
            { v: 'Özel isimler', q: 'Özel isimler cümle ortasında nasıl yazılır?', a: 'İlk harfi büyük yazılır', o: ['Tamamı küçük yazılır', 'Tamamı büyük yazılır'] }
        ]
    },
    'turkish_speaking': {
        title: '🗣️ Konuşma ve Dinleme',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Konuşma ve Dinleme Kuralları</h3>
            <p>İyi bir iletişim için sadece konuşmak değil, iyi dinlemek de gereklidir.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Konuşma Kuralları:</strong> Göz teması kurarak konuşmalıyız. Sesimizi karşımızdakinin duyabileceği seviyede ayarlamalıyız. Bağırarak veya fısıldayarak konuşmamalıyız. Beden dilimizi doğru kullanmalıyız.</li>
                <li><strong>Dinleme Kuralları:</strong> Konuşan kişinin sözünü kesmemeliyiz. Onu anladığımızı belli etmek için ara sıra başımızı sallamalı veya göz teması kurmalıyız. Anlamadığımız bir yer olursa, sözü bittikten sonra söz alıp sormalıyız.</li>
            </ul>
        `,
        questions: [
            { v: '👂 Dinlerken...', q: 'Birisi konuşurken hangisini yapmak yanlıştır?', a: 'Sözünü kesmek', o: ['Göz teması kurmak', 'Sözü bitene kadar beklemek'] },
            { v: '🗣️ Konuşurken...', q: 'Arkadaşımıza bir şey anlatırken nasıl davranmalıyız?', a: 'Gözlerine bakmalıyız', o: ['Yere bakmalıyız', 'Arkamızı dönmeliyiz'] },
            { v: 'Sınıfta söz almak', q: 'Öğretmen anlatırken sorumuz varsa ne yapmalıyız?', a: 'Parmak kaldırıp söz istemeliyiz', o: ['Hemen bağırmalıyız', 'Yanımızdaki arkadaşa sormalıyız'] }
        ]
    },
    'turkish_letters': {
        title: '🔤 Harf Bilgisi',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Harf ve Alfabe (Abece) Bilgisi</h3>
            <p>Dildeki sesleri gösteren işaretlere <strong>harf</strong> denir. Harflerin belli bir sıraya göre dizilmesine <strong>alfabe (abece)</strong> denir.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li>Alfabemizde <strong>29 harf</strong> vardır.</li>
                <li><strong>8 ünlü (sesli) harf:</strong> a, e, ı, i, o, ö, u, ü</li>
                <li><strong>21 ünsüz (sessiz) harf:</strong> b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z</li>
                <li><em>Sözlük Sırası:</em> Kelimeler sözlükte alfabedeki sıraya göre dizilir (Önce A ile başlayanlar, sonra B ile başlayanlar...). İlk harfleri aynıysa, ikinci harflerine bakılır.</li>
            </ul>
        `,
        questions: [
            { v: '🔤', q: 'Alfabemizde kaç harf vardır?', a: '29', o: ['21', '28'] },
            { v: '🗣️ Sesli Harfler', q: 'Aşağıdakilerden hangisi ünlü (sesli) harflerden biridir?', a: 'E', o: ['M', 'K'] },
            { v: 'Sözlük Sırası', q: 'Hangi kelime sözlükte daha önce gelir? (Araba, Kitap, Balon)', a: 'Araba', o: ['Balon', 'Kitap'] },
            { v: 'Sözlük Sırası (Aynı harf)', q: 'Hangi kelime sözlükte daha önce gelir? (Kedi, Köpek)', a: 'Kedi (e harfi ö\'den önce gelir)', o: ['Köpek'] }
        ]
    },
    'turkish_synonyms': {
        title: '📖 Eş Anlamlı Kelimeler',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Eş Anlamlı (Anlamdaş) Kelimeler</h3>
            <p>Yazılışları farklı, ancak <strong>anlamları aynı</strong> olan kelimelere eş anlamlı kelimeler denir.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Örnekler:</strong> Ev = Konut, İhtiyar = Yaşlı, Okul = Mektep, Siyah = Kara, Beyaz = Ak.</li>
                <li>Eş anlamlı kelimeler cümlede birbirinin yerine kullanıldığında cümlenin anlamı <em>bozulmaz</em>.</li>
                <li>"Yaşlı adam yolda yürüyordu." = "İhtiyar adam yolda yürüyordu."</li>
            </ul>
        `,
        questions: [
            { v: 'Okul', q: 'Kelimsinin eş anlamlısı nedir?', a: 'Mektep', o: ['Sınıf', 'Öğretmen'] },
            { v: 'İhtiyar', q: 'Kelimsinin eş anlamlısı nedir?', a: 'Yaşlı', o: ['Genç', 'Çocuk'] },
            { v: 'Ev', q: 'Kelimsinin eş anlamlısı nedir?', a: 'Konut', o: ['Oda', 'Bina'] },
            { v: 'Siyah', q: 'Kelimsinin eş anlamlısı nedir?', a: 'Kara', o: ['Beyaz', 'Karanlık'] },
            { v: 'Öğrenci', q: 'Kelimsinin eş anlamlısı nedir?', a: 'Talebe', o: ['Öğretmen', 'Müdür'] },
            { v: 'Fakir', q: 'Kelimsinin eş anlamlısı nedir?', a: 'Yoksul', o: ['Zengin', 'Cimri'] },
            { v: 'Misafir', q: 'Kelimsinin eş anlamlısı nedir?', a: 'Konuk', o: ['Yolcu', 'Dost'] }
        ]
    },
    'turkish_antonyms': {
        title: '📝 Zıt Anlamlı Kelimeler',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Zıt (Karşıt) Anlamlı Kelimeler</h3>
            <p>Anlamca birbirinin tam <strong>tersi (karşıtı)</strong> olan kelimelere zıt anlamlı kelimeler denir.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Örnekler:</strong> Siyah ↔ Beyaz, Uzun ↔ Kısa, Gece ↔ Gündüz, Şişman ↔ Zayıf, Tatlı ↔ Acı.</li>
                <li>Dikkat: Bir kelimenin olumsuzu, onun zıt anlamlısı değildir! (Örnek: "Gelmek" kelimesinin zıttı "Gitmek"tir. "Gelmemek" olumsuzudur, zıttı değildir.)</li>
            </ul>
        `,
        questions: [
            { v: 'Siyah', q: 'Kelimsinin zıt anlamlısı nedir?', a: 'Beyaz', o: ['Kara', 'Karanlık'] },
            { v: 'Uzun', q: 'Kelimsinin zıt anlamlısı nedir?', a: 'Kısa', o: ['Büyük', 'İnce'] },
            { v: 'Gelmek', q: 'Kelimsinin zıt anlamlısı nedir?', a: 'Gitmek', o: ['Gelmemek', 'Durmak'] },
            { v: 'Acı', q: 'Kelimsinin zıt anlamlısı nedir?', a: 'Tatlı', o: ['Ekşi', 'Tuzlu'] },
            { v: 'Taze', q: 'Kelimsinin zıt anlamlısı nedir?', a: 'Bayat', o: ['Yeni', 'Eski'] }
        ]
    },
    'turkish_grammar': {
        title: '✏️ Noktalama İşaretleri',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Noktalama İşaretleri</h3>
            <p>Duygu ve düşüncelerimizi daha açık ifade etmek ve okumayı kolaylaştırmak için kullanılır.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Nokta (.):</strong> Tamamlanmış cümlelerin sonuna konur. Sayılardan sonra "İnci" anlamında kullanılır (3. Sınıf). Kısaltmalarda kullanılır (Prof., Dr.).</li>
                <li><strong>Virgül (,):</strong> Eş görevli kelimelerin (elma, armut, muz) arasına konur. Hitaplardan sonra kullanılır (Sevgili Arkadaşım,).</li>
                <li><strong>Soru İşareti (?):</strong> Soru bildiren cümlelerin sonuna konur. (Bugün hava nasıl?)</li>
                <li><strong>Ünlem İşareti (!):</strong> Korku, heyecan, şaşkınlık, uyarı bildiren cümlelerin sonuna konur. (İmdat! Ateş var!)</li>
            </ul>
        `,
        questions: [
            { v: 'Nasılsın( )', q: 'Yay ayraç içine hangi işaret gelmelidir?', a: 'Soru İşareti (?)', o: ['Nokta (.)', 'Ünlem (!)'] },
            { v: 'Eyvah( ) Geç kaldım.', q: 'Yay ayraç içine hangi işaret gelmelidir?', a: 'Ünlem İşareti (!)', o: ['Virgül (,)', 'Nokta (.)'] },
            { v: 'Pazardan elma( ) armut aldım.', q: 'Yay ayraç içine hangi işaret gelmelidir?', a: 'Virgül (,)', o: ['Nokta (.)', 'Soru İşareti (?)'] },
            { v: 'Ali 3( ) sınıfa gidiyor.', q: 'Yay ayraç içine hangi işaret gelmelidir?', a: 'Nokta (.)', o: ['Virgül (,)', 'Soru İşareti (?)'] },
            { v: 'Bugün çok mutluyum( )', q: 'Tamamlanmış cümlenin sonuna ne konur?', a: 'Nokta (.)', o: ['Soru İşareti (?)', 'Virgül (,)'] }
        ]
    },
    'life_school': {
        title: '🏫 Okulumuzda Hayat',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Okul Kuralları ve Kroki</h3>
            <p>Okulumuzda düzenin sağlanması ve güvenliğimiz için bazı konulara dikkat etmeliyiz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Okul Kuralları:</strong> Koridorlarda koşmamak, nöbetçi öğretmenin uyarılarını dinlemek, tuvaletleri temiz kullanmak.</li>
                <li><strong>Kroki:</strong> Bir yerin kuş bakışı (tepeden) görünüşünün kabataslak, ölçüsüz olarak kağıda çizilmesine denir. Sınıfımızın veya okulumuzun krokisini çizerek yönümüzü bulabiliriz.</li>
                <li><strong>Dilek Kutusu:</strong> Okulla ilgili istek ve ihtiyaçlarımızı okul idaresine bildirmek için dilekçe yazıp dilek kutusuna atabiliriz.</li>
            </ul>
        `,
        questions: [
            { v: 'Kroki', q: 'Bir yerin tepeden görünüşünün ölçüsüz çizilmesine ne denir?', a: 'Kroki', o: ['Harita', 'Resim'] },
            { v: 'Dilekçe', q: 'Okulla ilgili bir isteğimizi müdüre iletmek için ne yazmalıyız?', a: 'Dilekçe', o: ['Şiir', 'Hikaye'] },
            { v: '🏃‍♂️ Koridorda...', q: 'Aşağıdakilerden hangisi doğru bir davranıştır?', a: 'Koridorlarda koşmamalıyız', o: ['Yüksek sesle bağırmalıyız', 'Çöpleri yere atmalıyız'] },
            { v: 'Kuş Bakışı', q: 'Krokiler nasıl çizilir?', a: 'Tepeden kuş bakışı', o: ['Yandan', 'Aşağıdan'] }
        ]
    },
    'life_home': {
        title: '🏠 Evimizde Hayat',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Ailemiz ve Evimiz</h3>
            <p>Aile üyelerimiz arasındaki dayanışma ve görev dağılımı mutlu bir ev hayatı için şarttır.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Görev Dağılımı:</strong> Evde herkesin yaşına ve becerisine göre görevleri olmalıdır. Odamızı toplamak, sofrayı kurmaya yardım etmek 3. sınıf öğrencisinin yapabileceği işlerdir.</li>
                <li><strong>Akrabalarımız:</strong> Annemizin kız kardeşine Teyze, erkek kardeşine Dayı denir. Babamızın kız kardeşine Hala, erkek kardeşine Amca denir.</li>
                <li><strong>Tasarruf:</strong> Evdeki kaynakları (su, elektrik, doğalgaz) boşa harcamamalıyız. Kullanmadığımız lambaları söndürmeliyiz.</li>
            </ul>
        `,
        questions: [
            { v: '👩 Annemin kız kardeşi', q: 'Annemizin kız kardeşine ne deriz?', a: 'Teyze', o: ['Hala', 'Dayı'] },
            { v: '👨 Babamın erkek kardeşi', q: 'Babamızın erkek kardeşine ne deriz?', a: 'Amca', o: ['Dayı', 'Teyze'] },
            { v: '🛏️ Odamı...', q: 'Bir öğrenci evde hangi görevi yapabilir?', a: 'Odasını toplamak', o: ['Bulaşık makinesini tamir etmek', 'Arabayı yıkamak'] },
            { v: '💡 Işıklar açık kaldı', q: 'Odadan çıkarken ne yapmalıyız?', a: 'Lambaları söndürmeliyiz', o: ['Işıkları açık bırakmalıyız', 'Televizyonu da açmalıyız'] }
        ]
    },
    'life_health_safe': {
        title: '🛡️ Sağlıklı ve Güvenli Hayat',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Güvenliğimiz ve Sağlığımız</h3>
            <p>Sağlıklı büyümek ve tehlikelerden korunmak için bilmemiz gerekenler.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Sağlık İçin:</strong> Kişisel temizliğimize (el yıkama, diş fırçalama) ve dengeli beslenmeye dikkat etmeliyiz. Mevsime uygun kıyafetler giymeliyiz.</li>
                <li><strong>Trafik Kuralları:</strong> Yaya geçidi, üst geçit, alt geçit ve trafik ışıklarının olduğu yerlerden karşıya geçmeliyiz. Kırmızı yanarken beklemeli, yeşil yanarken geçmeliyiz.</li>
                <li><strong>Acil Durum Numaraları:</strong> Hızır Acil, Polis, İtfaiye gibi tüm acil durumlar için artık tek bir numara kullanılır: <strong>112</strong></li>
            </ul>
        `,
        questions: [
            { v: '🚦 Kırmızı Işık', q: 'Trafik ışığında kırmızı yanarken ne yapmalıyız?', a: 'Durup beklemeliyiz', o: ['Hızlıca geçmeliyiz', 'Sağa sola bakıp geçmeliyiz'] },
            { v: '🚶 Karşıdan Karşıya', q: 'Nereden karşıya geçmek GÜVENLİDİR?', a: 'Yaya geçidinden', o: ['Arabaların arasından', 'Trafik lambası olmayan köşeden'] },
            { v: '📞 Acil Durum', q: 'Yangın, kaza, hırsızlık gibi acil durumlarda hangi numarayı aramalıyız?', a: '112', o: ['155', '110'] },
            { v: '🦷 Diş fırçalamak', q: 'Bu hangi temizlik türüne girer?', a: 'Kişisel temizlik', o: ['Çevre temizliği', 'Ev temizliği'] }
        ]
    },

    // ==========================================
    // İNGİLİZCE (ENGLISH - MAARİF MODELİ 10 UNITS)
    // ==========================================
    'english_unit1': {
        title: '👋 Unit 1: Greeting',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Greeting (Selamlaşma)</h3>
            <p>İnsanlarla İngilizce tanışmayı ve selamlaşmayı öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Hello / Hi:</strong> Merhaba</li>
                <li><strong>Good morning:</strong> Günaydın</li>
                <li><strong>Good afternoon:</strong> Tünaydın (Öğleden sonra)</li>
                <li><strong>Good evening:</strong> İyi akşamlar</li>
                <li><strong>Good night:</strong> İyi geceler</li>
                <li><strong>How are you?</strong> Nasılsın? ➔ <em>I am fine, thank you.</em> (İyiyim, teşekkürler.)</li>
            </ul>
        `,
        questions: [
            { v: '☀️ Sabah oldu', q: 'Sabah uyandığımızda ne deriz?', a: 'Good morning', o: ['Good night', 'Good evening'] },
            { v: '👋', q: 'Bir arkadaşımızla karşılaştığımızda ne deriz?', a: 'Hello', o: ['Good night', 'Goodbye'] },
            { v: '🌙 Gece', q: 'Uyumadan önce ailemize ne deriz?', a: 'Good night', o: ['Good morning', 'Good afternoon'] },
            { v: 'Nasılsın?', q: '"How are you?" sorusuna nasıl cevap veririz?', a: 'I am fine', o: ['Good morning', 'Hello'] }
        ]
    },
    'english_unit2': {
        title: '👨‍👩‍👧 Unit 2: My Family',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">My Family (Ailem)</h3>
            <p>Aile üyelerimizi İngilizce tanıtalım.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Mother (Mom):</strong> Anne</li>
                <li><strong>Father (Dad):</strong> Baba</li>
                <li><strong>Sister:</strong> Kız kardeş</li>
                <li><strong>Brother:</strong> Erkek kardeş</li>
                <li><strong>Grandmother:</strong> Büyükanne (Nine)</li>
                <li><strong>Grandfather:</strong> Büyükbaba (Dede)</li>
            </ul>
        `,
        questions: [
            { v: '👩 Anne', q: 'Annenin İngilizcesi nedir?', a: 'Mother', o: ['Father', 'Sister'] },
            { v: '👨 Baba', q: 'Babanın İngilizcesi nedir?', a: 'Father', o: ['Brother', 'Grandfather'] },
            { v: '👦 Erkek kardeş', q: 'Erkek kardeşin İngilizcesi nedir?', a: 'Brother', o: ['Sister', 'Father'] },
            { v: '👧 Kız kardeş', q: 'Kız kardeşin İngilizcesi nedir?', a: 'Sister', o: ['Brother', 'Mother'] },
            { v: '👴 Büyükbaba (Dede)', q: 'Büyükbabanın İngilizcesi nedir?', a: 'Grandfather', o: ['Grandmother', 'Father'] }
        ]
    },
    'english_unit3': {
        title: '💖 Unit 3: People I Love',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">People I Love (Sevdiğim İnsanlar)</h3>
            <p>Çevremizdeki insanları tarif etmeyi öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Tall:</strong> Uzun ↔ <strong>Short:</strong> Kısa</li>
                <li><strong>Old:</strong> Yaşlı ↔ <strong>Young:</strong> Genç</li>
                <li><strong>Fat:</strong> Şişman ↔ <strong>Thin:</strong> Zayıf</li>
                <li><strong>Beautiful:</strong> Güzel ↔ <strong>Ugly:</strong> Çirkin</li>
                <li><em>He is tall.</em> (O uzundur - Erkek için)</li>
                <li><em>She is short.</em> (O kısadır - Kadın için)</li>
            </ul>
        `,
        questions: [
            { v: '👵', q: 'Bu kişi için hangi kelime uygundur?', a: 'Old (Yaşlı)', o: ['Young (Genç)', 'Tall (Uzun)'] },
            { v: 'Giraffe 🦒', q: 'Zürafa nasıldır?', a: 'Tall (Uzun)', o: ['Short (Kısa)', 'Fat (Şişman)'] },
            { v: 'Genç', q: '"Genç" kelimesinin İngilizcesi nedir?', a: 'Young', o: ['Old', 'Thin'] },
            { v: 'She is...', q: 'Kızlar için "O" derken hangi kelimeyi kullanırız?', a: 'She', o: ['He', 'It'] }
        ]
    },
    'english_unit4': {
        title: '😊 Unit 4: Feelings',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Feelings (Duygular)</h3>
            <p>Kendimizi nasıl hissettiğimizi söylemeyi öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Happy:</strong> Mutlu</li>
                <li><strong>Sad:</strong> Üzgün</li>
                <li><strong>Angry:</strong> Kızgın / Sinirli</li>
                <li><strong>Tired:</strong> Yorgun</li>
                <li><strong>Surprised:</strong> Şaşkın</li>
                <li><strong>Energetic:</strong> Enerjik</li>
                <li><em>I am happy.</em> (Ben mutluyum.)</li>
            </ul>
        `,
        questions: [
            { v: '😊', q: 'Bu yüz ifadesi hangi duyguyu anlatır?', a: 'Happy', o: ['Sad', 'Angry'] },
            { v: '😢', q: 'Bu yüz ifadesi hangi duyguyu anlatır?', a: 'Sad', o: ['Happy', 'Surprised'] },
            { v: '😡', q: 'Bu yüz ifadesi hangi duyguyu anlatır?', a: 'Angry', o: ['Tired', 'Happy'] },
            { v: 'Ben mutluyum', q: 'İngilizce olarak nasıl söyleriz?', a: 'I am happy', o: ['I am sad', 'I am tired'] }
        ]
    },
    'english_unit5': {
        title: '🧸 Unit 5: Toys and Games',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Toys and Games (Oyuncaklar ve Oyunlar)</h3>
            <p>En sevdiğimiz oyuncakların İngilizcelerini öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Doll:</strong> Oyuncak bebek</li>
                <li><strong>Kite:</strong> Uçurtma</li>
                <li><strong>Car:</strong> Araba</li>
                <li><strong>Ball:</strong> Top</li>
                <li><strong>Teddy bear:</strong> Oyuncak ayı</li>
                <li><strong>Blocks:</strong> Yapboz blokları</li>
                <li><em>I have a ball.</em> (Benim bir topum var.)</li>
            </ul>
        `,
        questions: [
            { v: '⚽', q: 'Bu oyuncağın İngilizcesi nedir?', a: 'Ball', o: ['Doll', 'Kite'] },
            { v: '🪁', q: 'Bu oyuncağın İngilizcesi nedir?', a: 'Kite', o: ['Car', 'Teddy bear'] },
            { v: '🚗', q: 'Bu oyuncağın İngilizcesi nedir?', a: 'Car', o: ['Blocks', 'Doll'] },
            { v: 'Benim bir topum var', q: 'İngilizce olarak nasıl söyleriz?', a: 'I have a ball', o: ['I have a car', 'I like dolls'] }
        ]
    },
    'english_unit6': {
        title: '🏠 Unit 6: My House',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">My House (Evim)</h3>
            <p>Evimizin odalarını İngilizce öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Living room:</strong> Oturma odası / Salon</li>
                <li><strong>Bedroom:</strong> Yatak odası</li>
                <li><strong>Kitchen:</strong> Mutfak</li>
                <li><strong>Bathroom:</strong> Banyo</li>
                <li><strong>Garden:</strong> Bahçe</li>
                <li><em>Where is mom?</em> (Anne nerede?) ➔ <em>She is in the kitchen.</em> (O mutfakta.)</li>
            </ul>
        `,
        questions: [
            { v: '🍳 Yemek yapılan yer', q: 'Mutfağın İngilizcesi nedir?', a: 'Kitchen', o: ['Bedroom', 'Bathroom'] },
            { v: '🛏️ Uyuduğumuz yer', q: 'Yatak odasının İngilizcesi nedir?', a: 'Bedroom', o: ['Living room', 'Garden'] },
            { v: '🛋️ Televizyon izlenen yer', q: 'Oturma odasının İngilizcesi nedir?', a: 'Living room', o: ['Bathroom', 'Kitchen'] },
            { v: '🌷', q: 'Bahçenin İngilizcesi nedir?', a: 'Garden', o: ['House', 'Bedroom'] }
        ]
    },
    'english_unit7': {
        title: '🏙️ Unit 7: In My City',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">In My City (Şehrimde)</h3>
            <p>Şehrimizdeki önemli yerlerin İngilizcelerini öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>School:</strong> Okul</li>
                <li><strong>Hospital:</strong> Hastane</li>
                <li><strong>Park:</strong> Park</li>
                <li><strong>Zoo:</strong> Hayvanat bahçesi</li>
                <li><strong>Market:</strong> Market / Pazar</li>
                <li><strong>Museum:</strong> Müze</li>
            </ul>
        `,
        questions: [
            { v: '🏫 Öğrencilerin gittiği yer', q: 'Okulun İngilizcesi nedir?', a: 'School', o: ['Hospital', 'Park'] },
            { v: '🏥 Hastaların gittiği yer', q: 'Hastanenin İngilizcesi nedir?', a: 'Hospital', o: ['Zoo', 'Market'] },
            { v: '🦁 Hayvanların olduğu yer', q: 'Hayvanat bahçesinin İngilizcesi nedir?', a: 'Zoo', o: ['Museum', 'School'] },
            { v: '🛝 Oyun oynanan yer', q: 'Park kelimesi İngilizcede nasıl yazılır?', a: 'Park', o: ['School', 'Market'] }
        ]
    },
    'english_unit8': {
        title: '🚌 Unit 8: Transportation',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Transportation (Ulaşım Araçları)</h3>
            <p>Bizi bir yerden bir yere götüren araçları öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Bus:</strong> Otobüs</li>
                <li><strong>Car:</strong> Araba</li>
                <li><strong>Train:</strong> Tren</li>
                <li><strong>Plane:</strong> Uçak</li>
                <li><strong>Ship:</strong> Gemi</li>
                <li><strong>Bicycle / Bike:</strong> Bisiklet</li>
            </ul>
        `,
        questions: [
            { v: '✈️ Gökyüzünde uçar', q: 'Uçağın İngilizcesi nedir?', a: 'Plane', o: ['Train', 'Ship'] },
            { v: '🚂 Raylarda gider', q: 'Trenin İngilizcesi nedir?', a: 'Train', o: ['Bus', 'Car'] },
            { v: '🚢 Denizde gider', q: 'Geminin İngilizcesi nedir?', a: 'Ship', o: ['Bike', 'Plane'] },
            { v: '🚲 İki tekerleklidir', q: 'Bisikletin İngilizcesi nedir?', a: 'Bike / Bicycle', o: ['Car', 'Bus'] }
        ]
    },
    'english_unit9': {
        title: '🌤️ Unit 9: Weather',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Weather (Hava Durumu)</h3>
            <p>Dışarıda havanın nasıl olduğunu İngilizce söylemeyi öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Sunny:</strong> Güneşli</li>
                <li><strong>Rainy:</strong> Yağmurlu</li>
                <li><strong>Cloudy:</strong> Bulutlu</li>
                <li><strong>Snowy:</strong> Karlı</li>
                <li><strong>Windy:</strong> Rüzgarlı</li>
                <li><em>How is the weather?</em> (Hava nasıl?) ➔ <em>It is sunny.</em> (Hava güneşli.)</li>
            </ul>
        `,
        questions: [
            { v: '☀️', q: 'How is the weather? (Hava nasıl?)', a: 'It is sunny', o: ['It is rainy', 'It is snowy'] },
            { v: '🌧️', q: 'How is the weather?', a: 'It is rainy', o: ['It is cloudy', 'It is sunny'] },
            { v: '❄️', q: 'How is the weather?', a: 'It is snowy', o: ['It is windy', 'It is rainy'] },
            { v: '☁️', q: 'Bulutlu havanın İngilizcesi nedir?', a: 'Cloudy', o: ['Windy', 'Sunny'] }
        ]
    },
    'english_unit10': {
        title: '🌳 Unit 10: Nature',
        summary: `
            <h3 style="color:#2c3e50; margin-bottom:10px;">Nature (Doğa)</h3>
            <p>Doğadaki hayvanları ve nesneleri İngilizce öğreniyoruz.</p>
            <ul style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Tree:</strong> Ağaç</li>
                <li><strong>Flower:</strong> Çiçek</li>
                <li><strong>Sea:</strong> Deniz</li>
                <li><strong>Mountain:</strong> Dağ</li>
                <li><strong>Bird:</strong> Kuş</li>
                <li><strong>Fish:</strong> Balık</li>
            </ul>
        `,
        questions: [
            { v: '🌲', q: 'Ağacın İngilizcesi nedir?', a: 'Tree', o: ['Flower', 'Mountain'] },
            { v: '🌻', q: 'Çiçeğin İngilizcesi nedir?', a: 'Flower', o: ['Sea', 'Bird'] },
            { v: '🐟', q: 'Balığın İngilizcesi nedir?', a: 'Fish', o: ['Bird', 'Tree'] },
            { v: '🌊', q: 'Denizin İngilizcesi nedir?', a: 'Sea', o: ['Mountain', 'Flower'] }
        ]
    }
};
