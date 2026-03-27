"use client";

import { WaveLine } from "@/components/ui/WaveLine";
import { type FormEvent, useState } from "react";

export function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<div className="border-t border-ink/10 pt-8">
				<p className="font-display text-2xl text-ink">
					Bedankt voor je bericht
				</p>
				<p className="mt-3 font-body text-base text-ink/60">
					We nemen zo snel mogelijk contact met je op.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6">
			<div className="grid gap-6 sm:grid-cols-2">
				<label className="flex flex-col gap-2">
					<span className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
						Naam
					</span>
					<input
						type="text"
						name="name"
						required
						className="border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink outline-none transition-colors focus:border-teal"
					/>
				</label>
				<label className="flex flex-col gap-2">
					<span className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
						E-mail
					</span>
					<input
						type="email"
						name="email"
						required
						className="border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink outline-none transition-colors focus:border-teal"
					/>
				</label>
			</div>

			<label className="flex flex-col gap-2">
				<span className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
					Organisatie
				</span>
				<input
					type="text"
					name="organization"
					className="border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink outline-none transition-colors focus:border-teal"
				/>
			</label>

			<label className="flex flex-col gap-2">
				<span className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
					Interesse in
				</span>
				<select
					name="interest"
					className="border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink outline-none transition-colors focus:border-teal"
					defaultValue=""
				>
					<option value="" disabled>
						Kies een optie
					</option>
					<option value="ukelele-teambuilding">Ukelele Teambuilding</option>
					<option value="ukelele-initiatie">Ukelele Initiatie</option>
					<option value="percussie">Initiatie Percussie</option>
					<option value="samen-zingen">Samen Zingen</option>
					<option value="prive-les">Privé Les</option>
					<option value="anders">Anders</option>
				</select>
			</label>

			<label className="flex flex-col gap-2">
				<span className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
					Bericht
				</span>
				<textarea
					name="message"
					rows={5}
					required
					className="resize-none border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink outline-none transition-colors focus:border-teal"
				/>
			</label>

			<div className="mt-2">
				<button
					type="submit"
					className="group inline-flex cursor-pointer items-center gap-3 border-none bg-transparent p-0 font-body text-sm uppercase tracking-[0.08em] text-ink"
				>
					Verstuur bericht
					<WaveLine
						className="w-8 transition-all duration-300 group-hover:w-14"
						color="var(--color-teal)"
						width="auto"
					/>
				</button>
			</div>
		</form>
	);
}
