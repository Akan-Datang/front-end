import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Get in Touch & Start Your Digital Transformation
        </h2>
        <p className="text-muted-foreground mb-6">
          Have questions or ready to get started? Fill out the form below, and our team will reach out to discuss how we
          can help you achieve your goals.
        </p>

        <div className="space-y-2 mt-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">+62 8238-8137-296</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">aurigasakti@auriga.com</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}

