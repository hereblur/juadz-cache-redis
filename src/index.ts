import type {RedisClientType} from 'redis';
import {ICacheAdaptor} from '@juadz/core';

export default function useRedisAdaptor(redis: RedisClientType): ICacheAdaptor {
  return {
    get: async (k: string): Promise<unknown> => {
      const plain = await redis.get(k);
      if (plain) {
        return JSON.parse(plain);
      }
      return null;
    },
    put: async (
      k: string,
      data: unknown,
      ageSeconds: number
    ): Promise<void> => {
      await redis.set(k, JSON.stringify(data), {
        EX: ageSeconds,
      });
    },
    delete: async (k: string): Promise<void> => {
      await redis.del(k);
    },
  };
}