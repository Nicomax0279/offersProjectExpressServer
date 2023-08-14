-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: offerprojectdb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `career`
--

DROP TABLE IF EXISTS `career`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `career` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career`
--

LOCK TABLES `career` WRITE;
/*!40000 ALTER TABLE `career` DISABLE KEYS */;
INSERT INTO `career` VALUES (1,'Analista de sistemas',NULL),(2,'Emfermeria',NULL),(3,'Radiologia',NULL),(4,'Seguridad y Higiene',NULL),(5,'Administracion de empresas',NULL);
/*!40000 ALTER TABLE `career` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `logo` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'77','$2b$05$2lx/Trf08fJULX1SwV2t0ewFZ1fykCkDHxrb30ZXKSIrtQeQpwJfy','theBest','test company',1,'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/40055/image-upload/Screenshot_2022_02_16_at_9_30_14_am_copy.jpg','2023-07-20 18:09:05','2023-07-20 18:22:05');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inscription`
--

DROP TABLE IF EXISTS `inscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `offerID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_user_offer` (`offerID`,`userID`),
  KEY `fk_ins_user` (`userID`),
  CONSTRAINT `fk_ins_offer` FOREIGN KEY (`offerID`) REFERENCES `offer` (`id`),
  CONSTRAINT `fk_ins_user` FOREIGN KEY (`userID`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscription`
--

