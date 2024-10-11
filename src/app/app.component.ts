import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiV1Service } from './business/data-access/api-v1.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <router-outlet />
        <button (click)="ping()">TEST</button>
    `,
})
export class AppComponent {
    private readonly api = inject(ApiV1Service);

    public ping(): void {
        this.api.players.getAll$().subscribe((players) => console.log(players));
    }
}
