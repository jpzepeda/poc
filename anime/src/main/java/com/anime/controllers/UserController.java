package com.anime.controllers;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.anime.entities.User;
import com.anime.services.SecurityService;
import com.anime.services.UserService;


@RestController
public class UserController {
	
    @GetMapping("/hello")
    public String hello() {
        return "/hello";
    }

    @GetMapping("/home")
    public String home() {
        return "/home";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/login")
    public User login(HttpServletRequest request) {
        return new User();
    }

}
