<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 15:17
 */
namespace app\admin\controller;

class Upload extends AdminBase
{
    public function index()
    {
        return $this->fetch();
    }
}