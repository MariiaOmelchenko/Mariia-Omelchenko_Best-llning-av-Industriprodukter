-- MySQL dump 10.13  Distrib 8.4.3, for Win64 (x86_64)
--
-- Host: localhost    Database: orders_db
-- ------------------------------------------------------
-- Server version	8.4.3

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
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` varchar(255) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT '1',
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,'dd92db47-31d2-49b7-bad5-905df88db957',1,1,100.00),(2,'dd92db47-31d2-49b7-bad5-905df88db957',2,1,50.00),(3,'8a003fd9-b557-4e30-946c-e340a968f658',1,1,100.00),(4,'5b83af27-9028-43b7-9444-b92d2aab7170',26,1,350.00),(5,'34e33e95-dcde-4df5-b364-1b7b3cdd5e0c',7,1,500.00),(6,'34e33e95-dcde-4df5-b364-1b7b3cdd5e0c',12,1,800.00),(7,'34e33e95-dcde-4df5-b364-1b7b3cdd5e0c',17,1,800.00),(8,'4c7bc900-707a-48cb-8cd1-d61460ba6e1a',3,1,7500.00),(9,'f1100ea7-7389-4d5c-85cd-407adc475339',1,1,100.00),(10,'5ede012e-6e7e-4bc4-b996-f78e714fba0e',6,1,4000.00),(11,'749de3eb-af5c-4c9d-998b-8988d8380b65',1,1,100.00),(12,'749de3eb-af5c-4c9d-998b-8988d8380b65',7,1,500.00),(13,'749de3eb-af5c-4c9d-998b-8988d8380b65',10,1,1500.00);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` varchar(255) NOT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `total_price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('34e33e95-dcde-4df5-b364-1b7b3cdd5e0c','2024-11-13 09:45:51',2100.00),('4c7bc900-707a-48cb-8cd1-d61460ba6e1a','2024-11-13 09:49:06',7500.00),('5b83af27-9028-43b7-9444-b92d2aab7170','2024-11-13 09:21:56',350.00),('5ede012e-6e7e-4bc4-b996-f78e714fba0e','2024-11-13 09:49:48',4000.00),('749de3eb-af5c-4c9d-998b-8988d8380b65','2024-11-13 09:52:43',2100.00),('8a003fd9-b557-4e30-946c-e340a968f658','2024-11-13 09:11:23',100.00),('dd92db47-31d2-49b7-bad5-905df88db957','2024-11-13 08:54:09',150.00),('f1100ea7-7389-4d5c-85cd-407adc475339','2024-11-13 09:49:29',100.00);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 10:54:11
