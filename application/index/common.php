<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/22
 * Time: 9:30
 */

use app\common\model\Archives;
use app\common\model\Flink;
use app\site\model\Slide;


/**
 * 首页调取指定分类下属的文章
 * 根据分类ID获取文章列表（不包括子分类）
 * @param $cid
 * @return array|bool|PDOStatement|string|\think\Collection
 * @throws \think\db\exception\DataNotFoundException
 * @throws \think\db\exception\ModelNotFoundException
 * @throws \think\exception\DbException
 */
function category_articles($cid){
    if(empty($cid)){
        return false;
    }
    $article_data = new Archives();
    $articles = $article_data->where(['typeid'=>$cid])->limit(10)->select();
    return $articles;
}

/**
 * 根据分类ID获取友情链接列表
 * @param $cid
 * @return array|bool|PDOStatement|string|\think\Collection
 * @throws \think\db\exception\DataNotFoundException
 * @throws \think\db\exception\ModelNotFoundException
 * @throws \think\exception\DbException
 */
function flink($cid){
    if(empty($cid)){
        return false;
    }
    $article_data = new Flink();
    $articles = $article_data->where(['typeid'=>$cid])->limit(20)->select();
    return $articles;
}

/**
 * @param $cid
 * @return array|bool|PDOStatement|string|\think\Collection
 * @throws \think\db\exception\DataNotFoundException
 * @throws \think\db\exception\ModelNotFoundException
 * @throws \think\exception\DbException
 */
function slide($cid){
    if(empty($cid)){
        return false;
    }
    $article_data = new Slide();
    $articles = $article_data->where(['category_id'=>$cid])->limit(10)->select();
    return $articles;
}