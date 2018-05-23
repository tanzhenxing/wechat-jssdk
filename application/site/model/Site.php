<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/22
 * Time: 14:33
 */
namespace app\site\model;

use think\Model;

class  Site extends Model
{
    // 直接使用配置参数名
    protected $connection = 'site';
}