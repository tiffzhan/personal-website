import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ResearchSection from './components/ResearchSection';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-5">
				{/* Left Column - Profile */}
				<div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex items-start md:items-center">
					<ProfileSection />
				</div>

				{/* Right Column */}
				<div className="md:col-span-3 flex flex-col justify-start md:justify-center overflow-x-hidden">
					<SkillsSection />
					<ExperienceSection />
					<ResearchSection />
				</div>
			</div>
		</main>

	);
}
