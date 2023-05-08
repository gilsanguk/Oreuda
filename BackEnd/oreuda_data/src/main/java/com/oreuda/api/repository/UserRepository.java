package com.oreuda.api.repository;

import java.util.Set;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserRepository {

	private final RedisTemplate redisTemplate;

	public String get(String type, String userId) {
		return redisTemplate.opsForValue().get(type + userId).toString();
	}

	public void add(String key, String value) {
		redisTemplate.opsForSet().add(getKey(key), value);
	}

	public boolean isMember(String userId, String repo) {
		return redisTemplate.opsForSet().isMember(getKey(userId), repo);
	}

	public Set<String> members(String userId) {
		return redisTemplate.opsForSet().members(getKey(userId));
	}

	public void remove(String key) {
		redisTemplate.delete(getKey(key));
	}

	private String getKey(String id) {
		return "user_repos_" + id;
	}
}