package com.ujjwalgarg.mainserver.dto;

import com.ujjwalgarg.mainserver.entity.user.Role;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

/**
 * DTO for {@link com.ujjwalgarg.mainserver.entity.user.User}
 */
@Getter
@Setter
public class LoginResponse implements Serializable {

  private Long id;
  private String email;
  private Role role;
  private String accessToken;
  private String refreshToken;
}
