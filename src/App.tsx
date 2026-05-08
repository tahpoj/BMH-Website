import './App.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Camera,
  MonitorPlay,
  Film,
  Headphones,
  Lightbulb,
  Settings,
  Phone,
  Mail,
  MapPin,
  Menu,
  ChevronRight,
  Star,
  Search,
  Wrench,
  FileText,
  PenTool,
  Rocket,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  Quote,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-zinc-300 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>+63 (02) 8921-3516</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>info@bmh-systems.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold tracking-tight">
                  <span className="text-blue-600">B</span>
                  <span className="text-amber-500">M</span>
                  <span className="text-blue-600">H</span>
                </span>
                <span className="text-xs text-zinc-500 tracking-widest uppercase -mt-1">Systems Solution Inc.</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="px-4 py-2 text-sm font-medium text-zinc-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollTo('contact')}
                className="ml-3 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get a Quote
              </Button>
            </div>
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col gap-2 mt-8">
                    {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollTo(item.toLowerCase())}
                        className="px-4 py-3 text-left text-base font-medium text-zinc-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        {item}
                      </button>
                    ))}
                    <Button
                      onClick={() => scrollTo('contact')}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Get a Quote
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-zinc-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/hero-broadcast.jpg'), url('https://placehold.co/1920x800/1e293b/94a3b8/png?text=Broadcast+and+ProAV')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/70 to-zinc-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-500/30 hover:bg-blue-600/30">
              Broadcast &amp; ProAV Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              The Freedom to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                Tell the Story
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
              BMH Systems Solution Inc. is your trusted partner for professional broadcast equipment,
              cable TV products, and complete turnkey solutions. From design to delivery,
              we empower your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8"
                onClick={() => scrollTo('products')}
              >
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-500 text-zinc-200 hover:bg-zinc-800 text-base px-8"
                onClick={() => scrollTo('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Inquire Now', desc: "We'd love to hear from you, learn more about BMH.", icon: Mail, link: 'contact' },
            { title: 'Services', desc: 'We provide everything from Design and Engineering.', icon: Settings, link: 'services' },
            { title: 'Products', desc: 'We deal in all leading manufacturers.', icon: Camera, link: 'products' },
            { title: 'Why Choose Us?', desc: 'Every client is unique, every situation is different.', icon: Star, link: 'about' },
          ].map((item) => (
            <Card
              key={item.title}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1"
              onClick={() => scrollTo(item.link)}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Committed to Exceeding Customer Expectations
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                BMH Systems Solution Inc. is a business duly organized and existing under the law of the Philippines,
                offering professional broadcast equipment, cable TV products, and full-service engineering solutions.
                Established in 2014, we are managed by dynamic, well-seasoned individuals with deep expertise in
                broadcasting and telecommunication.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'To help true creativity blossom, our refreshing and simple philosophy.',
                  'A full suite of industry standard products at competitive prices.',
                  'We can help! Whether new to broadcasting or upgrading your studio.',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <p className="text-zinc-600 text-sm">{point}</p>
                  </div>
                ))}
              </div>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => scrollTo('services')}
              >
                Our Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-team.jpg"
                  alt="Professional broadcast team collaborating on equipment setup"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://placehold.co/800x600/e2e8f0/475569/png?text=Our+Team'
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-blue-100">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Mission / Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: 'Our Vision',
                desc: 'To be a frontrunner company that contributes to the emerging trends in the platform of the film, advertising, and broadcast industry.',
                color: 'bg-blue-600',
              },
              {
                title: 'Our Mission',
                desc: 'To build a solid foundation with our clients by going beyond their expectations, delivering services with professionalism and utmost courtesy.',
                color: 'bg-amber-500',
              },
              {
                title: 'Our Commitment',
                desc: 'Innovation, Dependability, Respect and Integrity. We are committed to exceeding customer expectations with exemplary service at competitive prices.',
                color: 'bg-zinc-800',
              },
            ].map((item) => (
              <Card key={item.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-full h-1 ${item.color} rounded-full mb-6`} />
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Complete Broadcast Solutions
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              BMH offers design, installation, and maintenance services. From product sales and support
              to large full-scale integrated systems, we deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              'Full Service and Support',
              'Design and Integration',
              'Custom Manufacturing',
              'Engineering Support',
              'Testing and Commissioning',
              'Onsite Systems Installation',
              'Offsite Prefabrication',
              'Equipment Sales, Supply and Delivery',
              'Complete Systems Design',
              'Project Management',
            ].map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-zinc-700 font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">How We Work</h3>
            <p className="text-zinc-500">Our proven six-step process ensures exceptional results every time.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: 'Evaluate', subtitle: 'Understanding Your Needs', desc: 'We find out what is important to you; your objectives, budgets, timescales and other drivers.' },
              { icon: FileText, title: 'Options', subtitle: 'Requirements Specification', desc: 'We help create your Requirements Specification, describing the facilities you need.' },
              { icon: PenTool, title: 'Proposals', subtitle: 'Detailed Proposal', desc: 'We produce a detailed Proposal specifying all equipment needed to create your project.' },
              { icon: Wrench, title: 'Design', subtitle: "Dotting the i's and crossing the t's", desc: 'A project manager works on detailed design, ensuring no loose ends.' },
              { icon: Rocket, title: 'Implement', subtitle: 'Ready to Use', desc: 'Procurement, configuration, testing, installation, commissioning and training.' },
              { icon: LifeBuoy, title: 'Support', subtitle: 'Ongoing Assistance', desc: 'Our dedicated support team is on-hand when you need help after going live.' },
            ].map((step, i) => (
              <Card key={i} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-3">{step.subtitle}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Professional Broadcast Equipment
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              BMH has developed relationships with a broad range of manufacturers. We provide equipment
              and support to the TV broadcast, post-production, radio telecommunication, and cable industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Camera, title: 'Pro Camcorders', desc: 'Professional broadcast cameras for every production need', img: '/images/product-camcorder.jpg' },
              { icon: Film, title: 'Studio & EFP Cameras', desc: 'Advanced HD cameras with cutting-edge features', img: '/images/product-studio-camera.jpg' },
              { icon: MonitorPlay, title: 'Monitors & Displays', desc: '4K HDR reference monitors for color-critical work', img: '/images/product-monitor.jpg' },
              { icon: Headphones, title: 'Pro Audio', desc: 'Professional audio equipment for broadcast quality sound', img: '/images/product-audio.jpg' },
              { icon: Lightbulb, title: 'Lighting', desc: 'Studio and field lighting solutions for any environment', img: '/images/product-lighting.jpg' },
              { icon: Camera, title: 'Photography', desc: 'Professional photography equipment and accessories', img: '/images/product-photography.jpg' },
              { icon: Settings, title: 'Accessories', desc: 'Essential accessories for professional setups', img: '/images/product-accessories.jpg' },
              { icon: MonitorPlay, title: 'Recording & Monitoring', desc: 'Broadcast quality recording for cameras and DSLRs', img: '/images/product-recording.jpg' },
            ].map((product, i) => (
              <Card key={i} className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://placehold.co/400x200/e2e8f0/475569/png?text=${encodeURIComponent(product.title)}`
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-3 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <product.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{product.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Product */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <Badge className="mb-4 w-fit bg-blue-600/20 text-blue-400 border-blue-500/30">Featured</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  LUM-310X-CI: 31&quot; 4K HDR Master Monitor
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  The Best-in-Class HDR reference monitor with 1000nit &amp; 1,000,000:1 dynamic range display,
                  innovated with a new color engine &amp; video processor. Perfect for HDR Professionals with
                  ZERO Video Latency.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Dolby Vision Master & EBU Grade-1B HDR specification',
                    'ZERO Video Latency (0.2-frame delay) for 4K/60p',
                    'New innovative DRC technology',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollTo('contact')}>
                  Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="relative min-h-64">
                <img
                  src="/images/monitoring.jpg"
                  alt="Professional 4K HDR broadcast monitor displaying vivid colors"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://placehold.co/800x600/1e293b/94a3b8/png?text=4K+HDR+Monitor'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">What Our Clients Say</h2>
            <p className="text-zinc-500">Trusted by broadcasters and media professionals across the Philippines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'We consider the BMH team a partner who has proven to be creative in problem resolution, reliable in time commitments, and overall consistent in meeting our expectations.', name: 'Media Broadcasting Client', role: 'TV Network' },
              { quote: 'BMH provided us with a complete turnkey solution that exceeded our expectations. Their engineering expertise and product knowledge made our studio upgrade seamless.', name: 'Studio Production Client', role: 'Post-Production House' },
              { quote: 'The team at BMH consistently delivers quality equipment and outstanding service. Their competitive pricing and technical support set them apart from other suppliers.', name: 'Cable TV Client', role: 'Cable Television Provider' },
            ].map((testimonial, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-blue-100 mb-4" />
                  <p className="text-zinc-600 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <Separator className="mb-4" />
                  <div>
                    <p className="font-semibold text-zinc-900">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get the latest services, discounts, promos, news and events from BMH straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold whitespace-nowrap">
              <Send className="w-4 h-4 mr-2" /> Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">Contact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Send Us a Message</h2>
            <p className="text-zinc-500">We&apos;d love to hear from you. Get in touch and let us help bring your vision to life.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-10">
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We will get back to you shortly.') }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-zinc-700 mb-1.5 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-zinc-700 mb-1.5 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-zinc-700 mb-1.5 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-zinc-700 mb-1.5 block">Phone</label>
                    <Input type="tel" placeholder="+63 XXX XXX XXXX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-zinc-700 mb-1.5 block">Message</label>
                    <textarea rows={5} placeholder="Tell us about your project..." className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 mb-1">Office Address</p>
                      <p className="text-zinc-500 text-sm">#51-A Scout Rallos Street, Barangay Laging Handa,<br />Quezon City, Philippines 1103</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 mb-1">Phone Numbers</p>
                      <p className="text-zinc-500 text-sm">+63 (02) 8921-3516</p>
                      <p className="text-zinc-500 text-sm">+63 (02) 3411-1723</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 mb-1">Email</p>
                      <p className="text-zinc-500 text-sm">info@bmh-systems.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <iframe
                  title="BMH Systems Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0!2d121.03!3d14.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM3JzQ4LjAiTiAxMjHCsDAyJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-extrabold">
                  <span className="text-blue-400">B</span>
                  <span className="text-amber-400">M</span>
                  <span className="text-blue-400">H</span>
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                BMH Systems Solution Inc. is your trusted partner for professional broadcast and ProAV solutions in the Philippines.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {['Home', 'About', 'Services', 'Products', 'Contact'].map((navItem) => (
                  <li key={navItem}>
                    <button onClick={() => scrollTo(navItem.toLowerCase())} className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" /> {navItem}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2.5">
                {['Design and Integration', 'Engineering Support', 'Equipment Sales', 'Project Management', 'Systems Installation'].map((svc) => (
                  <li key={svc}>
                    <button onClick={() => scrollTo('services')} className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" /> {svc}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                  <p className="text-sm text-zinc-400">#51-A Scout Rallos St., Brgy. Laging Handa, Quezon City, Philippines 1103</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 shrink-0 text-blue-400" />
                  <p className="text-sm text-zinc-400">+63 (02) 8921-3516</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0 text-blue-400" />
                  <p className="text-sm text-zinc-400">info@bmh-systems.com</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-10 bg-zinc-800" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} BMH Systems Solution Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
