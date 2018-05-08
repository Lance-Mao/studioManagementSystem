-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: studiomanagementsystem
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.17.10.1

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
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (29),(29);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `web_station_record`
--

DROP TABLE IF EXISTS `web_station_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `web_station_record` (
  `id` int(11) NOT NULL,
  `log_comment_content` varchar(255) DEFAULT NULL,
  `log_comment_count` varchar(255) DEFAULT NULL,
  `log_content` mediumtext,
  `log_image` varchar(255) DEFAULT NULL,
  `log_like` varchar(255) DEFAULT NULL,
  `log_like_it` varchar(255) DEFAULT NULL,
  `log_title` varchar(255) DEFAULT NULL,
  `release_date` datetime DEFAULT NULL,
  `stu_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgglwhn5h4fcrtaot0rynpe1cp` (`stu_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_station_record`
--

LOCK TABLES `web_station_record` WRITE;
/*!40000 ALTER TABLE `web_station_record` DISABLE KEYS */;
INSERT INTO `web_station_record` VALUES (10,'日志评论内容','6','日志内容','日志图片','3','4','日志标题','2018-04-30 11:58:10',1),(11,'日志评论内容001','6','日志内容001','日志图片001','3','4','日志标题001','2018-04-30 11:58:10',2),(12,'日志评论内容002','6','日志内容002','日志图片002','3','4','日志标题002','2018-04-30 11:58:10',3),(16,'日志评论内容','6','日志内容','日志图片','3','4','日志标题','2018-04-30 12:14:00',1),(17,'日志评论内容001','6','日志内容001','日志图片001','3','4','日志标题001','2018-04-30 12:14:00',1),(18,'日志评论内容002','6','日志内容002','日志图片002','3','4','日志标题002','2018-04-30 12:14:00',2),(22,NULL,NULL,'0000000000000000000000000000000000',NULL,NULL,NULL,NULL,NULL,3),(23,NULL,NULL,'1231231',NULL,NULL,NULL,NULL,NULL,3),(24,NULL,NULL,'123132123',NULL,NULL,NULL,'1234564',NULL,3),(28,NULL,NULL,'## DOM节点的创建\n### jQuery节点创建与属性的处理\n#### 创建元素节点：\n\n```\n$(\"<div></div>\")\n```\n\n<!--more-->\n\n#### 创建为属性节点：\n\n```\n$(\"<div id=\'test\' class=\'aaron\'>TEXT</div>\")\n```\n\n## DOM节点的插入\n### DOM内部插入append()与appendTo()\n\n- append：这个操作与对指定的元素执行原生的appendChild方法，将它们添加到文档中的情况类似。\n\n- appendTo：实际上，使用这个方法是颠倒了常规的$(A).append(B)的操作，即不是把B追加到A中，而是把A追加到B中。\n\n```\n    <script type=\"text/javascript\">\n\n        $(\"#bt1\").on(\'click\', function() {\n    		//.append(), 内容在方法的后面，\n    		//参数是将要插入的内容。\n    		$(\".content\").append(\'<div class=\"append\">通过append方法添加的元素</div>\')\n    	})\n\n    </script>\n\n    <script type=\"text/javascript\">\n\n    	$(\"#bt2\").on(\'click\', function() {\n    		//.appendTo()刚好相反，内容在方法前面，\n    		//无论是一个选择器表达式 或创建作为标记上的标记\n    		//它都将被插入到目标容器的末尾。\n    		$(\'<div class=\"appendTo\">通过appendTo方法添加的元素</div>\').appendTo($(\".content\"))\n    	})\n\n    </script>\n```\n\n### DOM外部插入after()与before()\n\n- .after(content)：在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点\n\n- .before(content)：与上同理，只是在匹配元素前面插入内容\n\n\n```\n    <script type=\"text/javascript\">\n    $(\"#bt1\").on(\'click\', function() {\n        //在匹配test1元素集合中的每个元素前面插入p元素\n        $(\".test1\").before(\'<p style=\"color:red\">before,在匹配元素之前增加</p>\', \'<p style=\"color:red\">多参数</p>\')\n    })\n    </script>\n    <script type=\"text/javascript\">\n    $(\"#bt2\").on(\'click\', function() {\n        //在匹配test1元素集合中的每个元素后面插入p元素\n        $(\".test2\").after(\'<p style=\"color:blue\">after,在匹配元素之后增加</p>\', \'<p style=\"color:blue\">多参数</p>\')\n\n    })\n    </script>\n```\n\n### DOM内部插入prepend()与prependTo()\n\n- prepend：向每个匹配的元素内部前置内容\n\n- prepend：把所有匹配的元素前置到另一个指定的元素集合中\n\n```\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Title</title>\n    <script src=\"https://cdn.bootcss.com/jquery/3.3.1/jquery.js\"></script>\n    <script src=\"https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js\"></script>\n    <style>\n        .aaron1{\n            border: 1px solid red;\n        }\n        .aaron2{\n            border: 1px solid blue;\n        }\n        .aaron2 p {\n            color: #FF2255;\n        }\n    </style>\n</head>\n<body>\n<h2>通过prepend与prependTo添加元素</h2>\n<button id=\"bt1\">点击通过jQuery的prepend添加元素</button>\n<button id=\"bt2\">点击通过jQuery的prependTo添加元素</button>\n<div class=\"aaron1\">\n    <p>测试prepend</p>\n</div>\n<div class=\"aaron2\">\n    <p>测试prependTo</p>\n</div>\n<script type=\"text/javascript\">\n    $(\"#bt1\").on(\'click\', function() {\n        //找到class=\"aaron1\"的div节点\n        //然后通过prepend在内部的首位置添加一个新的p节点\n        $(\'.aaron1\')\n            .prepend(\'<p>prepend增加的p元素</p>\')\n    })\n</script>\n<script type=\"text/javascript\">\n    $(\"#bt2\").on(\'click\', function() {\n        //找到class=\"aaron2\"的div节点\n        //然后通过prependTo内部的首位置添加一个新的p节点\n        $(\'<p>prependTo增加的p元素</p>\')\n            .prependTo($(\'.aaron2\'))\n    })\n</script>\n</body>\n</html>\n```\n\n>效果图\n![Screenshot from 2018-04-04 16-44-17.png](https://upload-images.jianshu.io/upload_images/5207977-995c74cca6798ac6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n#### 总结下内部操作四个方法的区别：\n\n- append()向每个匹配的元素内部追加内容\n- prepend()向每个匹配的元素内部前置内容\n- appendTo()把所有匹配的元素追加到另一个指定元素的集合中\n- prependTo()把所有匹配的元素前置到另一个指定的元素集合中\n\n### DOM外部插入insertAfter()与insertBefore()\n\n- insertBefore：在目标元素前面插入集合中每个匹配的元素\n\n- insertAfter：在目标元素后面插入集合中每个匹配的元素\n\n#### 注意\n - insertAfter将JQuery封装好的元素插入到指定元素的后面，如果元素后面有元素了，那将后面的元素后移，然后将JQuery对象插入；\n - insertBefore将JQuery封装好的元素插入到指定元素的前面，如果元素前面有元素了，那将前面的元素前移，然后将JQuery对象插入；\n\n## DOM节点的删除\n\n### DOM节点删除之empty()的基本用法\nempty()方法跟删除不一样，empty()只移除指定元素中所有的子节点，同样移除元素里的文本。但是本身元素不被删除\n\n\n```\n<div class=\"example\"><p>测试empty()</p></div>\n```\n通过empty处理\n\n```\n$(\'.example\').empty()\n```\n结果\n\n```\n<div class=\"example\"></div>\n```\n\n### DOM节点删除之remove()的有参用法和无参用法\nremove与empty一样，都是移除元素的方法，但是remove会将元素自身移除，同时也会移除元素内部的一切，包括绑定的事件及与该元素相关的jQuery数据。\n\n```\n <script type=\"text/javascript\">\n    $(\"#button1\").on(\'click\', function() {\n        //删除整个 class=test1的div节点\n        $(\".test1\").remove()\n    })\n\n    $(\"#button2\").on(\'click\', function() {\n        //找到所有p元素中，包含了3的元素\n        //这个也是一个过滤器的处理\n        $(\"p\").remove(\":contains(\'3\')\")\n    })\n </script>\n```\n\n### DOM节点删除之empty和remove区别\n\n#### empty方法\n\n- 严格地讲，empty()方法并不是删除节点，而是清空节点，它能清空元素中的所有后代节点\n- empty不能删除自己本身这个节点\n\n#### remove方法\n\n- 该节点与该节点所包含的所有后代节点将同时被删除\n- 提供传递一个筛选的表达式，删除指定合集中的元素\n\n### DOM节点删除之保留数据的删除操作detach()\n删除页面上的节点，但是节点上的数据与事件不会丢失。\n\n```\n<div>\n    <p>P元素1，默认给绑定一个点击事件</p>\n    <p>P元素2，默认给绑定一个点击事件</p>\n    <button id=\"bt1\">点击删除 p 元素</button>\n    <button id=\"bt2\">点击移动 p 元素</button>\n</div>\n<script type=\"text/javascript\">\n    $(\'p\').click(function(e) {\n        alert(e.target.innerHTML)\n    })\n    var p;\n    $(\"#bt1\").click(function() {\n        if (!$(\"p\").length) return; //去重\n        //通过detach方法删除元素\n        //只是页面不可见，但是这个节点还是保存在内存中\n        //数据与事件都不会丢失\n        p = $(\"p\").detach()\n    });\n\n    $(\"#bt2\").click(function() {\n        //把p元素在添加到页面中\n        //事件还是存在\n        $(\"body\").append(p);\n    });\n</script>\n```\n\n### DOM节点删除之detach()和remove()区别\n\n#### remove：移除节点\n\n- 无参数，移除自身整个节点以及该节点的内部的所有节点，包括节点上事件与数据\n- 有参数，移除筛选出的节点以及该节点的内部的所有节点，包括节点上事件与数据\n\n#### detach：移除节点\n\n- 移除的处理与remove一致\n- 与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来\n例如：$(\"p\").detach()这一句会移除对象，仅仅是显示效果没有了。但是内存中还是存在的。当你append之后，又重新回到了文档流中。就又显示出来了。\n\n## DOM节点的复制与替换\n### DOM拷贝clone()\n>.clone()方法深度 复制所有匹配的元素集合，包括所有匹配元素、匹配元素的下级元素、文字节点。\n\n```\nHTML部分\n<div></div>\n\nJavaScript部分\n$(\"div\").on(\'click\', function() {//执行操作})\n\n//clone处理一\n$(\"div\").clone()   //只克隆了结构，事件丢失\n\n//clone处理二\n$(\"div\").clone(true) //结构、事件与数据都克隆\n```\n\n### DOM替换replaceWith()和replaceAll()\n#### .replaceWith( newContent )：用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合\n\n```\n<div>\n    <p>第一段</p>\n    <p>第二段</p>\n    <p>第三段</p>\n</div>\n```\n\n替换第二段的节点与内容\n\n```\n$(\"p:eq(1)\").replaceWith(\'<a style=\"color:red\">替换第二段的内容</a>\')\n```\n\n结果\n```\n<div>\n    <p>第一段</p>\n    <a style=\"color:red\">替换第二段的内容</a>\'\n    <p>第三段</p>\n</div>\n```\n\n#### .replaceAll( target ) ：用集合的匹配元素替换每个目标元素\n.replaceAll()和.replaceWith()功能类似，但是目标和源相反，用上述的HTML结构，我们用replaceAll处理\n\n```\n$(\'<a style=\"color:red\">替换第二段的内容</a>\').replaceAll(\'p:eq(1)\')\n```\n\n总结\n- .replaceAll()和.replaceWith()功能类似，主要是目标和源的位置区别\n- .replaceWith()与.replaceAll() 方法会删除与节点相关联的所有数据和事件处理程序\n- .replaceWith()方法，和大部分其他jQuery方法一样，返回jQuery对象，所以可以和其他方法链接使用\n- .replaceWith()方法返回的jQuery对象引用的是替换前的节点，而不是通过replaceWith/replaceAll方法替换后的节点\n\n### DOM包裹wrap()方法\nwrap方法是指在改元素的基础上为其添加一个父元素\n\n```\n<p>p元素</p>\n```\n给p元素增加一个div包裹\n```\n$(\'p\').wrap(\'<div></div>\')\n```\n最后的结构\n```\n<div>\n    <p>p元素</p>\n</div>\n```\n\n### DOM包裹unwrap()方法\n作用与wrap方法是相反的。将匹配元素集合的父级元素删除，保留自身（和兄弟元素，如果存在）在原来的位置。\n\n```\n<div>\n    <p>p元素</p>\n</div>\n```\n找到p元素，然后调用unwrap方法，这样只会删除父辈div元素了\n```\n$(\'p\').unwrap();\n```\n结果\n```\n<p>p元素</p>\n```\n\n### DOM包裹wrapAll()方法\n.wrapAll( wrappingElement )：给集合中匹配的元素增加一个外面包裹HTML结构\n\n```\n<p>p元素</p>\n<p>p元素</p>\n```\n\n给所有p元素增加一个div包裹\n\n```\n$(\'p\').wrapAll(\'<div></div>\')\n```\n\n最后结果\n\n```\n<div>\n    <p>p元素</p>\n    <p>p元素</p>\n</div>\n```\n\n.wrapAll( function ) ：一个回调函数，返回用于包裹匹配元素的 HTML 内容或 jQuery 对象。通过回调的方式可以单独处理每一个元素。\n\n```\n$(\'p\').wrapAll(function() {\n    return \'<div><div/>\';\n})\n```\n\n结果\n```\n<div>\n    <p>p元素</p>\n</div>\n<div>\n    <p>p元素</p>\n</div>\n```\n\n### DOM包裹wrapInner()方法\n.wrapInner( wrappingElement )：给集合中匹配的元素的内部，增加包裹的HTML结构\n\n```\n<div>p元素</div>\n<div>p元素</div>\n```\n\n给所有元素增加一个p包裹\n\n```\n$(\'div\').wrapInner(\'<p></p>\')\n```\n\n最后的结构\n\n```\n<div>\n    <p>p元素</p>\n</div>\n<div>\n    <p>p元素</p>\n</div>\n```\n\n## jQuery遍历\n### jQuery遍历之children()方法\n查找合集里面的第一级子元素，children(selector) 方法是返回匹配元素集合中每个元素的所有子元素。\n\n```\n<div class=\"div\">\n    <ul class=\"son\">\n        <li class=\"grandson\">1</li>\n    </ul>\n</div>\n```\n代码如果是$(\"div\").children()，那么意味着只能找到ul，因为div与ul是父子关系，li与div是祖辈关系，因此无法找到。\n\n### jQuery遍历之find()方法\n\n```\n<div class=\"div\">\n    <ul class=\"son\">\n        <li class=\"grandson\">1</li>\n    </ul>\n</div>\n```\nchildren是父子关系查找，find是后代关系（包含父子关系）\n\n#### .find()方法要注意的知识点：\n\n- find是遍历当前元素集合中每个元素的后代。只要符合，不管是儿子辈，孙子辈都可以。\n- 与其他的树遍历方法不同，选择器表达式对于 .find() 是必需的参数。如果我们需要实现对所有后代元素的取回，可以传递通配选择器 \'*\'。\n- find只在后代中遍历，不包括自己。\n- 选择器 context 是由 .find() 方法实现的；因此，$(\'.item-ii\').find(\'li\') 等价于 $(\'li\', \'.item-ii\')(找到类名为item-ii的标签下的li标签)。\n\n### jQuery遍历之parents()方法\n快速查找合集里面的每一个元素的所有祖辈元素\n\n```\n<div class=\"div\">\n    <ul class=\"son\">\n        <li class=\"grandson\">1</li>\n    </ul>\n</div>\n```\n在li节点上找到祖 辈元素div， 这里可以用$(\"li\").parents()方法\n\n### jQuery遍历之next()方法\n允许我们找遍元素集合中紧跟着这些元素的直接兄弟元素，并根据匹配的元素创建一个新的 jQuery 对象。\n\n### jQuery遍历之prev()方法\n取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合\n\n### jQuery遍历之siblings()\n取得一个包含匹配的元素集合中每一个元素的同辈元素的元素集合\n\n### jQuery遍历之add()方法\n.add()的参数可以几乎接受任何的$()，包括一个jQuery选择器表达式，DOM元素，或HTML片段引用。\n\n### jQuery遍历之each()\n\n- each是一个for循环的包装迭代器\n- each通过回调的方式处理，并且会有2个固定的实参，索引与元素\n- each回调方法中的this指向当前迭代的dom元\n\n```\n<ul>\n    <li>ＡＡＡ</li>\n    <li>ＢＢＢ</li>\n    <li>ＣＣＣ</li>\n</ul>\n```\n开始迭代li，循环3次\n```\n$(\"li\").each(function(index, element) {\n     index 索引 0,1,2\n     element是对应的li节点 li,li,li\n     this 指向的是li\n})\n```',NULL,NULL,NULL,'jQuery-dom操作','2018-05-06 14:50:00',3);
/*!40000 ALTER TABLE `web_station_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `web_student`
--

DROP TABLE IF EXISTS `web_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `web_student` (
  `id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `student_grade` varchar(255) DEFAULT NULL,
  `student_id` varchar(255) DEFAULT NULL,
  `student_image` varchar(255) DEFAULT NULL,
  `student_skill` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_student`
--

LOCK TABLES `web_student` WRITE;
/*!40000 ALTER TABLE `web_student` DISABLE KEYS */;
INSERT INTO `web_student` VALUES (1,'123456','大三','15610903150627','','java','jack'),(2,'123456','大三','15618912156154','','python','tom'),(3,'123456','大二','15648941218515','','react','Lance');
/*!40000 ALTER TABLE `web_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `web_student_station_record`
--

DROP TABLE IF EXISTS `web_student_station_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `web_student_station_record` (
  `student_id` int(11) NOT NULL,
  `station_record_id` int(11) NOT NULL,
  PRIMARY KEY (`student_id`,`station_record_id`),
  UNIQUE KEY `UK_8gmqx6mfv9udn6nwv0u0rhexv` (`station_record_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_student_station_record`
--

LOCK TABLES `web_student_station_record` WRITE;
/*!40000 ALTER TABLE `web_student_station_record` DISABLE KEYS */;
INSERT INTO `web_student_station_record` VALUES (1,1),(1,2),(2,3);
/*!40000 ALTER TABLE `web_student_station_record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-07 13:21:31
