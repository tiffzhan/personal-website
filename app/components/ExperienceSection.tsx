const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Research Fellowship',
			company: 'Carnegie Mellon University',
			period: 'June 2025 - Present',
			highlights: 'Built a reinforcement learning model for financial trading using news and Twitter sentiment and market indicators and co-authored technical documentation.',
		},
		{
			role: 'Research Intern',
			company: 'Air Force Research Labs',
			period: 'June 2023 - August 2023',
			highlights: 'Engineered GAN architectures for 3D rendering, Improved performance for view-dependent rendering and developed prompt-engineering techniques to stabilize multi-angle outputs.',
		},
		{
			role: 'Software Engineering Intern',
			company: 'J.B. Hunt Transport',
			period: 'June 2022 - August 2022',
			highlights: 'Implemented Newman frameworks to validate API integrations across 15+ service and authored process documentation for CI/CD pipelines.',
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
