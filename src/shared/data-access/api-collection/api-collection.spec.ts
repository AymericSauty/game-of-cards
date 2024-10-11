import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ApiCollection } from './api-collection';

describe('ApiCollection', () => {
    let apiCollection: ApiCollection<any, any>;
    let httpClient: HttpClient;
    const url = 'http://api.com';

    beforeEach(() => {
        httpClient = {
            post: jest.fn(),
            get: jest.fn(),
        } as unknown as HttpClient;

        apiCollection = new ApiCollection(url, httpClient);
    });

    describe('create$', () => {
        it('should call post with the correct URL and body', (done) => {
            const body = { name: 'test' };
            const response = { id: 1, ...body };
            jest.spyOn(httpClient, 'post').mockReturnValue(of(response));

            apiCollection.create$(body).subscribe((result) => {
                expect(result).toEqual(response);
                done();
            });

            expect(httpClient.post).toHaveBeenCalledWith(url, body);
        });
    });

    describe('getAll$', () => {
        it('should call get with the correct URL', (done) => {
            const response = [{ id: 1, name: 'test' }];
            jest.spyOn(httpClient, 'get').mockReturnValue(of(response));

            apiCollection.getAll$().subscribe((result) => {
                expect(result).toEqual(response);
                done();
            });

            expect(httpClient.get).toHaveBeenCalledWith(url);
        });
    });
});
