import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-game-detail',
	templateUrl: './game-detail.component.html',
	styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
	game: any = null;

	constructor(private route: ActivatedRoute, private gameService: GameService, private titleService: Title) { }

	ngOnInit(): void {
		this.gameService.getGameDetail(Number(this.route.snapshot.paramMap.get('id'))).subscribe(game => this.game = game['data']);
		this.gameService.getGameDetail(Number(this.route.snapshot.paramMap.get('id'))).subscribe((game) => {
			this.titleService.setTitle('P2P - ' + game.data.attributes.title);
			return this.game = game['data'];
		});
	}
}
