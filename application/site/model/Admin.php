<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 6:17
 */
namespace app\site\model;

use think\Model;

class  Admin extends Model
{
    // 直接使用配置参数名
    protected $connection = 'site';
}