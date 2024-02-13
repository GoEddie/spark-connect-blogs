<?php

require dirname(__FILE__).'/vendor/autoload.php';


class DataFrame{
    
    public function __construct(private Spark\Connect\Relation $relation, private SparkSession $session){
       
    }

    public function show(int $rows){

        $showString = (new Spark\Connect\Relation())
                                -> setShowString((new Spark\Connect\ShowString())
                                                    ->setNumRows(10)
                                                    ->setInput($this->relation));

        $plan = (new Spark\Connect\Plan())
                        ->setRoot($showString);

        $this->session->executePlan($plan);
        $this->write = new DataFrameWriter($this->relation, $this->session);
    }

    public $write;

}

class DataFrameWriter{
    
    public function __construct(private Spark\Connect\Relation $relation, private SparkSession $session){
    }

    public function parquet($path){

        $write = (new Spark\Connect\WriteOperation())
                    -> setInput($this->relation)
                    -> setPath($path)
                    -> setSource('parquet')
                    -> setMode(2);

        $writeCommand = (new Spark\Connect\Command())
                            -> setWriteOperation($write);

        $plan = (new Spark\Connect\Plan())
                    ->setCommand($writeCommand);

        $this->session->executePlan($plan);
    }
}