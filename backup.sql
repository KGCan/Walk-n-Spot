-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: db_walk_n_spot
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `animal_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
INSERT INTO `animal` VALUES (1,'Bat','2022-01-21 04:25:36','2022-01-21 04:25:36'),(2,'Bear','2022-01-21 04:25:36','2022-01-21 04:25:36'),(3,'Beaver','2022-01-21 04:25:36','2022-01-21 04:25:36'),(4,'Blue Herring','2022-01-21 04:25:36','2022-01-21 04:25:36'),(5,'Bluejay','2022-01-21 04:25:36','2022-01-21 04:25:36'),(6,'Bobcat','2022-01-21 04:25:36','2022-01-21 04:25:36'),(7,'Cow','2022-01-21 04:25:36','2022-01-21 04:25:36'),(8,'Coyote','2022-01-21 04:25:36','2022-01-21 04:25:36'),(9,'Crane','2022-01-21 04:25:36','2022-01-21 04:25:36'),(10,'Deer','2022-01-21 04:25:36','2022-01-21 04:25:36'),(11,'Dog','2022-01-21 04:25:36','2022-01-21 04:25:36'),(12,'Donkey','2022-01-21 04:25:36','2022-01-21 04:25:36'),(13,'Emu','2022-01-21 04:25:36','2022-01-21 04:25:36'),(14,'Fish','2022-01-21 04:25:36','2022-01-21 04:25:36'),(15,'Frog','2022-01-21 04:25:36','2022-01-21 04:25:36'),(16,'Hawk','2022-01-21 04:25:36','2022-01-21 04:25:36'),(17,'Horse','2022-01-21 04:25:36','2022-01-21 04:25:36'),(18,'Lizard','2022-01-21 04:25:36','2022-01-21 04:25:36'),(19,'Llama','2022-01-21 04:25:36','2022-01-21 04:25:36'),(20,'Mountain Lion','2022-01-21 04:25:36','2022-01-21 04:25:36'),(21,'Opossum','2022-01-21 04:25:36','2022-01-21 04:25:36'),(22,'Pig','2022-01-21 04:25:36','2022-01-21 04:25:36'),(23,'Quail','2022-01-21 04:25:36','2022-01-21 04:25:36'),(24,'Raccoon','2022-01-21 04:25:36','2022-01-21 04:25:36'),(25,'Rat','2022-01-21 04:25:36','2022-01-21 04:25:36'),(26,'River Otter','2022-01-21 04:25:36','2022-01-21 04:25:36'),(27,'Skunk','2022-01-21 04:25:36','2022-01-21 04:25:36'),(28,'Snake','2022-01-21 04:25:36','2022-01-21 04:25:36'),(29,'Squirrel','2022-01-21 04:25:36','2022-01-21 04:25:36'),(30,'Turtle','2022-01-21 04:25:36','2022-01-21 04:25:36'),(31,'Woodpecker','2022-01-21 04:25:36','2022-01-21 04:25:36');
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trail`
--

