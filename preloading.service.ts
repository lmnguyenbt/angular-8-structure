import { Injectable }                from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer }     from 'rxjs';
import { flatMap }                   from 'rxjs/operators';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
        if ( route.data && route.data['preload'] ) {
            const delay: number = route.data['delay'];

            return timer(delay).pipe(
                flatMap(_ => {
                   return loadMe();
                })
            );
        } else {
            return of(null);
        }
    }
}
