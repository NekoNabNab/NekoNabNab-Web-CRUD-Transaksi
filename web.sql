-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Jan 2023 pada 04.51
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `adminNama` varchar(255) NOT NULL,
  `adminEmail` varchar(255) NOT NULL,
  `adminPassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `adminNama`, `adminEmail`, `adminPassword`) VALUES
(2, 'admin', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `buyer`
--

CREATE TABLE `buyer` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `buyer`
--

INSERT INTO `buyer` (`id`, `nama`, `email`, `password`, `status`) VALUES
(49, 'Karelvvv', 'carolina@gmail.com', '123', 'aktif'),
(51, 'Pandu', 'pandu@gmail.com', '123', 'aktif'),
(52, 'p', 'p', 'p', 'aktif'),
(55, 'nabil', 'nabil@bil', '123', 'aktif'),
(56, 'ratih', 'ratih@gmail.com', '123', 'aktif'),
(57, 'rozann', 'rozan@gmail.com', '123', 'aktif'),
(61, 'Rojan', 'rojan@gmail.com', '12345', 'aktif'),
(64, 'el', 'el@com', 'el1', ''),
(65, 'el', 'el@com', '123', ''),
(66, 'a', 'a@gmail.com', 'a', ''),
(67, 'Nabila', 'Rojan@gmail.com', '12345', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL COMMENT 'Primary Key',
  `create_time` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  `name` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `qty` int(10) UNSIGNED DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `items`
--

INSERT INTO `items` (`id`, `create_time`, `name`, `harga`, `gambar`, `status`, `qty`) VALUES
(21, '2022-11-16 23:25:04', 'Animal Illustration', 50000, 'Animal_Illustration.png', 'ready', 96),
(22, '2022-11-16 23:37:53', 'Cute Illustration ', 25000, 'product_5.jpg', 'ready', 138),
(23, '2022-11-17 06:58:30', 'Stiker', 25000, 'Illustrasi.png', 'ready', 72);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pembukuan`
--

CREATE TABLE `pembukuan` (
  `id` int(11) NOT NULL COMMENT 'Primary Key',
  `create_time` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  `type` varchar(255) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `pembeli` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pembukuan`
--

INSERT INTO `pembukuan` (`id`, `create_time`, `type`, `item_id`, `amount`, `pembeli`) VALUES
(44, '2022-11-16 23:25:20', 'masuk', 21, 50, 'Rojan'),
(45, '2022-11-16 23:36:16', 'dibeli', 21, 5, 'Rojani'),
(46, '2022-11-16 23:38:20', 'masuk', 21, 100, 'Rojann'),
(47, '2022-11-16 23:38:40', 'masuk', 22, 155, 'Rozann'),
(48, '2022-11-16 23:39:18', 'ditarik', 21, 45, 'Rojani'),
(49, '2022-11-16 23:39:47', 'dibeli', 22, 5, 'Bilaa'),
(50, '2022-11-17 06:55:31', 'dibeli', 21, 2, 'NabilaRojan'),
(51, '2022-11-17 06:58:49', 'masuk', 23, 55, 'Rojani'),
(52, '2022-11-17 07:51:50', 'ditarik', 23, -9, 'rojan'),
(53, '2022-11-17 07:56:42', 'dibeli', 23, -8, '899'),
(54, '2022-11-17 08:09:32', 'dibeli', 21, 2, 'zzz'),
(55, '2022-11-17 08:09:47', 'dibeli', 22, 12, 'zzz');

-- --------------------------------------------------------

--
-- Struktur dari tabel `subs`
--

CREATE TABLE `subs` (
  `id` int(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pembukuan`
--
ALTER TABLE `pembukuan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `subs`
--
ALTER TABLE `subs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `buyer`
--
ALTER TABLE `buyer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT untuk tabel `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `pembukuan`
--
ALTER TABLE `pembukuan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `subs`
--
ALTER TABLE `subs`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
