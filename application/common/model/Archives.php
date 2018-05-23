<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 6:18
 */
namespace app\common\model;

use think\Model;

class  Archives extends Model
{
    public function getPubdateAttr($value)
    {
        $pubdate_time = date('Y-m-d',$value);
        return $pubdate_time;
    }
}