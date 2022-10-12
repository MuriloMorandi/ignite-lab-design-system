import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps {
	asChild?: boolean;
	children: ReactNode;
	size?: "sm" | "md" | "lg";
}
export function Heading({ asChild, children, size = "md" }: HeadingProps) {
	const Comp = asChild ? Slot : "h2";

	return (
		<Comp
			className={clsx("text-gray-100 font-sans", {
				"text-xs": size === "sm",
				"text-sm": size === "md",
				"text-md": size === "lg",
			})}
		>
			{children}
		</Comp>
	);
}
