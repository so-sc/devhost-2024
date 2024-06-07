import RegisterForm from "@/components/RegisterForm"
import Image from "next/image"
import { notFound } from "next/navigation"

function Page() {
  return notFound()

  // return (
  //   <main className="flex flex-col justify-center items-center min-h-screen">
  //     <div className="absolute top-0 right-0 -z-20">
  //       <Image
  //         src="/topo1.svg"
  //         priority
  //         width={500}
  //         height={500}
  //         alt="background"
  //         className="object-right lg:w-[40rem] lg:h-[40rem] md:w-[30rem] md:h-[30rem] w-96 h-96 object-cover"
  //       ></Image>
  //     </div>
  //     {/* <RegisterForm /> */}
  //   </main>
  // )
}

export default Page
