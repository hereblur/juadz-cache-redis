"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useRedisAdaptor(redis) {
    return {
        get: async (k) => {
            const plain = await redis.get(k);
            if (plain) {
                return JSON.parse(plain);
            }
            return null;
        },
        put: async (k, data, ageSeconds) => {
            await redis.set(k, JSON.stringify(data), {
                EX: ageSeconds,
            });
        },
        delete: async (k) => {
            await redis.del(k);
        },
    };
}
exports.default = useRedisAdaptor;
//# sourceMappingURL=index.js.map