<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 11:05
 */
namespace app\admin\controller;

use think\Controller;

class Logout extends Controller
{
    public function index()
    {
        session('admin_username',null);
        $this->success('正在注销登录！','/admin/login/index');
    }
}