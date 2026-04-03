import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Building2,
  Boxes,
  CircleDollarSign,
  ClipboardCheck,
  CreditCard,
  FileStack,
  HardDriveDownload,
  PackageSearch,
  ReceiptText,
  Repeat2,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  UserCog,
  UserRoundCheck,
  Users,
  WalletCards,
  AlertTriangle,
  Clock,
  TrendingDown,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type TrustItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type RoleItem = {
  title: string;
  slug: string;
  description: string;
  sees: string;
  actions: string[];
  icon: LucideIcon;
  accent: string;
};

export type DemoAccount = {
  username: string;
  password: string;
  role: string;
  note: string;
};

export type SetupStep = {
  step: string;
  title: string;
  description: string;
};

export type PricingPlan = {
  title: string;
  cadence: string;
  price: string;
  description: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type DemoFlowStep = {
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

export type ComparisonRow = {
  label: string;
  starter: string;
  pro: string;
  setup: string;
};

export type AppPlan = {
  id: string;
  title: string;
  cadence: string;
  price: string;
  description: string;
  highlight?: string;
  features: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  accent: string;
};

export type PainPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

export type OnboardingStepItem = {
  id: string;
  title: string;
  href: string;
  shortTitle: string;
};

export type RoleOption = {
  id: string;
  label: string;
  description: string;
};

export type MockProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  sku: string;
};

export type MockStockRow = {
  id: string;
  product: string;
  location: string;
  quantity: number;
};

export const navItems: NavItem[] = [
  { label: "Özellikler", href: "/#ozellikler" },
  { label: "Demo", href: "/demo" },
  { label: "Fiyatlandırma", href: "/pricing" },
  { label: "Kurulum", href: "/#kurulum" },
  { label: "İletişim", href: "/contact" },
];

export const trustItems: TrustItem[] = [
  {
    title: "Rol bazlı yetkilendirme",
    description: "Kasiyer sadece kasayı görür. Operasyon sadece stoğu. Karışıklık biter.",
    icon: ShieldCheck,
  },
  {
    title: "Ücretsiz kurulum desteği",
    description: "Ürün aktarımı, kullanıcı yapılandırması ve ekip eğitimi — ek ücret olmadan.",
    icon: Rocket,
  },
  {
    title: "PC ve tarayıcıdan kullanım",
    description: "Ek yazılım kurmadan, tarayıcısı olan her bilgisayarda çalışır.",
    icon: Store,
  },
  {
    title: "Mobil ve el terminali uyumu",
    description: "Mal kabul ve stok ekranları, mobil cihaz ve el terminalinde PWA olarak çalışır.",
    icon: PackageSearch,
  },
];

export const features: FeatureItem[] = [
  {
    title: "POS Satış",
    description: "Sadeleştirilmiş satış ekranıyla kasiyer hataları azalır, tahsilat hızlanır. Nakit, kart ve karma ödeme desteklenir.",
    icon: ShoppingCart,
  },
  {
    title: "Stok Takibi",
    description: "Anlık stok durumunu ürün ve lokasyon bazında görün. Tahminden değil, gerçek rakamlardan karar alın.",
    icon: Boxes,
  },
  {
    title: "Mal Kabul",
    description: "Tedarikçiden gelen ürünler doğrulanır, sayılır, sisteme işlenir. Fark ve hata anında görünür hale gelir.",
    icon: ClipboardCheck,
  },
  {
    title: "Transfer Yönetimi",
    description: "Lokasyonlar arası ürün transferini adım adım onaylayın. Hangi ürünün nerede olduğu her zaman net.",
    icon: Repeat2,
  },
  {
    title: "Kasa Açma/Kapatma",
    description: "Vardiya başlangıcı ve kapanış süreçleri sistemde kayıt altında. Farklar anında tespit edilir, gece geç saate kalmaz.",
    icon: WalletCards,
  },
  {
    title: "Kullanıcı ve Rol Yönetimi",
    description: "Her çalışan yalnızca kendi işine giren ekrana erişir. Yetkisiz işlem yapma riski sıfıra iner.",
    icon: UserCog,
  },
  {
    title: "Raporlama",
    description: "Gün sonu satış özeti, stok hareketi ve kasa durumunu tek ekranda görün. Manuel derlemeye gerek kalmaz.",
    icon: BarChart3,
  },
  {
    title: "Ürün / Fiyat Yönetimi",
    description: "Kategori, ürün kartı ve fiyatları tek yerden güncelleyin. Değişiklik anında tüm kasalara yansır.",
    icon: ReceiptText,
  },
];

export const roles: RoleItem[] = [
  {
    title: "Admin",
    slug: "admin",
    description: "Tüm yapılandırmaları, kullanıcıları ve rapor görünümünü yönetir.",
    sees: "Genel kontrol paneli, kullanıcı listesi, rapor özetleri ve mağaza ayarları.",
    actions: ["Kullanıcı açar", "Yetki tanımlar", "Rapor izler"],
    icon: Users,
    accent: "from-sky-500/15 to-blue-600/10",
  },
  {
    title: "Operasyon",
    slug: "operasyon",
    description: "Ürün, kategori, stok ve mağaza akışlarını günlük olarak yönetir.",
    sees: "Ürün kartları, fiyat güncellemeleri, stok akışı ve transfer ekranları.",
    actions: ["Ürün günceller", "Transfer başlatır", "Stok izler"],
    icon: UserRoundCheck,
    accent: "from-cyan-500/15 to-teal-500/10",
  },
  {
    title: "Cashier",
    slug: "cashier",
    description: "Satış ve kasa oturumunu hızlı, sade ve hata azaltan bir akışla kullanır.",
    sees: "POS ekranı, ödeme türleri, güncel fiş ve kasa oturumu.",
    actions: ["Satış alır", "Ödeme tamamlar", "Kasa kapatır"],
    icon: CreditCard,
    accent: "from-amber-500/18 to-orange-500/10",
  },
  {
    title: "Mal Kabul",
    slug: "mal-kabul",
    description: "Gelen ürünleri kontrollü şekilde kabul eder ve stok girişine dönüştürür.",
    sees: "Bekleyen sevkiyatlar, kabul listesi ve ürün doğrulama alanları.",
    actions: ["Teslim alır", "Sayım yapar", "Stoğa işler"],
    icon: Truck,
    accent: "from-emerald-500/18 to-green-500/10",
  },
];

export const demoAccounts: DemoAccount[] = [
  {
    username: "admin",
    password: "123456",
    role: "Admin paneli",
    note: "Tüm modülleri ve raporları görür.",
  },
  {
    username: "operasyon",
    password: "123456",
    role: "Operasyon ekranı",
    note: "Ürün, fiyat ve transfer akışına yönlenir.",
  },
  {
    username: "cashier",
    password: "123456",
    role: "POS ekranı",
    note: "Satış ve kasa oturumu için optimize edilmiştir.",
  },
  {
    username: "mal.kabul",
    password: "123546",
    role: "Mal kabul ekranı",
    note: "Gelen ürün kontrol ve giriş sürecini gösterir.",
  },
];

export const setupSteps: SetupStep[] = [
  {
    step: "01",
    title: "Paket seçimi",
    description: "İşletmenizin mağaza sayısına ve ekip yapısına uygun paketi birlikte belirleyin.",
  },
  {
    step: "02",
    title: "Ödeme ve planlama",
    description: "Abonelik ile başlangıç kapsamını netleştirin. Ücretsiz kurulum desteği her planda dahildir.",
  },
  {
    step: "03",
    title: "Onboarding",
    description: "Ürün kartları, kullanıcı rolleri ve mağaza akışları örnek veriyle hazırlanır.",
  },
  {
    step: "04",
    title: "Tarayıcı / PWA kullanımı",
    description: "Kasa bilgisayarları ve el terminallerinde tarayıcı veya PWA ile kullanım başlatılır.",
  },
  {
    step: "05",
    title: "Eğitim ve destek",
    description: "Ekibiniz için kısa eğitim ve devreye alma desteği sağlanır.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Aylık",
    cadence: "/ay",
    price: "₺29.999",
    description: "Hızlı başlamak isteyen mağazalar için esnek kullanım paketi.",
    cta: "Planı Seç",
    features: [
      "Rol bazlı kullanıcı yapısı",
      "POS ve stok modülleri",
      "Temel rapor ekranları",
      "PC, tablet ve el terminali uyumu",
      "Ücretsiz kurulum desteği dahil",
    ],
  },
  {
    title: "Yıllık",
    cadence: "/yıl",
    price: "₺59.999",
    description: "Daha öngörülebilir maliyet ve uzun dönem operasyon planı için.",
    cta: "Planı Seç",
    featured: true,
    features: [
      "Aylık paketteki tüm modüller",
      "PC, tablet ve el terminali uyumu",
      "Yıllık kullanım avantajı",
      "Öncelikli onboarding planlaması",
      "Ücretsiz kurulum desteği dahil",
    ],
  },
  {
    title: "Kurulum Desteği",
    cadence: "dahil",
    price: "Ücretsiz",
    description: "Her planda standart olarak sunulan ilk kurulum ve devreye alma hizmeti.",
    cta: "Demo Talep Et",
    features: [
      "Ürün ve kategori aktarımı",
      "Rol ve kullanıcı ilk yapılandırması",
      "Mağaza süreçlerine göre sistem ayarı",
      "Ekip eğitimi ve canlı destek",
      "Mobil & el terminali kurulumu",
    ],
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Sistemi bilgisayardan kullanabilir miyim?",
    answer:
      "Evet. Kasa bilgisayarları ve ofis bilgisayarlarında tarayıcı üzerinden kullanılacak şekilde tasarlanmıştır. Ek bir masaüstü kurulumuna gerek yoktur; güncellemeler otomatik olarak tüm cihazlara yansır.",
  },
  {
    question: "El terminalinde çalışır mı?",
    answer:
      "Evet. Mal kabul ve stok sayım ekranları, mobil cihazlar ve el terminallerinde PWA olarak yüklenebilir biçimde tasarlanmıştır. Saha ekipleri kablo veya masaüstü bağımlılığı olmadan çalışabilir.",
  },
  {
    question: "Kurulum desteği veriyor musunuz?",
    answer:
      "Evet. Ürün ve kategori aktarımı, kullanıcı rollerinin ilk yapılandırması, mağaza süreçlerine göre sistem uyarlaması ve ekip eğitimini kapsayan ücretsiz kurulum desteği her planda sunulmaktadır.",
  },
  {
    question: "Demo hesabı var mı?",
    answer:
      "Evet. Demo sayfasında admin, operasyon, kasiyer ve mal kabul rollerini gerçek veriyle deneyimleyebilirsiniz. Herhangi bir kayıt gerekmez; hemen başlayabilirsiniz.",
  },
  {
    question: "Farklı roller aynı anda kullanabilir mi?",
    answer:
      "Evet. Kasiyer satış yaparken operasyon ekranından ürün güncellemesi yapılabilir, admin aynı anda raporları inceleyebilir. Tüm işlemler aynı veri üzerinde, ayrı yetki sınırları içinde eş zamanlı çalışır.",
  },
  {
    question: "Mevcut ürün verilerimi sisteme aktarabilir miyim?",
    answer:
      "Evet. Kurulum desteği kapsamında mevcut ürün listeleri, kategori yapıları ve stok verileri sisteme aktarılır. Excel veya başka bir kaynaktan veri hazırlığı sürecinde size destek sağlanır.",
  },
  {
    question: "Kaç mağaza için kullanabilirim?",
    answer:
      "Tek mağazadan çok lokasyonlu zincire kadar ölçeklenebilir yapıda tasarlanmıştır. Paket kapsamı ve mağaza sayısına göre uygun plan seçimi için iletişime geçin.",
  },
  {
    question: "Aboneliği istediğim zaman iptal edebilir miyim?",
    answer:
      "Evet. Aylık planda herhangi bir dönem sonunda iptal edebilirsiniz. Uzun dönem taahhüt gerektiren bir yapı yoktur; fatura döneminin bitmesiyle birlikte erişim sona erer.",
  },
];

export const demoFlowSteps: DemoFlowStep[] = [
  {
    title: "Giriş ekranı",
    description: "Kullanıcı rolüne göre sade bir giriş ve yönlendirme akışı başlar.",
    detail: "Giriş sonrası kullanıcı doğrudan yetkili olduğu modüle yönlendirilir.",
    icon: ShieldCheck,
  },
  {
    title: "Mal kabul ile stok girişi",
    description: "Gelen ürünler doğrulanır ve stok sistemine işlenir.",
    detail: "Mal kabul rolü, teslimat doğrulama ve miktar kontrolü yapar.",
    icon: ClipboardCheck,
  },
  {
    title: "Operasyon ile ürün/fiyat yönetimi",
    description: "Kategori, ürün ve fiyat kararları merkezden yönetilir.",
    detail: "Operasyon paneli mağaza içi akışların düzenli kalmasını sağlar.",
    icon: ReceiptText,
  },
  {
    title: "Cashier ile POS satışı",
    description: "Satış ekranı hızlı tahsilat ve fiş akışıyla çalışır.",
    detail: "Kasiyer kullanıcıları yalnızca satış ve kasa oturumuna odaklanır.",
    icon: CircleDollarSign,
  },
  {
    title: "Admin ile rapor ve kullanıcı yönetimi",
    description: "Tüm mağaza operasyonu üst seviyeden izlenir.",
    detail: "Admin rolü kullanıcıları, yetkileri ve rapor özetlerini yönetir.",
    icon: BarChart3,
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    label: "POS ve satış akışı",
    starter: "Var",
    pro: "Var",
    setup: "Kurulumla birlikte uyarlanır",
  },
  {
    label: "Stok, mal kabul ve transfer",
    starter: "Temel",
    pro: "Gelişmiş",
    setup: "Kurulum kapsamında tasarlanır",
  },
  {
    label: "Rol bazlı kullanıcı yönetimi",
    starter: "Var",
    pro: "Var",
    setup: "İlk yapılandırma desteği",
  },
  {
    label: "Rapor görünümü",
    starter: "Temel raporlar",
    pro: "Geniş görünüm",
    setup: "Kurulum sonrası rehberlik",
  },
];

export const appPlans: AppPlan[] = [
  {
    id: "aylik",
    title: "Aylık",
    cadence: "/ay",
    price: "₺29.999",
    description: "Hızlı başlangıç için esnek abonelik modeli.",
    features: [
      "POS, stok ve kabul ekranları",
      "Tarayıcı üzerinden kullanım",
      "Temel rapor görünümü",
    ],
  },
  {
    id: "yillik",
    title: "Yıllık",
    cadence: "/yıl",
    price: "₺59.999",
    description: "Uzun dönem kullanım için daha güçlü planlama yapısı.",
    highlight: "En çok tercih edilen",
    features: [
      "Tüm temel modüller",
      "Yıllık kullanım avantajı",
      "Öncelikli kurulum planlaması",
    ],
  },
  {
    id: "kurulum",
    title: "Kurulum Desteği",
    cadence: "tek sefer",
    price: "₺XXXX",
    description: "İlk geçiş, veri hazırlığı ve ekip adaptasyonu için ek destek.",
    features: [
      "Kurulum yönlendirmesi",
      "Veri aktarımı hazırlığı",
      "Kısa eğitim planı",
    ],
  },
];

export const onboardingSteps: OnboardingStepItem[] = [
  { id: "store", title: "Mağaza Bilgileri", shortTitle: "Mağaza", href: "/onboarding/store" },
  { id: "users", title: "Kullanıcı Yapısı", shortTitle: "Kullanıcılar", href: "/onboarding/users" },
  { id: "products", title: "Ürün Başlangıcı", shortTitle: "Ürünler", href: "/onboarding/products" },
  { id: "stock", title: "Stok Girişi", shortTitle: "Stok", href: "/onboarding/stock" },
  { id: "cash", title: "Kasa Başlatma", shortTitle: "Kasa", href: "/onboarding/cash" },
];

export const onboardingRoleOptions: RoleOption[] = [
  {
    id: "admin",
    label: "admin",
    description: "Tüm yapılandırma, rapor ve kullanıcı yönetimi.",
  },
  {
    id: "operasyon",
    label: "operasyon",
    description: "Ürün, fiyat, stok ve transfer işlemleri.",
  },
  {
    id: "cashier",
    label: "cashier",
    description: "POS ekranı, satış ve kasa akışı.",
  },
  {
    id: "mal-kabul",
    label: "mal kabul",
    description: "Teslim alma, sayım ve stok girişi.",
  },
];

export const mockProducts: MockProduct[] = [
  {
    id: "prod-1",
    name: "Basic T-Shirt",
    category: "Tekstil",
    price: "₺499",
    sku: "TS-1001",
  },
  {
    id: "prod-2",
    name: "Kanvas Çanta",
    category: "Aksesuar",
    price: "₺349",
    sku: "BG-2003",
  },
  {
    id: "prod-3",
    name: "Sneaker Beyaz",
    category: "Ayakkabı",
    price: "₺1.490",
    sku: "SN-3402",
  },
];

export const mockStockRows: MockStockRow[] = [
  { id: "st-1", product: "Basic T-Shirt", location: "Merkez Mağaza", quantity: 24 },
  { id: "st-2", product: "Kanvas Çanta", location: "Merkez Mağaza", quantity: 16 },
  { id: "st-3", product: "Sneaker Beyaz", location: "Depo", quantity: 12 },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Kasiyerlerimiz artık sadece satış ekranını görüyor. Stok ve fiyat işlemlerine karışmıyorlar. Bu tek değişiklik bile haftalık karmaşayı ciddi ölçüde azalttı. Hata sayısı düştü, kapanış süreleri kısaldı.",
    name: "Ahmet Yılmaz",
    title: "Operasyon Müdürü",
    company: "Moda Tekstil",
    initials: "AY",
    accent: "bg-blue-600",
  },
  {
    quote: "Mal kabul sürecimiz tamamen değişti. Eskiden sayım farkları günlerce fark edilmiyordu. Şimdi gelen her ürün anında sisteme giriyor ve stok anlık güncel kalıyor. Tedarikçiyle tartışmalar bitti.",
    name: "Fatma Kaya",
    title: "Mağaza Müdürü",
    company: "Butik Store",
    initials: "FK",
    accent: "bg-emerald-600",
  },
  {
    quote: "İki mağazamızı tek panelden takip edebiliyoruz. Hangi mağazada ne kadar stok var, hangi kasiyerin vardiyası nasıl kapandı — bunları görmek için artık saatler harcamıyorum.",
    name: "Mehmet Demir",
    title: "İşletme Sahibi",
    company: "Demir Giyim",
    initials: "MD",
    accent: "bg-amber-600",
  },
];

