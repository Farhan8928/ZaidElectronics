import { MessageCircle } from 'lucide-react'
import { waLink } from '../data.js'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink('Hi Zaid Electronics! My TV needs repair.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Zaid Electronics on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  )
}
