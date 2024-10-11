import { DestroyRef, Directive, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLinkActive } from '@angular/router';
import { ElementInteractiveDirective } from './element-interactive.directive';
import { startWith } from 'rxjs';

@Directive({
    selector: '[appElementLink]',
    exportAs: 'appElementLink',
    standalone: true,
    hostDirectives: [ElementInteractiveDirective, RouterLinkActive],
})
export class ElementLinkDirective implements OnInit {
    private readonly elementInteractive = inject(ElementInteractiveDirective);

    private readonly destroyRef = inject(DestroyRef);

    private readonly routerLinkActive = inject(RouterLinkActive);

    public ngOnInit(): void {
        this.routerLinkActive.isActiveChange
            .pipe(startWith(false), takeUntilDestroyed(this.destroyRef))
            .subscribe((isActive) =>
                this.elementInteractive.isActive.set(isActive),
            );
    }
}
