import type { RedisClientType } from 'redis';
import { ICacheAdaptor } from '@juadz/core';
export default function useRedisAdaptor(redis: RedisClientType): ICacheAdaptor;
