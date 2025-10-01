const PublicationsSection = () => {
	const publications = [
		{
			title: 'A Geometric Lens on LLM Abilities through Joint Embedding Item Response Theory',
			authors: 'L. Yao, N. Jarvis, T. Zhan, S. Ghosh, L. Liu, T. Jiang',
			status: 'Submitted',
			summary:
				'We present JE-IRT: a geo-metric item-response framework that embeds both LLMs and questions in a shared space.',
		},
		{
			title: 'Sycophancy Is Not One Thing: Causal Separation of Sycophantic Behaviors in LLMs',
			authors: 'D. Venemeyer, P. Duong, T. Zhan, T. Jiang',
			status: 'Submitted',
			summary:
				'In this paper we show that: (1) sycophantic agreement, genuine agreement, and sycophantic praise are encoded along distinct linear directions in latent space; (2) each behavior can be independently amplified or suppressed without affecting the others; and (3) their representational structure is consistent across model families and scales.',
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				{/* Section Header */}
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Pending Publications</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				{/* Publications List */}
				<div className="space-y-5">
					{publications.map((pub) => (
						<div key={pub.title} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div className="space-y-1">
									{/* Title + Status */}
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{pub.title}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{pub.status}</span>
									</div>

									{/* Authors + Venue */}
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{pub.authors}</p>
									<p className="text-sm italic text-gray-500 dark:text-gray-400">{pub.venue}</p>

									{/* Summary */}
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{pub.summary}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Scholar Link */}
				<div className="pt-4 text-center">
					<a
						href="https://scholar.google.com/citations?user=WD-j-poAAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
					>
						View full publication list on Google Scholar
						<svg
							className="w-4 h-4 ml-1"
							viewBox="0 0 25 25"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							aria-label="Google Scholar"
						>
							<path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431 .256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.032.883-.027 1.983" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default PublicationsSection;
