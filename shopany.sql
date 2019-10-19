-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 19, 2019 lúc 07:02 AM
-- Phiên bản máy phục vụ: 10.1.38-MariaDB
-- Phiên bản PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shopany`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `catalog`
--

CREATE TABLE `catalog` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `catalog`
--

INSERT INTO `catalog` (`id`, `name`, `slug`, `parent_id`, `sort_order`, `create_time`) VALUES
(0, 'Không xác định', 'khong-xac-dinh', 0, 0, '2019-10-18 15:05:44'),
(5, 'Máy uốn tóc', 'may-uon-toc', 0, 1, '2019-10-18 15:05:44'),
(6, 'Máy làm tóc', 'may-lam-toc', 0, 1, '2019-10-18 15:12:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `producer`
--

CREATE TABLE `producer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text,
  `slug` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `producer`
--

INSERT INTO `producer` (`id`, `name`, `content`, `slug`, `create_time`) VALUES
(0, 'Không xác định', NULL, 'khong-xac-dinh', '2019-10-18 15:05:44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `catalog_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `price` float NOT NULL,
  `discount` float NOT NULL,
  `view` int(11) NOT NULL,
  `producer_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `imageList` text NOT NULL,
  `slug` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `catalog_id`, `content`, `price`, `discount`, `view`, `producer_id`, `title`, `image`, `imageList`, `slug`, `create_time`) VALUES
(3, ' MÁY LÀM TÓC CHỈ TỪ #150k CHO SALON', 0, '<p>M&aacute;y L&agrave; Thẳng Bản Sứ Tokyo&nbsp;❤️&nbsp;Bản 5cm<br />\r\nGi&aacute; : 330k<br />\r\n- M&aacute;y l&agrave; bản sứ ceramic mượt , b&oacute;ng, bảo vệ t&oacute;c<br />\r\n- Mặt c&oacute; c&aacute;c lỗ để tho&aacute;t nhiệt<br />\r\n- Bảng hiện điện tử nhiệt l&ecirc;n đến 230 độ<br />\r\nBảo h&agrave;nh 1 đổi 1 trong 30 ng&agrave;y</p>\r\n', 150, 0, 0, 0, ' MÁY LÀM TÓC CHỈ TỪ #150k CHO SALON', 'maylamtoc150k1.jpg', '[\"maylamtoc150k.jpg\",\"maylamtoc150k2.jpg\",\"maylamtoc150k3.jpg\"]', 'may-lam-toc-chi-tu-150k-cho-salon', '2019-10-18 15:18:43'),
(7, 'Máy Dập Xù Tokyo', 0, '<p>- M&aacute;y dập bản th&eacute;p nhiệt nhanh<br />\r\n- Mặt c&oacute; c&aacute;c lỗ tho&aacute;t nhiệt<br />\r\n- Kh&ocirc;ng bị cắn đứt t&oacute;c ..<br />\r\n- Nhiệt từ 140-230 độ<br />\r\nBảo h&agrave;nh 1 đổi 1 trong 30 ng&agrave;y</p>\r\n', 260, 0, 0, 0, 'Máy Dập Xù Tokyo', 'maydapxutokyo1.jpg', '[\"maydapxutokyo11.jpg\",\"maydapxutokyo2.jpg\",\"maydapxutokyo3.jpg\"]', 'may-dap-xu-tokyo', '2019-10-19 09:24:20'),
(8, 'Máy Là Sứ 2 Mặt Tokyo', 0, '<p>- M&aacute;y l&agrave; bản sứ mượt , b&oacute;ng t&oacute;c , k bị r&iacute;t t&oacute;c<br />\r\n- M&aacute;y n&oacute;ng 2 mặt c&oacute; thể l&agrave; thẳng , l&agrave; cụp , xoăn lọn<br />\r\n- Nhiệt từ 140-220 độ<br />\r\nBảo h&agrave;nh 1 đổi 1 trong 30 ng&agrave;y</p>\r\n', 250, 0, 0, 0, 'Máy Là Sứ 2 Mặt Tokyo ❤️ Bản 2,5 cm', 'maylasutokyo25.jpg', '[\"maylasutokyo251.jpg\"]', 'may-la-su-2-mat-tokyo', '2019-10-19 10:04:43'),
(9, 'MÁY LÀM TÓC', 0, '<p>????????&nbsp;M&Aacute;Y L&Agrave;M T&Oacute;C CHỈ TỪ&nbsp;<a href=\"https://www.facebook.com/hashtag/150k?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARC8yo74gDdBMJrVhwqybwrtwJAb55n_hbzHnL7jqiJcug67XWJnwXtGVieLPXONdZzE5EcfTuoKIPCYGzONJ4fbzgXqNfxthNiLFt8hIrraMVctUTxxX98t2huzsRSU9A4bzxEg7iwFLnml58p31_zPy2l3KIy0ZrqcYRIpg_Eku_VURNMi9hOK3WuQkXFLMUgucxVfPDqh7ubu5B9RMjA2aqWiNDJi6xeRFI3A80miok1AlIuhZCkRynYJUCFQ04SKhM3T9dHUoqGFm-XLmvibMufCvhXOgv34AdvJWxXwlbkPebN5MrtWTys51ovAztCeCcuDXq63tTt2SHiLnzM&amp;__tn__=%2ANK-R\">#150k</a>&nbsp;CHO SALON ,</p>\r\n\r\n<p>MAKEUP, C&Aacute; NH&Acirc;N ...☘️☘️</p>\r\n\r\n<p>- Chỉ b&aacute;n h&agrave;ng HỊN kh&ocirc;ng b&aacute;n h&agrave;ng chợ</p>\r\n\r\n<p>- M&aacute;y qua chọn lọc , chất lượng tốt nhất</p>\r\n\r\n<p>- G&iacute;a cả b&igrave;nh d&acirc;n = 3 cốc tr&agrave; sữa của ae&nbsp;????????</p>\r\n\r\n<p>Bảo h&agrave;nh 1 đổi 1 trong 30 ng&agrave;y</p>\r\n', 150, 0, 0, 0, 'MÁY LÀM TÓC CHỈ TỪ #150k CHO SALON', 'maylamtoc.jpg', '[\"maylamtoc1.jpg\",\"maylamtoc11.jpg\",\"maylamtoc2.jpg\",\"maylamtoc3.jpg\",\"maylamtoc4.jpg\"]', 'may-lam-toc', '2019-10-19 10:07:01'),
(10, 'MÁY DUỖI TÓC', 0, '<p>????<a href=\"https://www.facebook.com/hashtag/m%C3%A1y_du%E1%BB%97i_t%C3%B3c?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARBI5Gdz0aNo-HMUlPn856Uue-2RWpn3POgL3b0B6XfVVDaoZxZto-AIhZgTulL-1MG7Z7Su91hLfyj1kTnwqZJ3ZXySSQoAYyRoJs7k85c16QZ--PugQaop7qVcPXdl3baYIqTT3LeWxytanIckImC4d-B7nuQ2z1gsK9JvA3YYZ2yK1bfAAAMPcjEygs8sI32rZ2o1O32KGr_SFI7lp9fNv59gw4TEnRMrGJy-QaO7U4hR2mMQNSA-Kwpp5Dn56QDfg502eV-iChD8ABEf_UCJ5PeBQ-HzRq-ZpfFwgwa-_E6nRpVONYILiRwjM6z6yh7nvgjJtsWTxf0eAs8c6z4&amp;__tn__=%2ANK-R\">#M&Aacute;Y_DUỖI_T&Oacute;C</a>&nbsp;????????&nbsp;ch&igrave;a kh&oacute;a vạn năng cho những c&ocirc; n&agrave;ng i&ecirc;u kiều, dịu d&agrave;ng</p>\r\n\r\n<p>????????C&aacute;c chị y&ecirc;u th&iacute;ch t&oacute;c su&ocirc;n mượt, dịu d&agrave;ng, trẻ trung</p>\r\n\r\n<p>V&agrave;o đ&acirc;y gặp em nh&eacute;&nbsp;????????????</p>\r\n\r\n<p>✅&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng</p>\r\n\r\n<p>✅&nbsp;Bản nhỏ, bản to, đủ mẫu m&atilde;</p>\r\n\r\n<p>✅&nbsp;M&agrave;u sắc sang chảnh</p>\r\n\r\n<p>✅Gi&aacute; cả iu thương</p>\r\n\r\n<p>✅&nbsp;Bảo h&agrave;nh 12 th&aacute;ng 1 đổi 1 trong 30 ng&agrave;y</p>\r\n', 200, 0, 0, 0, '#MÁY_DUỖI_TÓC ???????? chìa khóa vạn năng cho những cô nàng iêu kiều, dịu dàng', 'mayduoitoc.jpg', '[\"mayduoitoc1.jpg\",\"mayduoitoc11.jpg\",\"mayduoitoc2.jpg\"]', 'may-duoi-toc', '2019-10-19 10:08:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shopany`
--

CREATE TABLE `shopany` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `data` text NOT NULL,
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `create_time`) VALUES
(1, 'aaaaaaaaaaaaaaaa', '1', '0000-00-00 00:00:00'),
(2, 'aaaaaaaaaaaaaaaa', '1', '0000-00-00 00:00:00'),
(3, 'aaaaaaaaaaaaaaaa', '1', '0000-00-00 00:00:00'),
(4, 'aaaaaaaaaaaaaaaa', '1', '0000-00-00 00:00:00'),
(5, 'aaaaaaaaaaaaaaaa', '1', '0000-00-00 00:00:00'),
(6, 'aaaaaaaaaaaaaaaa', '1', '0000-00-00 00:00:00'),
(7, 'aaaaaaaaaaaaaaaa', '1', '2019-10-17 16:41:57'),
(8, 'aaaaaaaaaaaaaaaa', '1', '2019-10-17 17:13:06'),
(9, 'aaaaaaaaaaaaaaaa', '1', '2019-10-17 17:14:19');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `producer`
--
ALTER TABLE `producer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `shopany`
--
ALTER TABLE `shopany`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `producer`
--
ALTER TABLE `producer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `shopany`
--
ALTER TABLE `shopany`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
