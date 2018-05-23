<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 6:43
 */
namespace app\common\model;

use think\Model;

class  Sysconfig extends Model
{
    // 直接使用配置参数名
    protected $connection = 'my_site';
}