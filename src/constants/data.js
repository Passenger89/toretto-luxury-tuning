import images from './images.js';

const articles = [
	{
		imgUrl: images.turbocharger,
		title: 'TurboCharger Selection Guide',
		path: '/turbocharger',
	},
	{
		imgUrl: images.fuelinjector,
		title: 'Fuel Injector Selection Guide',
		path: '/fuelinjector',
	},
	{
		imgUrl: images.efi,
		title: 'What is EFI Tuning?',
		path: 'efi',
	},
	{
		imgUrl: images.datalogging,
		title: 'Datalogging: Why You Need It',
		path: 'datalogging',
	},
];

const awards = [
	{
		imgUrl: images.award02,
		title: 'Customer Contact Leader Of The Year',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		imgUrl: images.award01,
		title: 'Achievement in On the Rise',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		imgUrl: images.award05,
		title: 'Most Innovative Company of the Year',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		imgUrl: images.award03,
		title: 'Best Place to Work',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
];

export default { awards, articles };
