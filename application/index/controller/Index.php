<?php
namespace app\index\controller;

use app\common\controller\Password;
use app\common\model\Admin;

class Index
{
    /**
     * @throws \think\exception\DbException
     */
    public function index()
    {
       $admin = Admin::get(1);
       dump($admin);

       // 密码生成方式：生成一个32位md5值，去掉前5位，去掉后7位
       $password_string = 'cofan7844';
       $password_make = new Password();
       $password = $password_make->make($password_string);
       dump($password);
    }

}
