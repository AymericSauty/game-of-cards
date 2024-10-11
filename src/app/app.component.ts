import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { PageContentComponent } from './shared/ui/page-content/page-content.component';
import { NavigationComponent } from './shared/ui/navigation/navigation.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        LayoutComponent,
        NavigationComponent,
        PageContentComponent,
    ],
    template: `
        <app-layout>
            <app-header [title]="'Game of Cards'" />
            <app-navigation />
            <app-page-content>
                <router-outlet />
            </app-page-content>
        </app-layout>
    `,
})
export class AppComponent {}
