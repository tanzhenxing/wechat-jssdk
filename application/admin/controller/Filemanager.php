<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 15:21
 */
namespace app\admin\controller;

class Filemanager extends AdminBase
{
    public function index()
    {
        return $this->fetch();
    }
}