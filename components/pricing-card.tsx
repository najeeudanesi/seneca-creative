import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  subtitle: string
  price: string
  isPopular?: boolean
  features: string[]
}

export default function PricingCard({ title, subtitle, price, isPopular = false, features }: PricingCardProps) {
  return (
    <div
      className={`flex flex-col h-full ${isPopular ? "bg-[#8B4513]" : "bg-[#FF6B00]"} text-white rounded-md relative overflow-hidden`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-white text-[#8B4513] text-xs font-bold py-1 px-3 rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-80 mb-6">{subtitle}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold">${price}</span>
        </div>

        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="mt-auto w-full py-2 px-4 bg-white text-[#FF6B00] font-medium rounded hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}
