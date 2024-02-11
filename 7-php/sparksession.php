<?php

require dirname(__FILE__).'/vendor/autoload.php';
require dirname(__FILE__).'/dataframe.php';

class SparkSession{

    /** var Spark\Connect\SparkConnectServiceClient $client */
    private $client;
    private $session_id;

    public function __construct(){

        $hostname = 'localhost:15002';

        $this->client = new Spark\Connect\SparkConnectServiceClient($hostname, [
            'credentials' => Grpc\ChannelCredentials::createInsecure(),
        ]);

        $this->session_id = $this->generateGUID();
    }

    public function range(int $end){
        $range = (new Spark\Connect\Range())
                    ->setEnd($end)
                    ->setStep(1)
                    ->setStart(0);

        $relation = (new Spark\Connect\Relation())
                        ->setRange($range);

        return new DataFrame($relation, $this);
    }

    public function executePlan($plan){

        $request = (new Spark\Connect\ExecutePlanRequest())
                    ->setSessionId($this->session_id)
                    ->setPlan($plan)
                    -> setClientType('SPARK_CONNECT_PHP');

        $response  = $this->client->ExecutePlan($request);
        echo "executed." . PHP_EOL;
        
        foreach($response->responses() as $current) {
        
            echo $current->getSessionId() . '::' . $current->getResponseId() . '::' . $current->getOperationId() . '::' . $current->getResponseType() . PHP_EOL;
            
            if($current->getResponseType() == 'arrow_batch'){
                $batch = $current->getArrowBatch();
                echo 'ARROW BATCH:' . PHP_EOL;
                echo $batch->serializeToString() . PHP_EOL;
            }
        }
    }

    function generateGUID() {
        $data = random_bytes(16);
    
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
    
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }
}


