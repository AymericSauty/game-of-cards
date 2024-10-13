import { Component, inject, Signal } from '@angular/core';
import { ApiV1Service } from '../../data-access/api-v1.service';
import { DataQuery } from '../../../shared/data-access/data-query/data-query';
import { ScoreComponent } from '../../ui/score/score.component';
import { SpinnerComponent } from '../../../shared/ui/spinner/spinner.component';
import { forkJoin, map, tap } from 'rxjs';
import { LoadingState } from '../../../shared/data-access/data-query/loading-state';
import { Score } from '../../ui/score/score';

@Component({
    selector: 'app-score-page',
    standalone: true,
    imports: [ScoreComponent, SpinnerComponent],
    templateUrl: './score-page.component.html',
    host: { class: `block` },
})
export class ScorePageComponent {
    private readonly api = inject(ApiV1Service);

    public readonly data: Signal<LoadingState<Score[]>> = new DataQuery(
        forkJoin({
            games: this.api.games.getAll$(),
            players: this.api.players.getAll$(),
        }).pipe(
            map(({ games, players }) =>
                games.reverse().map((game): Score[] =>
                    game.scores
                        .map(({ playerId, score }) => {
                            const player = players.find(
                                (p) => p.id === playerId,
                            )?.name;

                            if (player == null) {
                                return null;
                            }

                            const isWinner =
                                score ===
                                Math.max(...game.scores.map((s) => s.score));

                            return {
                                isWinner,
                                player,
                                score,
                            };
                        })
                        .filter((score) => score != null),
                ),
            ),
        ),
    ).getData();
}
