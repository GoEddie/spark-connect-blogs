<?php


require dirname(__FILE__).'/vendor/autoload.php';
require dirname(__FILE__).'/sparksession.php';

$session = new SparkSession();
$dataFrame = $session->range(100);

$dataFrame->show(50);

$dataFrame->write->parquet('/tmp/php-parquet');
