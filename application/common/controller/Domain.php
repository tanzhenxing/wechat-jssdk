<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/22
 * Time: 14:28
 */
namespace app\common\controller;

use think\Controller;

class Domain extends Controller
{
    public function info()
    {
        $domain = $this->request->host();
        $domain = str_replace('www.','',$domain);
        return $domain;
    }
}