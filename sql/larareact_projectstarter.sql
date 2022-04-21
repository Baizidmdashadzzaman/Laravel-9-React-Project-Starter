-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 21, 2022 at 06:19 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `larareact_projectstarter`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_bannner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_description` longtext COLLATE utf8mb4_unicode_ci,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_name_bn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_description_bn` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `category_slug`, `category_code`, `category_logo`, `category_bannner`, `category_description`, `status`, `created_at`, `updated_at`, `category_name_bn`, `category_description_bn`) VALUES
(1, 'Category 2', 'category-2', '34401875741', '1642566761v1img7.jpg', '1642572404v2img8.jpg', 'asdasdsad', 1, '2021-12-30 03:15:47', '2022-01-19 06:06:44', NULL, NULL),
(2, 'Category 1', 'category-1', '31110994795', '1642566737v1img10.jpg', '1642570480v2blog_single.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 1, '2022-01-10 05:54:53', '2022-01-19 05:37:49', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contactuses`
--

CREATE TABLE `contactuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contactus_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contactus_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contactus_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contactus_subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contactus_message` longtext COLLATE utf8mb4_unicode_ci,
  `notified` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contactuses`
--

INSERT INTO `contactuses` (`id`, `contactus_name`, `contactus_email`, `contactus_phone`, `contactus_subject`, `contactus_message`, `notified`, `created_at`, `updated_at`) VALUES
(1, 'sdfsdf', 'a@s.fgh', '3243', 'asdsad', 'asdasd', 1, '2022-01-06 22:31:09', '2022-01-07 00:10:49'),
(2, 'asdasd', 'a@s.fgh', 'asd', 'asd', 'asdsd', 0, '2022-01-17 15:00:32', '2022-01-17 15:00:32'),
(3, 'asdasd', 'asdd@asd.fdg', 'asd', 'asd', 'asdasasd', 0, '2022-01-17 15:06:21', '2022-01-17 15:06:21'),
(4, 'ASAD', 'asad@mail.com', '01676577631', 'Demo', 'Demo', 0, '2022-01-18 03:49:42', '2022-01-18 03:49:42'),
(5, 'sadasd', 'asad@mail.com', 'asd', 'asd', 'asd', 0, '2022-02-01 07:14:30', '2022-02-01 07:14:30'),
(6, 'asdsd', 'asad@mail.com', 'asd', 'asd', 'asd', 0, '2022-02-01 07:15:24', '2022-02-01 07:15:24');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2021_11_20_162331_create_settings_table', 3),
(7, '2021_12_29_100223_create_categories_table', 4),
(12, '2022_01_06_142559_create_contactuses_table', 8);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `site_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_sms_api` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_logo_first` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_logo_second` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_favicon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keyword` longtext COLLATE utf8mb4_unicode_ci,
  `meta_description` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `site_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_description` longtext COLLATE utf8mb4_unicode_ci,
  `site_map` longtext COLLATE utf8mb4_unicode_ci,
  `site_faq` longtext COLLATE utf8mb4_unicode_ci,
  `site_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_privacyandpolicy` longtext COLLATE utf8mb4_unicode_ci,
  `site_aboutus_banner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_faq_banner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_privacyandpolicy_banner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_app_android_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_app_ios_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_app_window_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_fb_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_twitter_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_linkdin_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_youtube_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_name_bn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_address_bn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_description_bn` longtext COLLATE utf8mb4_unicode_ci,
  `site_faq_bn` longtext COLLATE utf8mb4_unicode_ci,
  `site_privacyandpolicy_bn` longtext COLLATE utf8mb4_unicode_ci,
  `bkash_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bkash_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `site_name`, `site_email`, `site_sms_api`, `site_phone`, `site_logo_first`, `site_logo_second`, `site_favicon`, `meta_keyword`, `meta_description`, `created_at`, `updated_at`, `site_address`, `site_description`, `site_map`, `site_faq`, `site_url`, `site_privacyandpolicy`, `site_aboutus_banner`, `site_faq_banner`, `site_privacyandpolicy_banner`, `site_app_android_link`, `site_app_ios_link`, `site_app_window_link`, `site_fb_link`, `site_twitter_link`, `site_linkdin_link`, `site_youtube_link`, `site_name_bn`, `site_address_bn`, `site_description_bn`, `site_faq_bn`, `site_privacyandpolicy_bn`, `bkash_number`, `bkash_image`) VALUES
(1, 'Larareact', 'demo@mail.com', '123456789', '01676577631', '1650265213v11640932197v1612-6126558_react-logo-png-react-js-logo-svg-transparent.png', '1650265235v21640932145v3looo.png', '1650265213v31640932145v3looo.png', 'Demo', 'Demo', NULL, '2022-04-18 07:00:35', 'Bangladesh', 'Demo', 'Demo', 'Demo', 'http://127.0.0.1:8000/', 'Demo', '1650265223v41640932145v3looo.png', '1650265213v51640932145v3looo.png', '1650265213v61640932145v3looo.png', '#', '#', '#', '#', '#', '#', '#', NULL, NULL, NULL, NULL, NULL, '01676577631', '1650265213v61640932145v3looo.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `primeuser` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `permission` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permission_admin` tinyint(1) NOT NULL DEFAULT '0',
  `permission_listner` tinyint(1) NOT NULL DEFAULT '0',
  `permission_category` tinyint(1) NOT NULL DEFAULT '0',
  `permission_artist` tinyint(1) NOT NULL DEFAULT '0',
  `permission_album` tinyint(1) NOT NULL DEFAULT '0',
  `permission_songs` tinyint(1) NOT NULL DEFAULT '0',
  `permission_songscategory` tinyint(1) NOT NULL DEFAULT '0',
  `permission_songsartist` tinyint(1) NOT NULL DEFAULT '0',
  `permission_setting` tinyint(1) NOT NULL DEFAULT '0',
  `permission_slider` tinyint(1) NOT NULL DEFAULT '0',
  `permission_contactus` tinyint(1) NOT NULL DEFAULT '0',
  `permission_subscribers` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `phone`, `description`, `primeuser`, `status`, `permission`, `permission_admin`, `permission_listner`, `permission_category`, `permission_artist`, `permission_album`, `permission_songs`, `permission_songscategory`, `permission_songsartist`, `permission_setting`, `permission_slider`, `permission_contactus`, `permission_subscribers`) VALUES
(11, 'ASAD ZAMAN', 'admin@admin.com', NULL, '$2y$10$1fUtsAYPKcV9Io5NIH/2HOzslLv3iTpmmE94B10G1njn3HJWEpn9e', NULL, '2021-10-25 09:13:18', '2022-01-11 08:31:41', '01676577631', 'No description', 1, 1, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(14, 'Demo', 'demo@mail.com', NULL, '$2y$10$Ws24PYTv/dZteuswECZ1devjZKr8orEV1YEgMDW6XqPotYrYA7I7a', NULL, '2022-01-11 08:30:29', '2022-01-15 11:23:50', '01676577631', 'Demo', 0, 1, NULL, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactuses`
--
ALTER TABLE `contactuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contactuses`
--
ALTER TABLE `contactuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
