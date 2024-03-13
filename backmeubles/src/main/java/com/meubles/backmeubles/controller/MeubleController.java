package com.meubles.backmeubles.controller;
import com.meubles.backmeubles.bdd.Couleurs;
import com.meubles.backmeubles.bdd.Matieres;
import com.meubles.backmeubles.bdd.Meuble;
import com.meubles.backmeubles.bdd.Types;
import com.meubles.backmeubles.service.MeubleService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.Comparator;
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
    public List<Meuble> read(@RequestParam(name = "prixTri", required = false) String sortParam,
                             @RequestParam(name = "direction", required = false) String direction) {
        List<Meuble> meubles = meubleService.lire();
        if (sortParam != null && sortParam.equals("prixTri")) {
            if (direction != null) {
                if (direction.equals("croissant")) {
                    meubles.sort(Comparator.comparingInt(Meuble::getPrix));
                } else if (direction.equals("decroissant")) {
                    meubles.sort(Comparator.comparingInt(Meuble::getPrix).reversed());
                }
            }
        }
        return meubles;
    }

    @GetMapping("/types")
    public Types[] getAllTypes() {
        return Types.values();
    }

    @GetMapping("/matieres")
    public Matieres[] getAllMatieres() {
        return Matieres.values();
    }

    @GetMapping("/couleurs")
    public Couleurs[] getAllCouleurs() {
        return Couleurs.values();
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
