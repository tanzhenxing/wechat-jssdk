DedeCms-ThinkPHP
===============

DedeCms 全新升级，采用ThinkPHP 5.1 内核重构所有的代码
1. 调用指定分类的文章：
{volist name=":category_articles(3)" id="article"}
{$article.title}
{/volist}

 