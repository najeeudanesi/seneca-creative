import Link from "next/link"
import LazyImage from "./lazy-image"

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  image: string
  link: string
}

export default function PortfolioCard({ title, category, description, image, link }: PortfolioCardProps) {
  return (
  <div className="relative group flex flex-col items-center text-center p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform  duration-300 ease-in-out rounded-3xl bg-white w-[20rem] h-[30rem] cursor-pointer hover:bg-gray-50">

      <Link href={link} className="block mb-4 overflow-hidden rounded-lg">
        <div className="w-full px-5 py-8"> 
          <LazyImage
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={600}
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      </Link>
      <h3 className="text-orange-500 uppercase font-bold mb-1">{category}</h3>
      {/* <h4 className="text-lg font-medium mb-2">{title}</h4> */}
      <p className="text-sm text-gray-600">{description}</p>

     <button style={{height: "42px"}} className="opacity-0 mt-4 text-white rounded-lg btn-primary transition-opacity duration-300 group-hover:opacity-100 text-center w-full ">

  <p className="w-full">View Gallery</p>
</button>

    </div>
  )
}
