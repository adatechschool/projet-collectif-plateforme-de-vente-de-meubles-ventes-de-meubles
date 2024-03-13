package com.meubles.backmeubles.controller;
import com.meubles.backmeubles.bdd.User;
import com.meubles.backmeubles.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @PostMapping("/create")
    public User create(@RequestBody User user) {
        return userService.creer(user);
    }

    @PostMapping("/read")
    public List<User> read(@RequestBody(required = false) String sortParam) {
        List<User> users = userService.lire();
        if (sortParam != null && sortParam.equals("nomTriAlphabetique")) {
            users.sort(Comparator.comparing(User::getNom));
        }
        return users;
    }

    @GetMapping("/list")
    public List<User> list(@RequestParam(required = false) String sortParam) {
        List<User> users = userService.lire();
        if (sortParam != null && sortParam.equals("nomTriAlphabetique")) {
            users.sort(Comparator.comparing(User::getNom));
        }
        return users;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getMdp();

        // Vérifiez si l'utilisateur correspond aux informations de connexion fournies.
        Optional<User> authenticatedUser = userService.findByEmailAndPassword(email, password);

        // Si un utilisateur correspond, renvoyez cet utilisateur, sinon renvoyez une réponse NotFound.
        return authenticatedUser.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
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
