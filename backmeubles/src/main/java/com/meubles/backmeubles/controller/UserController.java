package com.meubles.backmeubles.controller;
import com.meubles.backmeubles.bdd.User;
import com.meubles.backmeubles.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
@AllArgsConstructor

public class UserController {

    private final UserService userService;

    @PostMapping("/create")
    public User create(@RequestBody User user) {
        return userService.creer(user);
    }
    @GetMapping("/read")
    public List<User> read() {
        return userService.lire();
    }
    @PutMapping("/update/{id}")
    public User update(@PathVariable Integer id, @RequestBody User user) {
        return userService.modifier(id, user);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        return userService.supprimer(id);
    }
}
