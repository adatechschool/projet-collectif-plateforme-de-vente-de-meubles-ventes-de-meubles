-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 12, 2024 at 02:18 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projet_meuble`
--

--
-- Dumping data for table `meubles`
--

INSERT INTO `meubles` (`id`, `couleurs`, `description`, `dimension`, `matieres`, `nom`, `prix`, `type`, `stock`, `user_id`) VALUES
(1, 'noir', 'Presque neuf.', '200x100x80', 'Contreplaqué', 'Super Canapé', 299, 'canape', 0, 1),
(2, 'pourpre', 'Pour MG.', '80x80x90', 'Formica', 'Buffeterie', 149, 'buffet', 0, 1),
(3, 'rouge', 'Table de salon.', '120x60x75', 'MDF', 'Table basse', 99, 'table', 0, 1),
(4, 'orange', 'Ne tient pas seul, mais ça passe.', '45x50x80', 'Bois_de_placage', 'Chaise haute', 49, 'chaise', 0, 2),
(5, 'jaune', 'Lit pour poupée par Chrichri diodior.', '160x200', 'Bois_recyclé', 'Lit en papier crépon', 599, 'lit', 0, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
