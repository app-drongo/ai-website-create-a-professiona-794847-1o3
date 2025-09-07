import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Settings,
  Database,
  BarChart3,
  Shield,
  Cog,
  Factory,
  TrendingUp,
  Zap
} from "lucide-react"

export default function ServicesListDescriptions() {
  const services = [
    {
      id: "sap-integration",
      title: "SAP Integration & Implementation",
      description: "Seamless SAP integration for manufacturing excellence",
      longDescription: "Our comprehensive SAP integration services help manufacturing companies streamline operations, improve data visibility, and accelerate digital transformation. We specialize in connecting legacy systems with modern SAP solutions.",
      icon: Database,
      benefits: [
        "End-to-end SAP S/4HANA implementation",
        "Legacy system integration and migration",
        "Real-time data synchronization",
        "Custom API development and middleware"
      ],
      pricing: "Starting at $25,000/project",
      timeline: "6-12 months typical implementation",
      featured: true,
      badge: "Core Service"
    },
    {
      id: "digital-transformation",
      title: "Manufacturing Digital Transformation",
      description: "Transform your manufacturing operations with Industry 4.0 solutions",
      longDescription: "We guide manufacturing executives through comprehensive digital transformation initiatives, leveraging IoT, AI, and advanced analytics to optimize production processes and drive operational efficiency.",
      icon: Factory,
      benefits: [
        "Industry 4.0 roadmap development",
        "IoT sensor integration and monitoring",
        "Predictive maintenance solutions",
        "Smart factory automation consulting"
      ],
      pricing: "Custom enterprise pricing",
      timeline: "8-18 months transformation journey"
    },
    {
      id: "enterprise-consulting",
      title: "Enterprise Solutions Consulting",
      description: "Strategic consulting for manufacturing IT decision-makers",
      longDescription: "Our enterprise consulting services help manufacturing leaders make informed technology decisions, optimize IT infrastructure, and align technology investments with business objectives for maximum ROI.",
      icon: BarChart3,
      benefits: [
        "Technology stack assessment and optimization",
        "ERP selection and implementation strategy",
        "Cloud migration planning and execution",
        "IT governance and compliance frameworks"
      ],
      pricing: "Starting at $15,000/engagement",
      timeline: "3-6 months per engagement"
    },
    {
      id: "process-optimization",
      title: "Manufacturing Process Optimization",
      description: "Data-driven process improvement and automation",
      longDescription: "Optimize your manufacturing processes through advanced analytics, workflow automation, and continuous improvement methodologies. We help identify bottlenecks and implement solutions that drive efficiency.",
      icon: Settings,
      benefits: [
        "Lean manufacturing implementation",
        "Workflow automation and optimization",
        "Quality management system integration",
        "Performance monitoring and KPI dashboards"
      ],
      pricing: "Project-based from $20,000",
      timeline: "4-8 weeks per process stream",
      badge: "High ROI"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Manufacturing Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Solutions for
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Manufacturing Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP integration and digital transformation services designed specifically for manufacturing executives and IT decision-makers
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) =&gt; {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"} className={service.featured ? "bg-primary text-primary-foreground" : ""}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) =&gt; (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) =&gt; (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold text-primary">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold text-secondary">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className={`group/btn ${service.featured ? 'bg-primary hover:bg-primary/90' : 'border-primary/20 hover:bg-primary/5'}`}
                        >
                          Request Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center border border-primary/10">
          <div className="flex justify-center mb-4">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="size-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Manufacturing Operations?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our manufacturing experts are ready to discuss your SAP integration needs and digital transformation goals. Schedule a strategic consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Strategic Consultation
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Download Solutions Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}