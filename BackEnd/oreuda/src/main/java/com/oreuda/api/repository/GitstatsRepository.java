package com.oreuda.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oreuda.api.domain.entity.readme.Gitstats;

public interface GitstatsRepository extends JpaRepository<Gitstats, Long> {

}
