<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 13:57
 */
namespace app\admin\controller;

class Article extends AdminBase
{
    public function index()
    {

    }

    public function description()
    {
        return $this->fetch();
    }

    public function same()
    {
        return $this->fetch();
    }

    public function same_index()
    {
        return $this->fetch();
    }

    public function keywords()
    {
        return $this->fetch();
    }

    public function search_keywords()
    {
        return $this->fetch();
    }
}