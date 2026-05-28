package org.graymatter.proto.leo.backend;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/urls")
@CrossOrigin(origins = "*") // Autoriser le frontend (pour le dev)
public class UrlController {

    private final UrlRepository repository;

    public UrlController(UrlRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<UrlEntity> getAllUrls() {
        return repository.findAll();
    }

    @PostMapping
    public UrlEntity createUrl(@Valid @RequestBody UrlEntity url) {
        return repository.save(url);
    }
}
