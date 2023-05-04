package com.oreuda.api.domain.entity.readme;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Entity
@Getter
@Builder
@AllArgsConstructor
public class Boj {

	// 기본키
	@Id
	@GeneratedValue
	@Column(name = "boj_id")
	private Long id;

	// 백준 아이디
	@NotNull
	@Column(name = "boj_value", length = 36)
	private String value;

	// 테마
	@NotNull
	@Column(name = "boj_theme")
	private String theme;

	public Boj() {
	}

}