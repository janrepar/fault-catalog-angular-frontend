import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export function AuthInterceptor(
    req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    console.log("Interceptor executed")
    const token = sessionStorage.getItem("authToken");
    if (token) {
        req = req.clone({
            // withCredentials: true,
            setHeaders: {
                Authorization: `Bearer ${token}`
            },
        });
    }


    console.log('Modified Request:', req);
    return next(req);
}




