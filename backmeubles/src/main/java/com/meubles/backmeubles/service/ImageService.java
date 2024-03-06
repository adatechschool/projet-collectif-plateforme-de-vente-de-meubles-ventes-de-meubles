package com.meubles.backmeubles.service;

import com.meubles.backmeubles.Util.ImageUtil;
import com.meubles.backmeubles.bdd.Image;
import com.meubles.backmeubles.repositoryBdd.RepositoryImage;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.Optional;


@Service
public class ImageService {

    @Autowired
    private RepositoryImage repositoryImage;

    public String uploadImage(MultipartFile file) throws IOException {

        repositoryImage.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(ImageUtil.compressImage(file.getBytes())).build());

        return "Image uploaded successfully: " +
                file.getOriginalFilename();

    }

    @Transactional
    public Image getInfoByImageByName(String name) {
        Optional<Image> dbImage = repositoryImage.findByName(name);

        return Image.builder()
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .image(ImageUtil.decompressImage(dbImage.get().getImage())).build();

    }

    @Transactional
    public byte[] getImage(String name) {
        Optional<Image> dbImage = repositoryImage.findByName(name);
        byte[] image = ImageUtil.decompressImage(dbImage.get().getImage());
        return image;
    }


}