-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  mar. 05 mars 2024 à 15:49
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projet_meuble`
--

--
-- Déchargement des données de la table `meubles`
--

INSERT INTO `meubles` (`id`, `couleurs`, `description`, `dimension`, `matieres`, `nom`, `prix`, `type`) VALUES
(1, 'noir', 'Presque neuf.', '200x100x80', 'Contreplaqué', 'Super Canapé', 299, 'canape'),
(2, 'pourpre', 'Pour MG.', '80x80x90', 'Formica', 'Buffeterie', 149, 'buffet'),
(3, 'rouge', 'Table de salon.', '120x60x75', 'MDF', 'Table basse', 99, 'table'),
(4, 'orange', 'Ne tient pas seul, mais ça passe.', '45x50x80', 'Bois_de_placage', 'Chaise haute', 49, 'chaise'),
(5, 'jaune', 'Lit pour poupée par Chrichri diodior.', '160x200', 'Bois_recyclé', 'Lit en papier crépon', 599, 'lit');

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `admin`, `email`, `mdp`, `nom`) VALUES
(1, b'1', 'admin@admin.fr', 'admin', 'admin'),
(2, b'0', 'coco@coco.fr', 'coco', 'Coco'),
(3, b'0', 'fourmi@fourmi.fr', 'fourmi', 'Fourmi'),
(4, b'0', 'jaune@oeuf.fr', 'vive les oeufs', 'Jaune d\'oeuf'),
(5, b'0', 'fromage@montdor.fr', 'raclette', 'Fromage');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
