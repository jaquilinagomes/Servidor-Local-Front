import { LeftSectionRegistro } from "@/components/registro/left-section";
import { RightSectionRegistro } from "@/components/registro/right-section";


export default function RegistroPage() {
    return (
    <div className="bg-gray-200 h-screen flex justify-between">
        <LeftSectionRegistro/>
        
        <RightSectionRegistro/>
    </div>
    );
}