<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 15:07
 */
namespace app\admin\controller;

class Linkage extends AdminBase
{
    public function index()
    {
        return $this->fetch();
    }
}