<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use app\common\model\Arctype;

/**
 * 文章分类、文章详情页路由批量注册
 */
$arctype = Arctype::all();
foreach ($arctype as $item){
    $category_path = $item['typedir'];
    $category_path = str_replace('{cmspath}/','',$category_path); // 分类路径

    // Route::get($category_path . '/list_<id>_<page_num>','article/Category/view'); // 文章分类列表分页
    // Route::get($category_url ,'article/Category/view',['method' => 'get', 'ext' => 'html']); // 文章分类默认首页
    // Route::get($category_path . '/:id','article/Article/view',['method' => 'get', 'ext' => 'html'], ['id' => '\d+']); // 文章详细页
    Route::get($category_path . '/:id','article/Category/view',['method' => 'get', 'ext' => 'html']); // 文章分类默认页
    Route::get($category_path ,'article/Category/view'); // 文章分类默认页

}

Route::get('verify','base/verify/captcha');
