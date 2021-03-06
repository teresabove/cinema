<?php
require_once 'app\utility\USingleton.php';
require_once 'app\foundation\Fdb.php';
require_once 'app\entity\ECredenziale.php';

class FCredenziali extends Fdb
{
    public function __construct()
    {
        $this->_table='credenziale';
        $this->_key='idutente';
        $this->_return_class='ECredenziale';
        $this->_connection=USingleton::getInstance("Fdb")->get_connection();
    }
    
     public function load($key) {
        $res = fdb::loadarray($key);
        return $res;
    }
    
    




}