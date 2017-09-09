package com.anime.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anime.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
}
