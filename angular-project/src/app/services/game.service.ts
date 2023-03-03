import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GameService {

	constructor(private http: HttpClient) { }

	private gamesUrl = 'http://localhost:1337/api/games?fields=title,description&populate=image&sort=pcReleaseDate:desc';
	private gameDetailUrl = 'http://localhost:1337/api/games/';

	getGames(): Observable<any> {
		return this.http.get(this.gamesUrl);
	}

	getGameDetail(id: number): Observable<any> {
		return this.http.get(this.gameDetailUrl + id + '?populate=image');
	}
}
