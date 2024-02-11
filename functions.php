<?php

require dirname(__FILE__).'/vendor/autoload.php';

class functions{
    public static function lit($value){
        $expression = new Spark\Connect\Expression();
        $expression->setLiteral(new Spark\Connect\Expression\Literal($value));
    }
}