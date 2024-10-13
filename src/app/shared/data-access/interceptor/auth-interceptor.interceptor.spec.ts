import {
    HttpRequest,
    HttpHeaders,
    HttpHandlerFn,
    HttpEvent,
} from '@angular/common/http';
import { of } from 'rxjs';
import { authIntercept } from './auth-interceptor.interceptor';

describe('authIntercept', () => {
    it('should add an Authorization header to the request', (done) => {
        const mockRequest = new HttpRequest('GET', '/test', {
            headers: new HttpHeaders(),
        });

        const mockNext: HttpHandlerFn = (req: HttpRequest<unknown>) => {
            expect(req.headers.get('Authorization')).toBe(mockToken);

            return of({} as HttpEvent<unknown>);
        };

        const mockToken = 'test-token';

        const result = authIntercept(mockRequest, mockNext, mockToken);

        result.subscribe(() => {
            done();
        });
    });
});
