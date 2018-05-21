<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 7:27
 */
namespace app\common\controller;

use think\Controller;

class Password extends Controller
{
    /**
     * 密码生成方式：生成一个32位md5值，去掉前5位，去掉后7位
     * @param string $password_string
     * @return bool|mixed|string
     */
    public function make($password_string = '')
    {
        $password = md5($password_string);
        $password = substr($password,'5',27); // 去掉前5位
        $password = substr($password, 0, -7); // 去掉后7位
        return $password;
    }
}