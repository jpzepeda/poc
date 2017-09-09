package com.anime.services;

import com.anime.entities.User;

public interface UserService {

	void save(User user);

	User findByUsername(String username);

}
