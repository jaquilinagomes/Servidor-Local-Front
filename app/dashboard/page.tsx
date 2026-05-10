import DashboardHeader from "@/components/dashboard/dashboard-header";
import RatesCard from "@/components/dashboard/rates-card";
import { Sidebar } from "lucide-react";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gray-50 p-8">
            {/* Sidebar */}

            <section className="mx-auto max-w-5xl">
                <DashboardHeader/>

                <div className="mt-6 grid grid-cols-12 gap-6">
                    {/* LEFT */}
                    <div className="col-span-8 space-y-6">
                        <RatesCard/>
                        {/* QuotationList */}
                    </div>

                    {/* RIGHT */}
                    <div className="col-span-4">
                        {/* SheduleCard */}
                    </div>
                </div>
            </section>
        </main>
    )
}
