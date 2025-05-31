interface ServiceCardProps {
  number: number
  title: string
  description: string
}

export default function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="flex items-start  border-b-2 border-orange-400 border-opacity-40 py-8 mb-4 last:mb-0">
      <div className="text-[#FF6B00] font-bold text-2xl mr-4">{number}.</div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
