import { Component, inject, Signal } from '@angular/core';
import { ApiV1Service } from '../../data-access/api-v1.service';
import { DataQuery } from '../../../shared/data-access/data-query/data-query';
import { GameComponent } from '../../ui/game/game.component';
import { SpinnerComponent } from '../../../shared/ui/spinner/spinner.component';
import { forkJoin, map } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { LoadingState } from '../../../shared/data-access/data-query/loading-state';
import { Score } from '../../ui/game/score';

@Component({
    selector: 'app-score',
    standalone: true,
    imports: [GameComponent, SpinnerComponent, JsonPipe],
    templateUrl: './score.component.html',
    host: { class: `block` },
})
export class ScoreComponent {
    private readonly api = inject(ApiV1Service);

    public readonly data: Signal<LoadingState<Score[]>> = new DataQuery(
        forkJoin({
            games: this.api.games.getAll$(),
            players: this.api.players.getAll$(),
        }).pipe(
            map(({ games, players }) =>
                games.map((game): Score[] =>
                    game.scores
                        .map((score) => {
                            const player = players.find(
                                (p) => p.id === score.playerId,
                            )?.name;

                            const isWinner =
                                score.score ===
                                Math.max(...game.scores.map((s) => s.score));

                            if (player == null) {
                                return null;
                            }

                            return {
                                score: score.score,
                                player,
                                isWinner,
                            };
                        })
                        .filter((score) => score != null),
                ),
            ),
        ),
    ).getData();
}
