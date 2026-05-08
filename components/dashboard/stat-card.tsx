
type StatCardProps = {
    title: string
    value: string
    icon: string
}

export default function StatCard({
    title,
    value,
    icon,
}: StatCardProps) {
    return (
        <div>
            <div>
                <span>{icon}</span>
                <span>{title}</span>
            </div>
            <div>{value}</div>
        </div>
    )
}