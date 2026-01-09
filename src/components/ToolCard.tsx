import { ToolIcon } from "./ToolIcons";

interface ToolCardProps {
    name: string;
    icon: string;
}

export default function ToolCard({ name, icon }: ToolCardProps) {
    return (
        <div className="bg-[#2a2526] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-[#ecf95a] transition-all cursor-default group">
            <div className="w-10 h-10 flex items-center justify-center text-white group-hover:text-[#191314] transition-colors">
                <ToolIcon name={icon} />
            </div>
            <span className="text-sm font-medium text-white group-hover:text-[#191314] text-center transition-colors">
                {name}
            </span>
        </div>
    );
}
