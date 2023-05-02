package com.oreuda.api.repository;

import java.util.List;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import com.oreuda.api.domain.entity.YearlyCommit;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class YearlyCommitRepository {

	private final RedisTemplate redisTemplate;

	public void set(String userId, List<YearlyCommit> value) {
		redisTemplate.opsForList().rightPush(getKey(userId), value);
	}

	private String getKey(String id) {
		return "yearly_commit_" + id;
	}
}
