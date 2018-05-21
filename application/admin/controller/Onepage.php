<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 14:55
 */
namespace app\admin\controller;

class Onepage extends AdminBase
{
    public function index()
    {
        return $this->fetch();
    }
}