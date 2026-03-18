import { useRef, useState } from "react";

type UseTypingStudyOptions = {
	text: string;
};

export function useTypingStudy({ text }: UseTypingStudyOptions) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [typedText, setTypedText] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	const totalCharacters = text.length;
	const typedCharacters = typedText.length;
	const progress = totalCharacters === 0 ? 0 : (typedCharacters / totalCharacters) * 100;

	function handleChange(value: string) {
		if (value.length > totalCharacters) {
			return;
		}

		setTypedText(value);
	}

	function handleRestart() {
		setTypedText("");
		inputRef.current?.focus();
	}

	function focusInput() {
		inputRef.current?.focus();
	}

	return {
		inputRef,
		isFocused,
		progress,
		typedText,
		focusInput,
		handleChange,
		handleRestart,
		setIsFocused,
	};
}
