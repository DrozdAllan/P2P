import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
	selector: 'app-game-detail',
	templateUrl: './game-detail.component.html',
	styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
	game: any = null;

	constructor(private route: ActivatedRoute, private gameService: GameService) { }

	ngOnInit(): void {
		this.gameService.getGameDetail(Number(this.route.snapshot.paramMap.get('id'))).subscribe(game => this.game = game['data']);
	}
}