export const painPoints: PainPoint[] = [
  {
    title: "Stok rakamlarınıza güvenemiyor musunuz?",
    description: "Güncellenmemiş Excel tabloları, el yazısı sayım fişleri ve sonunda birbirine uymayan rakamlar. Gerçek stok durumunu bilmek neden bu kadar zor olmalı?",
    icon: TrendingDown,
    tag: "Stok Kaybı",
  },
  {
    title: "Her çalışan her şeye erişiyor mu?",
    description: "Kasiyer fiyatları değiştirebiliyor, stokçu kasa hareketlerini görüyor. Yetki sınırı olmayan sistem hem güvenlik riski hem de sürekli hata kaynağı.",
    icon: AlertTriangle,
    tag: "Yetki Sorunu",
  },
  {
    title: "Kasa kapanışları saatler mi sürüyor?",
    description: "Vardiya sonunda manuel sayım, farklı kalemleri tek tek toplamak, sonra gün sonu raporunu bir araya getirmek. Her gün aynı süreç, her gün aynı zaman kaybı.",
    icon: Clock,
    tag: "Zaman Kaybı",
  },
];

export const onboardingHighlights = [
  {
    title: "Hızlı kurulum",
    description: "Dakikalar içinde ilk yapılandırmayı tamamlayın.",
    icon: Rocket,
  },
  {
    title: "Gerçekçi akış",
    description: "Plan, ödeme ve onboarding tek zincir halinde ilerler.",
    icon: HardDriveDownload,
  },
  {
    title: "Mağaza odaklı başlangıç",
    description: "Store, ürün, stok ve kasa adımlarıyla canlıya yakın kurulum.",
    icon: Building2,
  },
  {
    title: "Hazır operasyon",
    description: "Tamamlandığında doğrudan kullanıma hazır bir başlangıç ekranı.",
    icon: FileStack,
  },
];
