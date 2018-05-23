<?php
/**
 * Created by PhpStorm.
 * User: tanzhenxing
 * Date: 2018/5/22
 * Time: 9:47
 */
namespace app\common\controller;

use app\common\model\Sysconfig;
use think\Controller;

class TemplatePath extends Controller
{
    /**
     * @throws \think\exception\DbException
     */
    public function info()
    {
        $template_data = Sysconfig::get(['varname'=>'cfg_df_style']);
        $template_name = $template_data['value'];
        $module_name = $this->request->module();
        $controller_name = $this->request->controller();
        $action_name = $this->request->action();
        $template_path = '/' . $template_name . '/' . $module_name . '/' . $controller_name . '/' . $action_name;
        return $template_path;
    }
}