LOCK TABLES `inscription` WRITE;
/*!40000 ALTER TABLE `inscription` DISABLE KEYS */;
INSERT INTO `inscription` VALUES (37,6,8,1,'2023-07-22 16:34:05','2023-07-22 16:34:05'),(38,7,8,1,'2023-07-22 16:34:07','2023-07-22 16:34:07'),(45,1,8,1,'2023-07-22 16:36:38','2023-07-22 16:36:38'),(46,1,9,1,'2023-07-23 01:26:22','2023-07-23 01:26:22'),(48,2,8,1,'2023-07-23 19:58:46','2023-07-23 19:58:46'),(49,10,8,1,'2023-07-23 20:39:39','2023-07-23 20:39:39'),(50,5,8,1,'2023-08-05 22:33:55','2023-08-05 22:33:55');
/*!40000 ALTER TABLE `inscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modality`
--

DROP TABLE IF EXISTS `modality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modality` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `description` (`description`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modality`
--

LOCK TABLES `modality` WRITE;
/*!40000 ALTER TABLE `modality` DISABLE KEYS */;
INSERT INTO `modality` VALUES (2,'hibrido'),(1,'presencial'),(3,'remoto');
/*!40000 ALTER TABLE `modality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyID` int(11) DEFAULT NULL,
  `title` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `career` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `shortText` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `text` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `modality` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `company_fk` (`companyID`),
  KEY `modality_check` (`modality`),
  KEY `career_check` (`career`),
  CONSTRAINT `career_check` FOREIGN KEY (`career`) REFERENCES `career` (`name`),
  CONSTRAINT `company_fk` FOREIGN KEY (`companyID`) REFERENCES `company` (`id`),
  CONSTRAINT `modality_check` FOREIGN KEY (`modality`) REFERENCES `modality` (`description`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` VALUES (1,1,'busco gente','Analista de sistemas','r','rr','remoto',0,'2023-07-25 01:44:44','2023-07-20 18:20:02'),(2,1,'analista','Analista de sistemas','Se busca analista de sistemas. Responsable de analizar, diseñar y desarrollar soluciones informáticas. Conocimientos en programación, bases de datos y gestión de proyectos.','Estimado reclutador, me gustaría postularme para el puesto de analista de sistemas. Cuento con sólidos conocimientos en análisis, diseño y desarrollo de soluciones informáticas. Poseo habilidades en programación, bases de datos y gestión de proyectos. Estoy entusiasmado por aplicar mis habilidades técnicas para contribuir al éxito de su empresa y trabajar en un entorno dinámico y colaborativo. Espero tener la oportunidad de discutir cómo mi experiencia puede complementar sus necesidades. Agradez','hibrido',0,'2023-07-25 01:45:07','2023-07-20 19:51:10'),(3,1,'busco analista fullRemoto','Analista de sistemas','Se solicita analista de sistemas. Experto en resolución de problemas, desarrollo de software y trabajo en equipo. Oportunidad de crecimiento profesional.','Hola! Me interesa la vacante de analista de sistemas. Tengo experiencia en la resolución eficiente de problemas, desarrollo de software y colaboración en equipos multidisciplinarios. Busco crecer profesionalmente y aplicar mis habilidades para aportar valor a su empresa. Estoy emocionado por la posibilidad de ser parte de su equipo y contribuir con mi pasión por la tecnología y el aprendizaje continuo. Gracias por considerar mi candidatura.','remoto',0,'2023-07-25 01:55:43','2023-07-20 19:55:05'),(4,1,'busco analista fullRemoto','Analista de sistemas','Se solicita analista de sistemas. Experto en resolución de problemas, desarrollo de software y trabajo en equipo. Oportunidad de crecimiento profesional.','Hola! Me interesa la vacante de analista de sistemas. Tengo experiencia en la resolución eficiente de problemas, desarrollo de software y colaboración en equipos multidisciplinarios. Busco crecer profesionalmente y aplicar mis habilidades para aportar valor a su empresa. Estoy emocionado por la posibilidad de ser parte de su equipo y contribuir con mi pasión por la tecnología y el aprendizaje continuo. Gracias por considerar mi candidatura.','remoto',0,'2023-07-25 01:44:03','2023-07-20 19:55:09'),(5,1,'busco analista fullRemoto','Analista de sistemas','Se solicita analista de sistemas. Experto en resolución de problemas, desarrollo de software y trabajo en equipo. Oportunidad de crecimiento profesional.','Hola! Me interesa la vacante de analista de sistemas. Tengo experiencia en la resolución eficiente de problemas, desarrollo de software y colaboración en equipos multidisciplinarios. Busco crecer profesionalmente y aplicar mis habilidades para aportar valor a su empresa. Estoy emocionado por la posibilidad de ser parte de su equipo y contribuir con mi pasión por la tecnología y el aprendizaje continuo. Gracias por considerar mi candidatura.','remoto',1,'2023-07-20 19:55:22','2023-07-20 19:55:22'),(6,1,'busco analista fullRemoto','Analista de sistemas','Se solicita analista de sistemas. Experto en resolución de problemas, desarrollo de software y trabajo en equipo. Oportunidad de crecimiento profesional.','Hola! Me interesa la vacante de analista de sistemas. Tengo experiencia en la resolución eficiente de problemas, desarrollo de software y colaboración en equipos multidisciplinarios. Busco crecer profesionalmente y aplicar mis habilidades para aportar valor a su empresa. Estoy emocionado por la posibilidad de ser parte de su equipo y contribuir con mi pasión por la tecnología y el aprendizaje continuo. Gracias por considerar mi candidatura.','remoto',0,'2023-07-25 01:56:48','2023-07-20 19:55:25'),(7,1,'aaaaaaaaaa','Emfermeria','aaaaaaaaaaaaa','aaaaaaaaaaaa','presencial',1,'2023-07-22 16:30:02','2023-07-22 16:30:02'),(8,1,'aa','Administracion de empresas','aa','aa','hibrido',1,'2023-07-23 19:37:59','2023-07-23 19:37:59'),(9,1,'niuna','Analista de sistemas','s','s','presencial',1,'2023-07-23 20:30:28','2023-07-23 20:30:28'),(10,1,'dsdsa','Analista de sistemas','sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd','sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd','presencial',1,'2023-07-23 20:39:02','2023-07-23 20:39:02');
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `names` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `surnames` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `career` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `img` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `user_career_check` (`career`),
  CONSTRAINT `user_career_check` FOREIGN KEY (`career`) REFERENCES `career` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'22@itbeltran.com.ar','$2b$05$8KJYE6cSOGBoCxzUBN1ZXujnM1sMy9saqwt9R9SPlOy','juan carlos','perez','Analista de sistemas','','2000-03-10',NULL,1,'2023-07-20 17:12:26','2023-07-20 17:12:26'),(4,'11@itbeltran.com.ar','$2b$05$9OilKTlMgwBW0X/3D7drkeiwYtEw/6domEONm13lbbz','11','11','Analista de sistemas','','2023-07-06',NULL,1,'2023-07-20 17:23:35','2023-07-20 17:23:35'),(5,'33@itbeltran.com.ar','$2b$05$jwwXYzoYsQrIwbhaIv/kGul73rtvysTN3dfGLt0XFlZ','33','33','Analista de sistemas','','2023-07-13',NULL,1,'2023-07-20 17:29:46','2023-07-20 17:29:46'),(6,'44@itbeltran.com.ar','44','44','44','Emfermeria','','2023-07-27',NULL,1,'2023-07-20 17:30:14','2023-07-20 17:30:14'),(7,'55@itbeltran.com.ar','$2b$05$6qo44XLUoc1wonRSuDHkiuaCCLhM9hnT18X34qXOYNb','55','55','Administracion de empresas','','2023-07-18',NULL,1,'2023-07-20 17:39:29','2023-07-20 17:39:29'),(8,'77@itbeltran.com.ar','$2b$05$2lx/Trf08fJULX1SwV2t0ewFZ1fykCkDHxrb30ZXKSIrtQeQpwJfy','juan','perez','Analista de sistemas','','2002-02-07',NULL,1,'2023-07-23 20:39:29','2023-07-21 08:41:32'),(9,'88@itbeltran.com.ar','$2b$05$.nzjwFqqIMh64BetjbM2VuuDkyjxlJg7kbKApearggQ.DQLlFtGsO','88','88','Radiologia','','2023-07-20',NULL,1,'2023-07-23 01:26:04','2023-07-23 01:26:04');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'offerprojectdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-14 15:52:46
