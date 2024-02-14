-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13/02/2024 às 14:29
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistemavalidadeprodutos`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `expdate`
--

CREATE TABLE `expdate` (
  `id` int(100) NOT NULL,
  `src` varchar(200) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `numeroId` varchar(100) NOT NULL,
  `datacompra` date NOT NULL,
  `datavalidade` date NOT NULL,
  `quantidade` int(100) NOT NULL,
  `andarPrateleira` int(100) NOT NULL,
  `mapa` int(100) NOT NULL,
  `srcmapa` varchar(100) NOT NULL,
  `inputBell` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `expdate`
--

INSERT INTO `expdate` (`id`, `src`, `nome`, `numeroId`, `datacompra`, `datavalidade`, `quantidade`, `andarPrateleira`, `mapa`, `srcmapa`, `inputBell`) VALUES
(21, './src/uploads/aromatizante_1703875383.jpg', 'aromatizante', '13456789', '2023-12-29', '2024-02-29', 10, 5, 30, 'src/img/plantaBaixa.png', '0000-00-00'),
(22, './src/uploads/hidratante vasenol_1703875475.jpg', 'hidratante vasenol', '23456789', '2023-12-29', '2024-01-28', 18, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(23, './src/uploads/aromatizante_1703875383.jpg', 'aromatizante', '43456789', '2023-12-29', '2024-02-09', 77, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(24, './src/uploads/hidratante vasenol_1703875475.jpg', 'hidratante vasenol', '113456789', '2023-12-29', '2024-01-09', 6, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(25, './src/uploads/nivea men_1703875433.jpg', 'nivea men', '53456789', '2023-12-29', '2024-01-26', 0, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(26, './src/uploads/aromatizante_1703875383.jpg', 'aromatizante', '103456789', '2023-12-29', '2024-09-29', 9, 5, 70, 'src/img/plantaBaixa.png', '0000-00-00'),
(27, './src/uploads/hidratante vasenol_1703875475.jpg', 'hidratante vasenol', '73456789', '2024-01-03', '2024-02-22', 5, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(28, './src/uploads/nivea men_1703875433.jpg', 'nivea men', '93456789', '2024-01-03', '2024-06-27', 3, 6, 50, 'src/img/plantaBaixa.png', '2024-01-05'),
(29, 'src/img/favico.png', 'ss', '4234', '2024-01-03', '2024-01-24', 1, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(30, 'src/img/favico.png', 'fasdfasdf', '34534534', '2024-01-17', '2024-01-17', 0, 1, 50, 'src/img/plantaBaixa.png', '2000-03-14'),
(31, './src/uploads/nivea men_1703875433.jpg', 'nivea men', '6464646464', '2024-01-03', '2024-03-03', 1, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(32, 'src/img/favico.png', 'teste', '345345345', '2024-01-03', '2024-01-30', 1, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(33, 'src/img/favico.png', '123', '123', '2024-01-03', '2024-01-25', 1, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(34, 'src/img/favico.png', '345', '345', '2024-01-03', '2024-01-26', 0, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(35, 'src/img/favico.png', 'casa', '234234', '2024-01-03', '2024-02-01', 12, 1, 50, 'src/img/plantaBaixa.png', '2024-01-05'),
(36, 'src/img/favico.png', '123', '123123', '2024-01-03', '2024-01-10', 1, 1, 50, 'src/img/plantaBaixa.png', '0000-00-00'),
(38, 'src/img/favico.png', 'aaaaaa', '123123', '2024-01-03', '2024-01-11', 1, 5, 51, 'src/img/mapasVersoes/14.png', '2024-01-03'),
(39, './src/uploads/nivea men_1703875433.jpg', 'nivea men', '1000139', '2024-01-05', '2024-03-29', 10, 6, 42, 'src/img/mapasVersoes/16.png', '2024-02-01'),
(40, './src/uploads/aromatizante_1703875383.jpg', 'aromatizante', '1000109', '2024-01-05', '2024-01-13', 0, 6, 36, 'src/img/mapasVersoes/14.png', '2024-01-08'),
(41, './src/uploads/hidratante vasenol_1703875475.jpg', 'hidratante vasenol', '1000145', '2024-01-05', '2024-01-12', 0, 10, 34, 'src/img/mapasVersoes/13.png', '2024-01-05'),
(43, './src/uploads/nivea men_1703875433.jpg', 'nivea men', '5812345678', '2024-01-08', '2024-05-09', 1, 3, 42, 'src/img/mapasVersoes/16.png', '2024-01-08'),
(44, './src/uploads/hidratante vasenol_1703875475.jpg', 'hidratante vasenol', '1512345678', '2024-01-08', '2024-12-18', 1, 1, 94, 'src/img/mapasVersoes/36.png', '2024-01-22'),
(45, './src/uploads/aromatizante_1703875383.jpg', 'aromatizante', '626256245626262', '2024-02-13', '2024-02-13', 1, 1, 0, 'src/img/mapasVersoes/0.png', '0000-00-00'),
(46, './src/uploads/hidratante vasenol_1703875475.jpg', 'hidratante vasenol', '343478', '2024-02-13', '2024-02-13', 1, 1, 0, 'src/img/mapasVersoes/0.png', '0000-00-00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `img` varchar(200) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `numeroId` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`id`, `img`, `nome`, `numeroId`) VALUES
(88, './src/uploads/aromatizante_1703875383.jpg', 'aromatizante', '7898129331326'),
(89, './src/uploads/nivea men_1703875433.jpg', 'nivea men', '42355465'),
(90, './src/uploads/hidratante vasenol_1703875475.jpg', 'hidratante vasenol', '7891150028418'),
(94, './src/uploads/vasenol_1704716750.jpg', 'vasenol', '7891150028418');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `expdate`
--
ALTER TABLE `expdate`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `expdate`
--
ALTER TABLE `expdate`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
