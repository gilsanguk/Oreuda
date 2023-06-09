package com.oreuda.oreuda_auth.common.model;

import lombok.*;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Token {
    private String accessToken;
    private String refreshToken;
}
