export interface RateLimiterOptions {
	keyPrefix?: string
	points?: number
	pointsConsumed?: number
	duration?: number
	blockDuration?: number
	whiteList?: string[]
	blackList?: string[]
	insuranceLimiter?: any
	errorMessage?: string
};

export const defaultRateLimiterOptions: RateLimiterOptions = {
	keyPrefix: 'global',
	points: 4,
	pointsConsumed: 1,
	duration: 1,
	blockDuration: 0,
	whiteList: [],
	blackList: [],
	insuranceLimiter: undefined,
	errorMessage: 'Rate limit exceeded'
}