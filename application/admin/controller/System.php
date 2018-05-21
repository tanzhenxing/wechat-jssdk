<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 13:28
 */
namespace app\admin\controller;


class System extends AdminBase
{
    public function data_replace()
    {
        return $this->fetch();
    }

    public function data_replace_update()
    {

    }

    public function tags()
    {
        return $this->fetch();
    }

    public function tags_update()
    {

    }
}