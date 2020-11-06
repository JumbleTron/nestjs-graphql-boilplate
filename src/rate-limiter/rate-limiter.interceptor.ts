import { CallHandler, ExecutionContext, HttpException, HttpStatus, Inject, NestInterceptor } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { Reflector } from "@nestjs/core/services/reflector.service";
import { RateLimiterOptions } from './rate-limiter.options';

@Injectable()
export class RateLimiterInterceptor implements NestInterceptor {

    constructor(
        @Inject('RATE_LIMITER_OPTIONS') private options: RateLimiterOptions,
        @Inject('Reflector') private readonly reflector: Reflector
    ) {}
    

    async intercept(context: ExecutionContext, next: CallHandler): Promise<any> 
    {
        const request = context.getArgByIndex(2).req
        //const response = context.getArgByIndex(2).req.res 
        const key = request.ip.replace(/^.*:/, '')
        //const query = request.body?.query;
        console.log(key);
        
        /*try {
            console.log(key);
            response.header('Retry-After', Math.ceil(rateLimiterResponse.msBeforeNext / 1000))
            response.header('X-RateLimit-Limit', points)
            response.header('X-Retry-Remaining', rateLimiterResponse.remainingPoints)
            response.header('X-Retry-Reset', new Date(Date.now() + rateLimiterResponse.msBeforeNext).toUTCString())
        } catch (rateLimiterResponse) {
            response.header('Retry-After', Math.ceil(rateLimiterResponse.msBeforeNext / 1000))
            throw new HttpException(this.options.errorMessage, HttpStatus.TOO_MANY_REQUESTS)
        }*/
        

        return next.handle()
    }
}