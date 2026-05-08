import RatesCard from "@/components/dashboard/rates-card";


export default function DashboardPage() {
    return (
        <main>
            <div>
                <h1>
                    Dashboard
                </h1>

                <p>Manage your business settings, rates, and availability.</p>
                <div>
                    <RatesCard/>
                </div>
            </div>
        </main>
    )
}