DROP TABLE IF EXISTS `trail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trail_name` varchar(255) DEFAULT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lon` varchar(255) DEFAULT NULL,
  `trail_img` varchar(255) DEFAULT NULL,
  `animal_id` int DEFAULT NULL,
  `trail_info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `animal_id` (`animal_id`),
  CONSTRAINT `trail_ibfk_1` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trail`
--

LOCK TABLES `trail` WRITE;
/*!40000 ALTER TABLE `trail` DISABLE KEYS */;
INSERT INTO `trail` VALUES (1,'American River Parkway Trailhead','SACRAMENTO','38.6010','-121.5077','./assets/images/trail-1.jpg',1,'https://regionalparks.saccounty.net/Parks/Pages/AmericanRiverParkway.aspx'),(2,'Sacramento River Parkway','SACRAMENTO','38.5838','-121.5060','./assets/images/trail-2.jpg',1,'https://www.cityofsacramento.org/Public-Works/Engineering-Services/Projects/Current-Projects/Sacramento-River-Parkway'),(3,'Riverfront Promenade','SACRAMENTO','38.5770','-121.5086','./assets/images/trail-3.jpg',2,'https://www.cityofsacramento.org/Public-Works/Engineering-Services/Projects/Current-Projects/Sacramento-River-Parkway'),(4,'Creekside Park & Nature Area','SACRAMENTO','38.6140','-121.3938','./assets/images/trail-4.jpg',7,'https://www.fecrpd.com/creekside-nature-area'),(5,'Bannon Creek Park & Parkway','SACRAMENTO','38.6146','-121.5046','./assets/images/trail-5.jpg',1,'http://www.cityofsacramento.org/parksandrec/parks/park-directory/south-natomas/bannon-creek'),(6,'Natomas Oaks Park','SACRAMENTO','38.6052','-121.5171','./assets/images/trail-6.jpg',1,'http://www.cityofsacramento.org/Search-Results?q=Natomas%20Oaks%20Park'),(7,'Arcade Creek Park','SACRAMENTO','38.6564','-121.3350','./assets/images/trail-7.jpg',1,'http://www.cityofsacramento.org/ParksandRec/Parks/Park-Directory/Arden-Arcade'),(8,'Charlie-Jensen Park','SACRAMENTO','38.5048','-121.5060','./assets/images/trail-8.jpg',1,'http://www.cityofsacramento.org/ParksandRec/Parks/Park-Directory/South-Sacramento/Charlie-Jensen-Park'),(9,'Folsom Point State Park','FOLSOM','38.6990','-121.1273','./assets/images/trail-9.jpg',1,'https://www.folsom.ca.us/government/parks-recreation/parks-trails-and-open-space/all-parks'),(10,'Nimbus Flat State Recreation Area','FOLSOM','38.6357','-121.2165','./assets/images/trail-10.jpg',1,'https://www.folsom.ca.us/government/parks-recreation/parks-trails-and-open-space/all-parks'),(11,'Lake Clementine Trail','AUBURN','38.9163','-121.0354','./assets/images/trail-11.jpg',1,'https://www.visitplacer.com/lake-clementine-trail/'),(12,'Quarry Road Trail','AUBURN','38.9123','-121.0356','./assets/images/trail-12.jpg',1,'https://www.alltrails.com/trail/us/california/middle-fork-american-river-quarry-trail'),(13,'Auburn Trail Run','AUBURN','38.8896','-121.0689','./assets/images/trail-13.jpg',1,'https://www.trailrunproject.com/directory/8007186/greater-auburn'),(14,'Overlook Park','AUBURN','38.8891','-121.0689','./assets/images/trail-14.jpg',1,'http://www.auburnrec.com/parks_overlook.php'),(15,'Auburn Bike Park','AUBURN','38.8778','-121.0675','./assets/images/trail-15.jpg',1,'https://auburnbikepark.org/'),(16,'Bicentennial Park ','AUBURN','38.8951','-121.0765','./assets/images/trail-16.jpg',1,'http://www.auburnrec.com/parks_bicentennial.php');
/*!40000 ALTER TABLE `trail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trail_animal`
--

DROP TABLE IF EXISTS `trail_animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trail_animal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trail_id` int DEFAULT NULL,
  `animal_id` int DEFAULT NULL,
  `sighting` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `trail_animal_trail_id_animal_id_unique` (`trail_id`,`animal_id`),
  KEY `animal_id` (`animal_id`),
  CONSTRAINT `trail_animal_ibfk_1` FOREIGN KEY (`trail_id`) REFERENCES `trail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trail_animal_ibfk_2` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trail_animal`
--

