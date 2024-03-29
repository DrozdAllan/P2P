import { Component, OnInit } from '@angular/core';
import { Game } from '../services/game';
import { GameService } from '../services/game.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	games: Game[] = [];

	constructor(private gameService: GameService) { }
	ngOnInit(): void {
		this.gameService.getGames().subscribe(games => this.games = games['data']);
	}
}
