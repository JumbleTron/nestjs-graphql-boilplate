import { DynamicModule, Module } from '@nestjs/common'
import { defaultRateLimiterOptions, RateLimiterOptions } from './rate-limiter.options';

@Module({
	exports: ['RATE_LIMITER_OPTIONS'],
	providers: [{ provide: 'RATE_LIMITER_OPTIONS', useValue: defaultRateLimiterOptions }]
})
export class RateLimiterModule {
    static register(options: RateLimiterOptions = defaultRateLimiterOptions): DynamicModule {
		return {
			module: RateLimiterModule,
			providers: [{ provide: 'RATE_LIMITER_OPTIONS', useValue: options }]
		}
	}
}