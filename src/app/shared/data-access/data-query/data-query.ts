import { map, Observable, startWith, switchMap } from 'rxjs';
import { initialLoadingState, LoadingState } from './loading-state';
import { inject, Injector, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

export class DataQuery<Data> {
    private readonly injector = inject(Injector);

    private dataFetcher!: Observable<Data[]>;

    public constructor(dataFetcher: Observable<Data[]>) {
        this.dataFetcher = dataFetcher;
    }

    public getData$(): Observable<LoadingState<Data>> {
        return this.dataFetcher.pipe(
            map((data) => ({ data, loading: false })),
            startWith({ data: [], loading: true }),
        );
    }

    public getData(): Signal<LoadingState<Data>> {
        return toSignal(this.getData$(), {
            injector: this.injector,
            initialValue: initialLoadingState,
        });
    }
}
