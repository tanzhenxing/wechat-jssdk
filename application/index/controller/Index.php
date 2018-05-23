<?php
namespace app\index\controller;

use app\base\controller\Base;

class Index extends Base
{
    /**
     * @return mixed
     */
    public function index()
    {
       return $this->fetch($this->template_path);
    }

}
