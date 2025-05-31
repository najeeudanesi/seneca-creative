import { Mail, Phone } from "lucide-react"

interface ContactInfoProps {
  email: string
  phone: string
}

export default function ContactInfo({ email, phone }: ContactInfoProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6B00]/10 mr-4">
          <Mail className="h-5 w-5 text-[#FF6B00]" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">EMAIL US AT</p>
          <p className="font-medium">{email}</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6B00]/10 mr-4">
          <Phone className="h-5 w-5 text-[#FF6B00]" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">CALL US AT</p>
          <p className="font-medium">{phone}</p>
        </div>
      </div>
    </div>
  )
}
