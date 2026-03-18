type StudyProgressProps = {
	progress: number;
};

export function StudyProgress({ progress }: StudyProgressProps) {
	return (
		<div className="mb-4 h-2 w-full overflow-hidden bg-secondary">
			<div
				className="h-full bg-primary transition-[width] duration-200"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