LOCK TABLES `trail_animal` WRITE;
/*!40000 ALTER TABLE `trail_animal` DISABLE KEYS */;
INSERT INTO `trail_animal` VALUES (1,1,1,5),(2,4,1,6),(3,10,1,13),(4,14,1,9),(5,1,2,2),(6,2,3,5),(7,3,3,9),(8,10,3,11),(9,12,3,7),(10,15,3,17),(11,16,3,14),(12,1,4,19),(13,2,4,30),(14,3,4,20),(15,4,4,25),(16,9,4,18),(17,13,4,21),(18,14,4,27),(19,2,5,16),(20,3,5,23),(21,5,5,8),(22,9,5,12),(23,13,5,8),(24,5,6,2),(25,10,6,2),(26,15,6,4),(27,4,7,18),(28,9,7,17),(29,14,7,10),(30,16,7,15),(31,4,8,2),(32,10,8,9),(33,16,8,13),(34,3,9,6),(35,10,9,6),(36,13,9,11),(37,5,10,8),(38,9,10,21),(39,12,10,13),(40,15,10,18),(41,1,11,80),(42,2,11,63),(43,3,11,72),(44,4,11,30),(45,5,11,60),(46,6,11,72),(47,7,11,20),(48,8,11,30),(49,9,11,72),(50,10,11,12),(51,11,11,66),(52,12,11,72),(53,13,11,33),(54,14,11,52),(55,15,11,32),(56,16,11,48),(57,1,12,5),(58,9,12,9),(59,11,12,13),(60,1,13,2),(61,9,13,5),(62,15,13,7),(63,1,14,19),(64,2,14,9),(65,3,14,15),(66,10,14,3),(67,13,14,8),(68,14,14,9),(69,16,14,18),(70,1,15,16),(71,2,15,6),(72,3,15,11),(73,10,15,6),(74,13,15,8),(75,1,16,7),(76,10,16,8),(77,11,16,10),(78,16,16,7),(79,4,17,18),(80,10,17,5),(81,14,17,8),(82,2,18,28),(83,4,18,24),(84,5,18,19),(85,9,18,21),(86,15,18,15),(87,16,18,12),(88,3,19,19),(89,5,20,1),(90,1,21,2),(91,10,21,1),(92,13,21,2),(93,1,22,13),(94,10,22,12),(95,15,22,10),(96,2,23,5),(97,9,23,5),(98,12,23,7),(99,5,24,9),(100,10,24,10),(101,15,24,8),(102,3,25,6),(103,9,25,9),(104,13,25,13),(105,1,26,3),(106,10,26,7),(107,11,26,5),(108,4,27,18),(109,9,27,10),(110,14,27,11),(111,16,27,10),(112,4,28,21),(113,5,28,5),(114,10,28,8),(115,12,28,5),(116,14,28,7),(117,15,28,15),(118,1,29,55),(119,2,29,38),(120,3,29,40),(121,6,29,63),(122,8,29,43),(123,10,29,38),(124,13,29,25),(125,14,29,37),(126,15,29,18),(127,7,30,15),(128,9,30,20),(129,13,30,10),(130,7,31,10),(131,9,31,13),(132,12,31,18);
/*!40000 ALTER TABLE `trail_animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `trail_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `trail_id` (`trail_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`trail_id`) REFERENCES `trail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'john1234','john@example.com','1234',1),(2,'jane4567','jane@example.com','4567',1),(3,'fred8910','fred252@example.com','8910',1),(4,'mary1112','mary@example.com','1112',1),(5,'peter1314','mary5@example.com','1314',1),(6,'gwen1516','gwen@example.com','1516',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user-trail`
--

DROP TABLE IF EXISTS `user-trail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user-trail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `trail_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user-trail_user_id_trail_id_unique` (`user_id`,`trail_id`),
  KEY `trail_id` (`trail_id`),
  CONSTRAINT `user-trail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user-trail_ibfk_2` FOREIGN KEY (`trail_id`) REFERENCES `trail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user-trail`
--

LOCK TABLES `user-trail` WRITE;
/*!40000 ALTER TABLE `user-trail` DISABLE KEYS */;
INSERT INTO `user-trail` VALUES (1,1,1),(7,1,2),(8,1,3),(9,1,4),(2,2,1),(3,3,2),(4,4,2),(5,4,3),(6,5,3);
/*!40000 ALTER TABLE `user-trail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-20 20:47:25
