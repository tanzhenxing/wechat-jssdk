<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 9:21
 */
namespace app\admin\controller;

use app\common\controller\Password;
use app\common\model\Admin;
use think\Controller;

class Login extends Controller
{
    /**
     * 后台登录
     * @return mixed
     */
    public function index()
    {
        return $this->fetch();
    }

    /**
     * 后台登录检查
     * @throws \think\exception\DbException
     */
    public function check()
    {
        $post_data = $this->request->param();
        // 判断验证码是否正确
        if(!captcha_check($post_data['captcha']))
        {
            $this->error('验证码不正确！');
        }
        // 判断用户名和密码是否为空
        if(empty($post_data['username']) && empty($post_data['password'])){
            $this->error('用户名或密码不能为空！');
        }
        // 判断用户名是否正确
        $admin = Admin::get(['userid'=>$post_data['username']]);
        if(empty($admin)){
            $this->error('用户名或密码不正确！');
        }
        // 判断密码是否正确
        $password_make = new Password();
        $password = $password_make->make($post_data['password']);
        if($admin['pwd']!=$password){
            $this->error('用户名或密码不正确！');
        }

        // 保存登录信息
        session('admin_username',$post_data['username']);

        $this->success('登录成功','/admin/index/index');
    }
}