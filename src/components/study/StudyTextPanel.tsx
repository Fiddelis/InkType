import type { RefObject } from "react";
import { cn } from "@/lib/utils";

type StudyTextPanelProps = {
	inputRef: RefObject<HTMLInputElement | null>;
	isFocused: boolean;
	text: string;
	typedText: string;
	onChange: (value: string) => void;
	onFocus: () => void;
	onBlur: () => void;
	onPanelClick: () => void;
};

export function StudyTextPanel({
	inputRef,
	isFocused,
	text,
	typedText,
	onChange,
	onFocus,
	onBlur,
	onPanelClick,
}: StudyTextPanelProps) {
	return (
		<div
			role="presentation"
			onClick={onPanelClick}
			className="group relative min-h-0 flex-1 cursor-text overflow-hidden border border-border bg-background/70 p-4 text-lg leading-8 tracking-wide text-muted-foreground transition-colors hover:border-primary/50 md:p-6 md:text-xl md:leading-10"
		>
			<input
				ref={inputRef}
				value={typedText}
				onChange={(event) => onChange(event.target.value)}
				onFocus={onFocus}
				onBlur={onBlur}
				autoCapitalize="off"
				autoComplete="off"
				autoCorrect="off"
				spellCheck={false}
				className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
				aria-label="Campo de digitacao"
			/>

			{text.split("").map((character, index) => {
				const typedCharacter = typedText[index];
				const isCurrent = index === typedText.length;
				const isTyped = typedCharacter !== undefined;
				const isCorrect = typedCharacter === character;

				return (
					<span
						key={`${character}-${index}`}
						className={cn(
							"relative whitespace-pre-wrap transition-colors",
							!isTyped && "text-muted-foreground/70",
							isTyped && isCorrect && "text-foreground",
							isTyped && !isCorrect && "bg-destructive/15 text-destructive",
							isCurrent &&
								"after:absolute after:top-[0.15em] after:-left-[0.08em] after:h-[1.15em] after:w-0.5 after:bg-primary after:content-[''] after:animate-pulse",
						)}
					>
						{character}
					</span>
				);
			})}

			{!isFocused && typedText.length === 0 ? (
				<span className="pointer-events-none absolute right-4 bottom-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/70 md:right-6 md:bottom-6">
					clique para iniciar
				</span>
			) : null}
		</div>
	);
}
