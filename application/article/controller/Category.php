<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/22
 * Time: 16:20
 */
namespace app\article\controller;

use think\Controller;

class Category extends Controller
{
    public function view()
    {
        $base_url = $this->request->baseUrl();
        echo $base_url.'<br />';
        $file_name = preg_replace('/(.*)\//','',$base_url);
        $file_name = preg_replace('/.html/','',$file_name);
        echo $file_name;
        preg_match('/^index/',$file_name,$file_name2);
        dump($file_name2);
    }
}