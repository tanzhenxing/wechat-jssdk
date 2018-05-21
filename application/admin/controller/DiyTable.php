<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 15:08
 */
namespace app\admin\controller;

class DiyTable extends AdminBase
{
    public function index()
    {
        return $this->fetch();
    }
}