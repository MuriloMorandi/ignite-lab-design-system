import { ReactNode, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	children: ReactNode;
	className?: string;
}
export function Button({
	asChild,
	children,
	className,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={clsx(
				"py-3 px-4 bg-cyan-500 rounded outline-none font-semibold text-black text-sm w-full transition-colors hover:bg-cyan 300 focus:ring-2 ring-white",
				className,
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}
