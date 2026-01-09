"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ToolIcon } from "./ToolIcons";

interface Tool {
    name: string;
    icon: string;
    usage?: string;
}

interface ToolsAnimatedProps {
    tools: Tool[];
}

export default function ToolsAnimated({ tools }: ToolsAnimatedProps) {
    const tooltipItems = tools.map((tool, index) => ({
        id: index + 1,
        name: tool.name,
        designation: tool.usage || "Tool",
        icon: <ToolIcon name={tool.icon} className="w-full h-full" />,
    }));

    return <AnimatedTooltip items={tooltipItems} />;
}
