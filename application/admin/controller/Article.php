<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/21
 * Time: 13:57
 */
namespace app\admin\controller;

use app\common\model\Addonarticle;
use app\common\model\Archives;
use app\common\model\Arctype;

class Article extends AdminBase
{
    /**
     * 文章相关表：dede_addonarticle、dede_archives、dede_arctiny、dede_uploads
     * @return mixed
     * @throws \think\exception\DbException
     */
    public function index()
    {
        $article_data = new Archives();
        $article = $article_data->where(['arcrank'=>0])->order('weight','desc')->paginate(15);
        foreach ($article as $item){
            // 文章正文内容
            $addonarticle = Addonarticle::get(['aid'=>$item['id']]);
            $item['body'] = $addonarticle['body'];
            // 文章分类
            $category = Arctype::get($item['typeid']);
            $item['category_title'] = $category['typename'];
        }
        $this->assign('article',$article);

        return $this->fetch();
    }

    public function create()
    {

    }

    public function save()
    {

    }

    public function edit()
    {

    }

    public function update()
    {

    }

    public function description()
    {
        return $this->fetch();
    }

    public function same()
    {
        return $this->fetch();
    }

    public function same_index()
    {
        return $this->fetch();
    }

    public function keywords()
    {
        return $this->fetch();
    }

    public function search_keywords()
    {
        return $this->fetch();
    }

    public function manage()
    {
        return $this->fetch();
    }
}