import { StudyHeader } from "@/components/study/StudyHeader";
import { StudyProgress } from "@/components/study/StudyProgress";
import { StudyTextPanel } from "@/components/study/StudyTextPanel";
import { STUDY_TEXT } from "@/components/study/constants";
import { useTypingStudy } from "@/components/study/useTypingStudy";

function Study() {
	const {
		inputRef,
		isFocused,
		progress,
		typedText,
		focusInput,
		handleChange,
		handleRestart,
		setIsFocused,
	} = useTypingStudy({ text: STUDY_TEXT });

	return (
		<section className="h-[calc(100vh-56px)] overflow-hidden bg-background px-4 py-4 text-foreground md:px-6 md:py-6">
			<div className="mx-auto flex h-full w-full max-w-5xl">
				<div className="flex h-full w-full flex-col overflow-hidden border border-border bg-card p-4 md:p-6">
					<StudyHeader isFocused={isFocused} onRestart={handleRestart} />
					<StudyProgress progress={progress} />
					<StudyTextPanel
						inputRef={inputRef}
						isFocused={isFocused}
						text={STUDY_TEXT}
						typedText={typedText}
						onChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						onPanelClick={focusInput}
					/>

					<p className="mt-4 text-sm text-muted-foreground">
						O comportamento aceita correcoes com{" "}
						<span className="text-foreground">backspace</span> e limita a
						digitacao ao tamanho do texto mockado.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Study;
