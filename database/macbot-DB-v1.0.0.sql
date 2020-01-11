-- MySQL dump 10.16  Distrib 10.1.43-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: macbot
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `punishmentpoints`
--

DROP TABLE IF EXISTS `punishmentpoints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `punishmentpoints` (
  `rowID` int(11) NOT NULL AUTO_INCREMENT,
  `guildID` varchar(50) NOT NULL,
  `userID` varchar(50) NOT NULL COMMENT 'The user being punished ',
  `channelID` varchar(50) NOT NULL COMMENT 'The channel this punishment was issued in',
  `points` int(11) NOT NULL COMMENT 'The number of points assigned for this infraction',
  `moderatorID` varchar(50) NOT NULL COMMENT 'The moderator who issued this punishment',
  `ruleViolated` int(11) NOT NULL COMMENT 'The ID of the rule violated',
  `reasonDetail` varchar(50) NOT NULL COMMENT 'Any additional details given by the moderator',
  `date` datetime NOT NULL COMMENT 'The time the punishment was issued',
  `pardoned` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'If this punishment was pardoned',
  `pardonedById` varchar(50) DEFAULT NULL COMMENT 'The user that pardoned this punishment',
  `pardonedAt` datetime DEFAULT NULL COMMENT 'The time this punishment was pardoned',
  PRIMARY KEY (`rowID`),
  KEY `Index 2` (`guildID`),
  KEY `Index 3` (`userID`),
  KEY `Index 4` (`moderatorID`),
  KEY `Index 5` (`pardoned`),
  KEY `FK_punishmentpoints_rules` (`ruleViolated`),
  CONSTRAINT `FK_punishmentpoints_rules` FOREIGN KEY (`ruleViolated`) REFERENCES `rules` (`rowID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `punishmentpoints`
--

LOCK TABLES `punishmentpoints` WRITE;
/*!40000 ALTER TABLE `punishmentpoints` DISABLE KEYS */;
/*!40000 ALTER TABLE `punishmentpoints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rules`
--

DROP TABLE IF EXISTS `rules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rules` (
  `rowID` int(11) NOT NULL AUTO_INCREMENT,
  `ruleTitle` varchar(50) NOT NULL COMMENT 'The title of the rule',
  `ruleBody` varchar(50) NOT NULL COMMENT 'The body of the rule',
  `defaultPoints` int(11) NOT NULL DEFAULT 0 COMMENT 'The default number of points that can be assigned as a punishment for this rule',
  `minPoints` int(11) NOT NULL DEFAULT 0 COMMENT 'The minimum number of points that can be assigned as a punishment for this rule',
  `maxPoints` int(11) NOT NULL DEFAULT 0 COMMENT 'The maximum number of po ints that can be assigned as a punishment for this rule ',
  PRIMARY KEY (`rowID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rules`
--

LOCK TABLES `rules` WRITE;
/*!40000 ALTER TABLE `rules` DISABLE KEYS */;
/*!40000 ALTER TABLE `rules` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-11 11:31:32
