import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Shield, 
  Database, 
  Globe, 
  BarChart3, 
  Cog,
  Zap,
  Users,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Settings,
      title: "SAP Integration Excellence",
      description: "Seamless integration of SAP systems with your existing manufacturing infrastructure for optimal workflow efficiency.",
      badge: "Core Service"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols ensuring your manufacturing data and processes remain protected at all times.",
      badge: "Security"
    },
    {
      icon: Database,
      title: "Real-Time Data Analytics",
      description: "Advanced analytics platform providing instant insights into production metrics and operational performance.",
      badge: "Analytics"
    },
    {
      icon: Globe,
      title: "Global Manufacturing Support",
      description: "Multi-site manufacturing coordination with centralized control and distributed execution capabilities.",
      badge: "Global"
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of manufacturing processes to maximize efficiency and reduce costs.",
      badge: "Optimization"
    },
    {
      icon: Cog,
      title: "Custom Workflow Design",
      description: "Tailored manufacturing workflows designed specifically for your industry requirements and operational needs.",
      badge: "Customization"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Fast-track deployment methodology ensuring minimal disruption to your current manufacturing operations.",
      badge: "Implementation"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Dedicated team of manufacturing and SAP specialists providing ongoing support and strategic guidance.",
      badge: "Support"
    },
    {
      icon: TrendingUp,
      title: "ROI Maximization",
      description: "Proven strategies to maximize return on investment through optimized manufacturing processes and reduced operational costs.",
      badge: "ROI"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Manufacturing Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Manufacturing with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Integration Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP integration solutions designed specifically for manufacturing executives 
            seeking digital transformation and operational excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =&gt; {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to revolutionize your manufacturing operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule SAP Assessment
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}