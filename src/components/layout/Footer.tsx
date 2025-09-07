import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Settings,
  Cog,
  Database,
  Factory
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "SAP Integration", href: "/services/sap-integration" },
        { name: "Manufacturing Systems", href: "/services/manufacturing" },
        { name: "Process Optimization", href: "/services/optimization" },
        { name: "Digital Transformation", href: "/services/digital" },
        { name: "ERP Solutions", href: "/services/erp" },
        { name: "Consulting", href: "/services/consulting" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Automotive", href: "/industries/automotive" },
        { name: "Aerospace", href: "/industries/aerospace" },
        { name: "Electronics", href: "/industries/electronics" },
        { name: "Pharmaceuticals", href: "/industries/pharma" },
        { name: "Food & Beverage", href: "/industries/food" },
        { name: "Chemical", href: "/industries/chemical" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "White Papers", href: "/resources/whitepapers" },
        { name: "Implementation Guide", href: "/resources/guides" },
        { name: "Best Practices", href: "/resources/best-practices" },
        { name: "ROI Calculator", href: "/resources/roi-calculator" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Events", href: "/news" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/manufacturetech" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/manufacturetech" },
    { name: "GitHub", icon: Github, href: "https://github.com/manufacturetech" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Settings className="text-background size-5" />
                </div>
                <span className="font-bold text-xl text-foreground">ManufactureTech Solutions</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Leading SAP integration specialists for manufacturing companies. We streamline operations, 
                optimize processes, and drive digital transformation for industry leaders worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">solutions@manufacturetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-0123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">500 Industrial Blvd, Manufacturing District</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Industry Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get manufacturing technology insights and SAP integration tips. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 ManufactureTech Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Powering <Factory className="size-3 text-primary" /> manufacturing excellence
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Security & Compliance
            </Link>
            <Link href="/support" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}