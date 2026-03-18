import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type StudyHeaderProps = {
	isFocused: boolean;
	onRestart: () => void;
};

export function StudyHeader({ isFocused, onRestart }: StudyHeaderProps) {
	return (
		<div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] ">
					<span
						className={cn(
							"border min-w-20 text-center transition-colors",
							isFocused
								? "border-primary bg-primary text-primary-foreground"
								: "border-border bg-secondary text-secondary-foreground",
						)}
					>
						{isFocused ? "ativo" : "pausado"}
					</span>
					<p className="text-muted-foreground">Campo de escrita</p>
				</div>

				<p className="mt-2 text-sm text-muted-foreground">
					Clique na area ou comece a digitar para iniciar.
				</p>
			</div>
			<div className="flex flex-wrap items-center gap-3">
				<button
					type="button"
					onClick={onRestart}
					className="inline-flex items-center justify-center gap-2 border border-border bg-secondary px-4 py-3 text-sm uppercase tracking-[0.25em] text-secondary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				>
					<RotateCcw className="size-4" />
					Reiniciar
				</button>
			</div>
		</div>
	);
}
