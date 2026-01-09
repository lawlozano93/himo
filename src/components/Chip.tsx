interface ChipProps {
    label: string;
}

export default function Chip({ label }: ChipProps) {
    return (
        <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-[#f4f4f4] text-[#191314] hover:bg-[#ecf95a] transition-all cursor-default border border-transparent hover:border-[#191314]">
            {label}
        </span>
    );
}
