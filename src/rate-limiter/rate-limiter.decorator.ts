import { SetMetadata } from '@nestjs/common'
import { RateLimiterOptions } from './rate-limiter.options';

export const RateLimit = (options: RateLimiterOptions): MethodDecorator => {
    return SetMetadata('rateLimit', options)
}