<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Edit Page</title>
    <link rel="stylesheet" href="stylesheets/toastr.css">
    <link rel="stylesheet" href="stylesheets/grapes.css">
    <link rel="stylesheet" href="stylesheets/grapesjs-preset-webpage.css">
    <link rel="stylesheet" href="stylesheets/style.css">
    <link href="stylesheets/grapick.css" rel="stylesheet">

    <script src="js/jquery.js"></script>
    <script src="js/toastr.js"></script>
    <script src="js/grapes.js"></script>
    <script src="js/plugins/grapesjs-preset-webpage.js"></script>
    <!--script src="js/plugins/grapesjs-blocks-basic.js"></script-->
    <script src="js/plugins/grapesjs-custom-code.js"></script>
    <script src="js/plugins/grapesjs-parser-postcss.js"></script>
    <script src="js/plugins/grapesjs-tui-image-editor.js"></script>
    <script src="js/plugins/grapesjs-style-bg.js"></script>
    <!--script src="js/plugins/grapesjs-blocks-table.js"></script-->
    <script src="js/plugins/grapesjs-style-border.js"></script>

    <?php

    require_once('../../../config.php');
    require_login();
    $context = context_system::instance();
    require_capability('mod/certificatebeautiful:addinstance', $context);

    require_once("{$CFG->dirroot}/mod/certificatebeautiful/classes/local/fonts/font_util.php");
    $fontList = \mod_certificatebeautiful\local\fonts\font_util::mpdf_list_fonts();

    echo "<style>{$fontList['css']}</style>"
    ?>
</head>
<body>

<div id="gjs" style="height:0; overflow:hidden">
    <?php

    $id = required_param('id', PARAM_INT);
    $page = required_param('page', PARAM_INT);

    $certificatebeautifulmodel = $DB->get_record('certificatebeautiful_model', ['id' => $id], "*", MUST_EXIST);
    $certificatebeautifulmodel->pages_info_object = json_decode($certificatebeautifulmodel->pages_info);

    if (isset($certificatebeautifulmodel->pages_info_object[$page])) {
        $pageinfo = $certificatebeautifulmodel->pages_info_object[$page];
    } else {
        $pageinfo = (object)[];
    }

    if (!isset($pageinfo->htmldata)) {
        $pageinfo->htmldata = '<div>' . get_string('certificatebeautiful-page_empty', 'certificatebeautiful') . '</div>';
    }
    if (!isset($pageinfo->cssdata)) {
        $pageinfo->cssdata = "
                [data-gjs-type=wrapper] {
                    background-image: url(/mod/certificatebeautiful/_editor/img/vazio.jpg);
                    position: relative;
                    height: 673px;
                    width: 955px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }";
    }

    $pageinfo->htmldata = str_replace('<tbody', '<tbody data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"', $pageinfo->htmldata);
    $pageinfo->htmldata = str_replace('<tr', '<tr data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"', $pageinfo->htmldata);

    echo "{$pageinfo->htmldata}<style>{$pageinfo->cssdata}</style>";
    ?>
</div>

<?php

require_once("editor-grapesjs.script.php");
?>
</body>
</html>
