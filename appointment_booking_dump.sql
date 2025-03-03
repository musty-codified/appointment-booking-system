-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: appointments_app
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `date` date NOT NULL,
  `time_slot` time NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `date` (`date`,`time_slot`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,1,'2025-03-05','08:30:00','2025-03-02 09:11:42'),(2,2,'2025-03-05','09:30:00','2025-03-02 09:16:23'),(3,7,'2025-04-05','10:30:00','2025-03-02 10:53:07'),(4,14,'2025-04-05','11:30:00','2025-03-03 21:02:17'),(5,14,'2025-03-05','12:30:00','2025-03-03 22:28:17');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@gmail.com','pass1234','user','2025-03-01 22:57:10'),(2,'admin@example.com','$2b$10$LGNI4HmOXbB7.72ag85R/.BB.Fh9LpArurUFnxhdMw/5RuyJhbbfq','admin','2025-03-01 22:59:15'),(3,'user@gmail.com','user1234','user','2025-03-01 23:10:27'),(4,'john@gmail.com','$2b$10$uRJVl7aS8fYH9373LzH6/O14bN0GigXiK4MIQhamUjcdThPtBqUIy','user','2025-03-01 23:13:51'),(5,'doe@gmail.com','$2b$10$5znHxIuOV5d3k.WO0CkJIuQfEgvxV5abuJEFkhuc6ANYKlzmfP4ZW','user','2025-03-01 23:46:12'),(6,'','$2b$10$vbFuilEl7RIEuMOZRFqmseCxggqu2Dy2MVx9Cyn2n4d/welNYruHi','user','2025-03-01 23:56:24'),(7,'johnuser@gmail.com','$2b$10$vjzluFKM7ZyN2lZLvAWii.bjQYkTF3XkAVSX.lXrNaEdN4dbNlNPe','user','2025-03-02 10:39:51'),(8,'papi@gmail.com','$2b$10$vX12ySu1W.ImTyGS55qUceb0mrR6fHJMaudbZIZEUJFzd5YlVchNu','user','2025-03-02 11:23:46'),(9,'admin@gmail.com','Adminpass123','admin','2025-03-02 11:28:26'),(10,'ilemonamustapha@gmail.com','$2b$10$o7jCCcEKRqSSrp2sHQ77qOHywksk/yXDzBomtq3Nf9PF/toEPO7ru','user','2025-03-02 16:53:50'),(12,'ileamustapha@gmail.com','$2b$10$HXlq0d7.N78f20I9QDBc2.96s88uTrwT9lab671S1EvpR4rfI4pMq','user','2025-03-02 17:55:35'),(14,'Benjamin@gmail.vom','$2b$10$G1ZQLpC2OIlyC1wyWMcZ4OVE9gIsTfZVYs7DEezpYlf./YlGmj6Hy','user','2025-03-02 18:06:16'),(16,'test@example.com','$2b$10$zHv0AqBEXeqvfsS6fzClT.t7UqRAxyqJ57R0ds/HXwnMeLIZW1I/i','admin','2025-03-03 14:01:24');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-04  0:38:00
