import { Card, CardContent } from "../ui/card"

interface CategoriaType {
    id: string;
    nome: string;
    icone: string;
}
interface PedidoCardProps {
    title: string;
    description: string;
    image: string;
    category: CategoriaType;
}

export const PedidoCard = (PedidoCardProps: PedidoCardProps) => {
    return (
        <div>
        <Card>
            <CardContent>
                <div >
                    <img src="/" alt="12" />
                    <h1 className="font-bold">Emergenncy Plumbing</h1>
                    <p>24/7 support for leaks, pipe bursts, and urgent drainage issues</p>
                </div>
                <button className="ml-auto bg-[#13A4EC] rounded-md text-white font-bold py-3 shadow-lg px-6">Browse Providers</button>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
                <div>
                    <img src="/" alt="12" />
                    <h1 className="font-bold">Light Fixture Installation</h1>
                    <p>Professional Installation for chandeliers, sconces, and recessed lighting.</p>
                </div>
                <button className="ml-auto bg-[#13A4EC] rounded-md text-white font-bold py-3 shadow-lg px-6">Browse Providers</button>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
                <div>
                    <img src="/" alt="12" />
                    <h1 className="font-bold">Custom Cabinetry</h1>
                    <p>Bespoke storage solutions and repairs for your kitchen or living space.</p>
                </div>
                <button className="ml-auto bg-[#13A4EC] rounded-md text-white font-bold py-3 shadow-lg px-6">Browse Providers</button>
            </CardContent>
        </Card>

            <Card>
            <CardContent>
                <div>
                    <img src="/" alt="12" />
                    <h1 className="font-bold">Interior Wall Painting</h1>
                    <p>Precision Painting for single rooms or entire home interiors.</p>
                </div>
                <button className="ml-auto bg-[#13A4EC] rounded-md text-white font-bold py-3 shadow-lg px-6">Browse Providers</button>
            </CardContent>
        </Card>

            <Card>
            <CardContent>
                <div>
                    <img src="/" alt="12" />
                    <h1 className="font-bold">AC Maintenance</h1>
                    <p>Seasons cleaning and efficienty checks for cooling systems.</p>
                </div>
                <button className="ml-auto bg-[#13A4EC] rounded-md text-white font-bold py-3 shadow-lg px-6">Browse Providers</button>
            </CardContent>
        </Card>

                <Card>
            <CardContent>
                <div>
                    <img src="/" alt="12" />
                    <h1 className="font-bold">Smart Lock Setup</h1>
                    <p>Installation and synchronization of digital security locks and cameras.</p>
                </div>
                <button className="ml-auto bg-[#13A4EC] rounded-md text-white font-bold py-3 shadow-lg px-6">Browse Providers</button>
            </CardContent>
        </Card>
        </div>

        )
}
