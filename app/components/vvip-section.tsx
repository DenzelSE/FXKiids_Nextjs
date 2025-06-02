import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown } from "lucide-react"

export function VVIPSection() {
  return (
    <section id="vvip" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Crown className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">VVIP Access Required</h2>

              <p className="text-gray-300 mb-8">Connect your wallet to verify your VVIP membership NFT</p>

              <Button className="bg-red-500 hover:bg-red-600 text-white mb-6">Connect Wallet</Button>

              <p className="text-gray-400 text-sm">
                {"Don't have a VVIP membership NFT yet? "}
                <a href="#" className="text-red-500 hover:text-red-400 underline">
                  Learn how to get one
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
