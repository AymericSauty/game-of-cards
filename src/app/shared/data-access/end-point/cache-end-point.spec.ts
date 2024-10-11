import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CacheEndPoint } from './cache-end-point';
import { Injectable } from '@angular/core';

@Injectable()
class MockApiService extends CacheEndPoint {
    public readonly url = 'http://api.com';
}

class MockEndPoint {
    constructor(
        public readonly url: string,
        public readonly http: HttpClient,
    ) {}
}

class MockAnotherEndPoint {
    constructor(
        public readonly url: string,
        public readonly http: HttpClient,
    ) {}
}

describe('CacheEndPoint', () => {
    let httpClientMock: HttpClient;
    let apiService: MockApiService;

    beforeEach(() => {
        httpClientMock = {
            get: jest.fn(),
            post: jest.fn(),
        } as unknown as HttpClient;

        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: httpClientMock },
                MockApiService,
            ],
        });

        apiService = TestBed.inject(MockApiService);
    });

    it('should create and cache an endpoint instance', () => {
        const endpoint = apiService.getEndPoint(MockEndPoint, '/path');

        expect(endpoint).toBeInstanceOf(MockEndPoint);
        expect(endpoint.url).toBe(`${apiService.url}/path`);
        expect(endpoint.http).toBe(httpClientMock);
    });

    it('should return the same instance of the endpoint', () => {
        const endpoint1 = apiService.getEndPoint(MockEndPoint, '/path');
        const endpoint2 = apiService.getEndPoint(MockEndPoint, '/path');

        expect(endpoint1).toBe(endpoint2);
    });

    it('should create a new instance for a different endpoint type', () => {
        const endpoint1 = apiService.getEndPoint(MockEndPoint, '/path-1');
        const endpoint2 = apiService.getEndPoint(
            MockAnotherEndPoint,
            '/another-path',
        );

        expect(endpoint1).not.toBe(endpoint2);
    });
});
