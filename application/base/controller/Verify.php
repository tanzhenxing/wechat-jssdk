<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 9:36
 */
namespace app\base\controller;

use think\captcha\Captcha;
use think\Controller;

class Verify extends Controller
{
    /**
     * 自定义验证码
     * @return \think\Response
     */
    public function captcha()
    {
        $config =    [
            // 验证码字符集合
            'codeSet' => '0123456789',
            // 验证码字体大小
            'fontSize'    =>    60,
            // 验证码位数
            'length'      =>    4,
            // 是否画混淆曲线
            'useCurve' => false,
            // 关闭验证码杂点
            'useNoise'    =>    false,
        ];
        $captcha = new Captcha($config);
        return $captcha->entry();
    }
}