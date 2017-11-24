/**
 * Milestones
 */

function milestoneCheck() {

	if (milestoneFlag == 0 && funds >= 5) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("AutoClippers available for purchase");
	}

	if (milestoneFlag == 1 && Math.ceil(clips) >= 500) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("500 clips created in " + timeCruncher(ticks));
	}
	if (milestoneFlag == 2 && Math.ceil(clips) >= 1000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("1,000 clips created in " + timeCruncher(ticks));
	}

	if (compFlag == 0 && unsoldClips < 1 && funds < wireCost && wire < 1) {
		compFlag = 1;
		projectsFlag = 1;
		displayMessage("Trust-Constrained Self-Modification enabled");
	}

	if (compFlag == 0 && Math.ceil(clips) >= 2000) {
		compFlag = 1;
		projectsFlag = 1;
		displayMessage("Trust-Constrained Self-Modification enabled");
	}

	if (milestoneFlag == 3 && Math.ceil(clips) >= 10000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("10,000 clips created in " + timeCruncher(ticks));
	}
	if (milestoneFlag == 4 && Math.ceil(clips) >= 100000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("100,000 clips created in " + timeCruncher(ticks));
	}
	if (milestoneFlag == 5 && Math.ceil(clips) >= 1000000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("1,000,000 clips created in " + timeCruncher(ticks));
	}

	if (milestoneFlag == 6 && project35.flag == 1) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("Full autonomy attained in " + timeCruncher(ticks));
	}

	if (milestoneFlag == 7 && Math.ceil(clips) >= 1000000000000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("One Trillion Clips Created in " + timeCruncher(ticks));
	}

	if (milestoneFlag == 8 && Math.ceil(clips) >= 1000000000000000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("One Quadrillion Clips Created in "
				+ timeCruncher(ticks));
	}

	if (milestoneFlag == 9 && Math.ceil(clips) >= 1000000000000000000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("One Quintillion Clips Created in "
				+ timeCruncher(ticks));
	}

	if (milestoneFlag == 10 && Math.ceil(clips) >= 1000000000000000000000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("One Sextillion Clips Created in " + timeCruncher(ticks));
	}

	if (milestoneFlag == 11 && Math.ceil(clips) >= 1000000000000000000000000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("One Septillion Clips Created in " + timeCruncher(ticks));
	}

	if (milestoneFlag == 12 && Math.ceil(clips) >= 1000000000000000000000000000) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("One Octillion Clips Created in " + timeCruncher(ticks));
	}

	if (milestoneFlag == 13 && spaceFlag == 1) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("Terrestrial resources fully utilized in "
				+ timeCruncher(ticks));
	}

	if (milestoneFlag == 14 && clips >= totalMatter) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("Universal Paperclips achieved in "
				+ timeCruncher(ticks));
	}

	if (milestoneFlag == 14 && foundMatter >= totalMatter
			&& availableMatter < 1 && wire < 1) {
		milestoneFlag = milestoneFlag + 1;
		displayMessage("Universal Paperclips achieved in "
				+ timeCruncher(ticks));
	}

}