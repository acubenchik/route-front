import {RouteService} from "../../services/route.service";
import {inject, TestBed} from "@angular/core/testing";
import {AppSettings} from "../../common/config";
import {HttpModule, Response, ResponseOptions, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('RouteService', () => {


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule]
            ,
            providers: [
                RouteService,
                {provide: AppSettings.ROUTES_URL, useValue: "http://example.com"},
                {provide: XHRBackend, useClass: MockBackend}
            ]
        });
    });

    it('should parse routes received from backend correctly', inject([RouteService, XHRBackend],
        (service: RouteService, mockBackend: MockBackend) => {

            const mockResponse = {
                _embedded: {
                    routes: [
                        {id: 1},
                        {id: 2}
                    ]
                }
            };

            spyOn(localStorage, "getItem").and.returnValue("{}");
            mockBackend.connections.subscribe((connection: any) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })))
            });
            service.loadRoutes().subscribe((res: any) => {
                expect(res.length).toBe(2);
                expect(res[0].id).toEqual(1);
                expect(res[1].id).toEqual(2);
            });
        }));


    it('should handle error on backend side', inject([RouteService, XHRBackend],
        (service: RouteService, mockBackend: MockBackend) => {

            spyOn(localStorage, "getItem").and.returnValue("{}");
            mockBackend.connections.subscribe((connection: any) => {
                connection.mockError(new Error("some error"))
            });

            service.loadRoutes().subscribe((res: any) => {
                },
                (error) => {
                expect(error).toEqual("Server error");
                },
            );
        }));
});