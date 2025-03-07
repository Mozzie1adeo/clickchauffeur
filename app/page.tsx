import BookingForm from "@/components/booking-form"
import Features from "@/components/features"
import Hero from "@/components/hero"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <BookingForm />
        <Features />
      </div>
      <Toaster />
    </main>
  )
}

