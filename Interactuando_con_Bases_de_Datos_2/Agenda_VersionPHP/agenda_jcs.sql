-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2020 a las 21:57:21
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda_jcs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `id` int(11) NOT NULL,
  `asunto` varchar(250) DEFAULT NULL,
  `fecha_desde` date DEFAULT NULL,
  `fecha_hasta` date DEFAULT NULL,
  `hora_desde` time DEFAULT NULL,
  `hora_hasta` time DEFAULT NULL,
  `todo_dia` varchar(5) DEFAULT NULL,
  `usaurio_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`id`, `asunto`, `fecha_desde`, `fecha_hasta`, `hora_desde`, `hora_hasta`, `todo_dia`, `usaurio_id`) VALUES
(4, 'CumpleaÃ±os', '2020-03-23', '0000-00-00', '00:00:00', '00:00:00', 'true', 5),
(5, 'Curso', '2020-03-12', '0000-00-00', '16:00:00', '18:00:00', 'false', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usaurio`
--

CREATE TABLE `usaurio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `clave` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usaurio`
--

INSERT INTO `usaurio` (`id`, `nombre`, `email`, `clave`) VALUES
(5, 'Jonathan Canales', 'jonathan.canales@vab.cl', '$2y$10$lNKJmtC3cWwojzqkP2ylI.isK4VkKHzszn9Zs2E9kvZu5daKyBcx6'),
(6, 'Juan Soto', 'juan.soto@vab.cl', '$2y$10$cC.pC./8x/uHsfH8c74UHuaPeKzJ67EQoYA2zWFzN7J2xx.UYhH5y'),
(7, 'Clauda Campos', 'claudia.campos@vab.cl', '$2y$10$B00h6hrD6NsLc2weazmo2.qJ1ohuHtvrBqQG61hyrrPgWqp2kTc0q');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_evento_usaurio_idx` (`usaurio_id`);

--
-- Indices de la tabla `usaurio`
--
ALTER TABLE `usaurio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usaurio`
--
ALTER TABLE `usaurio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`usaurio_id`) REFERENCES `usaurio` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
