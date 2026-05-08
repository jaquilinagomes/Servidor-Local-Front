import StatCard from "./stat-card";


export default function RatesCard() {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="">
            <h2>Rates & Fees</h2>

            <button>Edit</button>
            </div>

            <div>
            <StatCard
            icon=""
            title="HOURLY RATE"
            value="$50/hr"
            />

            <StatCard
            icon=""
            title="URGENCY FEE"
            value="+15%"
            />

            <StatCard
            icon=""
            title="VALUME DISCOUNT"
            value="-10%"
            />
            </div>
        </div>
    )
}