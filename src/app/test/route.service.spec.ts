import {RouteService} from "../services/route.service";
import {inject, TestBed} from "@angular/core/testing";
import {HttpModule, Response, ResponseOptions, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {AuthenticationService} from "../services/authentication.service";
import {APP_CONFIG, AppConfig} from "../common/config";
import {Route} from "../model/Route";

describe('RouteService', () => {


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                RouteService,
                {provide: XHRBackend, useClass: MockBackend},
                {provide: APP_CONFIG, useValue: AppConfig},
                {
                    provide: AuthenticationService, useValue: {
                    getHeaders: function () {
                        return <any>null;
                    }
                }
                }
            ]
        });
    });

    // it('should parse routes received from backend correctly', inject([RouteService, XHRBackend],
    //     (service: RouteService, mockBackend: MockBackend) => {
    //
    //         const mockResponse = {
    //             _embedded: {
    //                 routes: [
    //                     {id: 1},
    //                     {id: 2}
    //                 ]
    //             }
    //         };
    //
    //         spyOn(localStorage, "getItem").and.returnValue("{}");
    //         mockBackend.connections.subscribe((connection: any) => {
    //             connection.mockRespond(new Response(new ResponseOptions({
    //                 body: JSON.stringify(mockResponse)
    //             })))
    //         });
    //         service.loadRoutes().subscribe((res: any) => {
    //             expect(res.length).toBe(2);
    //             expect(res[0].id).toEqual(1);
    //             expect(res[1].id).toEqual(2);
    //         });
    //     }));
    //
    //
    // it('should handle error on backend side', inject([RouteService, XHRBackend],
    //     (service: RouteService, mockBackend: MockBackend) => {
    //
    //         spyOn(localStorage, "getItem").and.returnValue("{}");
    //         mockBackend.connections.subscribe((connection: any) => {
    //             connection.mockError(new Error("some error"))
    //         });
    //
    //         service.loadRoutes().subscribe((res: any) => {
    //             },
    //             (error) => {
    //                 expect(error).toEqual("Server error Error: some error");
    //             },
    //         );
    //     }));
    //
    // it('should find route by id if route is present', inject([RouteService], (service: RouteService) => {
    //     service.routes = [
    //         <Route>{uid: 1}
    //     ];
    //     service.getRoute(1).subscribe(res => {
    //         expect(res.uid).toBe(1);
    //     })
    // }));
    //
    // it('should return empty Observable if route is not present', inject([RouteService], (service: RouteService) => {
    //     service.routes = [
    //         <Route>{uid: 2}
    //     ];
    //     service.getRoute(1).subscribe(res => {
    //         expect(res).toBe(null)
    //     })
    // }));
});