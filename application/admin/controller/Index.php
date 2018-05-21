<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 10:12
 */
namespace app\admin\controller;


class Index extends AdminBase
{
    public function index()
    {
        return $this->fetch();
    }

    public function menu()
    {
        return $this->fetch();
    }

    public function body()
    {
        return $this->fetch();
    }
}