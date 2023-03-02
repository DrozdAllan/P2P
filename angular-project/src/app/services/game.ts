export interface Game {
	id: number;
	attributes: {
		description: string;
		title: string;
		image: {
			data: {
				id: number;
				attributes: any;
			}
		}
	};
}