package com.meubles.backmeubles.controller;
import com.meubles.backmeubles.bdd.Meuble;
import com.meubles.backmeubles.service.MeubleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/meubles")
@RequiredArgsConstructor
public class MeubleController {

    private final MeubleService meubleService;

    @PostMapping("/create")
    public Meuble create(@RequestBody Meuble meuble) {
        return meubleService.creer(meuble);
    }
    @GetMapping("/read")
    public List<Meuble> read() {
        return meubleService.lire();
    }
    @PutMapping("/update/{id}")
    public Meuble update(@PathVariable Integer id, @RequestBody Meuble meuble) {
        return meubleService.modifier(id, meuble);
    }

    @DeleteMapping("/delete/{id}")

    public String delete(@PathVariable Integer id) {
        return meubleService.supprimer(id);
    }
}
